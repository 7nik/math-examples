<script lang="ts">
    import { browser } from "$app/env";
    import { fade } from "svelte/transition";
    import { Vertex, Edge, getEdgeIndex } from "./GraphUtils";

    export let vertices: Vertex[];
    export let edges: Edge[];
    export let editable: {
        addVertex?: boolean,
        moveVertex?: boolean,
        addEdge?: "weighted"|"unweighted",
        removeEdge?: boolean,
        reweightEdge?: boolean,
    } = {};
    let editHint = "";
    $: {
        editHint = "";
        if (editable.addVertex) editHint += "Ctrl-click - додати вершину у пустому місці\n";
        if (editable.moveVertex) editHint +=  "Мишею можна перміщювати вершини" + (editable.addEdge ? " при натиснутому Ctrl":"") + "\n";
        if (editable.addEdge) editHint += "Можна додати ребра (витягуючи їх з вершини)\n";
        if (editable.removeEdge) editHint += "Можна прибирати ребра натискаючи на них\n";
        if (editable.reweightEdge) editHint += "Можна змінювати вагу ребр тянучи за значення\n";
        editHint = editHint.trim();
    }

    let vcoord: Record<number, [number, number]>;
    $: {
        vcoord = {};
        vertices.forEach(v => {
            vcoord[v.i] = [v.x , v.y];
        });
    }

    function mid (a: number, b: number, odd: boolean) {
        return (a*(odd ? 9 : 11) + b*(odd ? 11 : 9)) / 20;
    }

	function middle(v1: [number, number], v2: [number, number], i: number) {
        return {
            x: mid(v1[0], v2[0], !!(i%2)),
            y: mid(v1[1], v2[1], !!(i%2)),
        }
	}

    $: Xmax = vertices.length === 0 ? 0 : vertices.reduce((m,v) => m.x > v.x ? m : v).x;
    $: Ymax = vertices.length === 0 ? 0 : vertices.reduce((m,v) => m.y > v.y ? m : v).y;
    $: Xmin = vertices.length === 0 ? 0 : vertices.reduce((m,v) => m.x < v.x ? m : v).x;
    $: Ymin = vertices.length === 0 ? 0 : vertices.reduce((m,v) => m.y < v.y ? m : v).y;
    $: Wmax = edges.reduce((m,e) => Math.max(m, e.weight || 0), 0) || 50;
    $: Xrange = Xmax - Xmin;
    $: Yrange = Ymax - Ymin;
    $: w = Xrange > Yrange ? 800 : 800/Yrange*Xrange;
    $: h = Yrange > Xrange ? 800 : 800/Xrange*Yrange;

    let svg:SVGSVGElement;
    let point:DOMPoint;
    if (browser) point = new DOMPoint();

    const duration = 200;
    let grabbing = false;
    let ctrlKey = false;

    function removeEdge(edge: Edge) {
        if (!editable.removeEdge) return;
        edges = edges.filter(e => e !== edge);
    }

    function addVertex(ev: MouseEvent) {
        if (!editable.addVertex) return;
        if (!ev.ctrlKey) return;
        point.x = ev.clientX;
        point.y = ev.clientY;
        point = point.matrixTransform(svg.getScreenCTM()?.inverse());
        const i = Math.max(...Object.keys(vcoord).map(Number)) + 1;
        vertices = [...vertices, { i, x: point.x, y: point.y }];
    }

    let newEdge:Edge&{x:number,y:number}|null;
    function addEdge (node:Element, v: Vertex) {
		function drag(ev: MouseEvent) {
            point.x = ev.clientX;
            point.y = ev.clientY;
            point = point.matrixTransform(svg.getScreenCTM()?.inverse());
            if (newEdge) {
                newEdge.x = point.x;
                newEdge.y = point.y;
            }
		}
		function endDragging(ev?: Event) {
			svg.removeEventListener("mouseup", endDragging);
			svg.removeEventListener("mousemove", drag);
            grabbing = false;
            if (newEdge && ev?.target instanceof SVGCircleElement) {
                newEdge.v2 = v.i;
                const index = getEdgeIndex(newEdge.v1, newEdge.v2, edges);
                if (index >= 0) {
                    edges.splice(index, 1);
                }
                edges = [...edges, newEdge];
            }
            newEdge = null;
		}
		function startDragging(ev: Event) {
            if ((ev as MouseEvent).button !== 0 || (ev as MouseEvent).ctrlKey) return;
            if (!editable.addEdge) return;
            ev.preventDefault();
            newEdge = {
                x: v.x,
                y: v.y,
                v1: v.i,
                v2: v.i,
            };
            if (editable.addEdge === "weighted") {
                newEdge.weight = Wmax/2|0 || 50;
            }
            grabbing = true;
			svg.addEventListener("mouseup", endDragging);
			svg.addEventListener("mousemove", drag);
		}

		node.addEventListener("mouseup", endDragging);
		node.addEventListener("mousedown", startDragging);
        return {
            destroy () {
		        node.removeEventListener("mouseup", endDragging);
		        node.removeEventListener("mousedown", startDragging);
                endDragging();
            }
        }
    }

    function moveVertex (node:Element, v: Vertex) {
		function drag(ev: MouseEvent) {
            point.x = ev.clientX;
            point.y = ev.clientY;
            point = point.matrixTransform(svg.getScreenCTM()?.inverse());
            v.x = point.x;
            v.y = point.y;
            vertices = vertices;
		}
		function endDragging() {
			svg.removeEventListener("mouseup", endDragging);
			svg.removeEventListener("mousemove", drag);
            grabbing = false;
		}
		function startDragging(ev: Event) {
            if ((ev as MouseEvent).button !== 0 
                || editable.addEdge && !(ev as MouseEvent).ctrlKey
            ) {
                return;
            }
            if (!editable.moveVertex) return;
            ev.preventDefault();
            grabbing = true;
			svg.addEventListener("mouseup", endDragging);
			svg.addEventListener("mousemove", drag);
		}

		node.addEventListener("mouseup", endDragging);
		node.addEventListener("mousedown", startDragging);
        return {
            destroy () {
		        node.removeEventListener("mouseup", endDragging);
		        node.removeEventListener("mousedown", startDragging);
                endDragging();
            }
        }
    }

    function reweightEdge (node:Element, edge: Edge) {
		let x:number, w:number;
		function resize (ev: Event) {
			edge.weight = Math.max(0, Math.min(100, w + ((ev as MouseEvent).clientX-x)/4)|0);
            edges = edges;
        }
		function start (ev: Event) {
            if (!editable.reweightEdge) return;
            ev.preventDefault();
			w = edge.weight || 0;
			x = (ev as MouseEvent).clientX;
			window.addEventListener("mousemove", resize);
			window.addEventListener("mouseup", () => {
				window.removeEventListener("mousemove", resize);
			});
		}
		node.addEventListener("mousedown", start);
		return {
			destroy() {
				node.removeEventListener("mousedown", start);
				window.removeEventListener("mousemove", resize);
			}
		}
	}

</script>

<svelte:window 
    on:keydown={(ev) => ctrlKey = ev.ctrlKey}
    on:keyup={(ev) => ctrlKey = ev.ctrlKey}
/>
<svg width={w||800} height={h||800} viewBox="{Xmin-20} {Ymin-30} {Xrange+50} {Yrange+50}"
     xmlns="http://www.w3.org/2000/svg"
     font-size="0"
	 class:grabbing
     class:ctrl={ctrlKey && editable.addVertex}
     bind:this={svg}
	 on:mousedown|preventDefault|self={addVertex}
>
    {#if editHint && vertices.length > 0}
        <text x={Xmin} y={Ymin} fill="grey" font-size="10">
            &#x1F6C8;
            <title>{editHint}</title>
        </text>
    {/if}

	<!-- lines -->
	{#each edges as edge (edge)}
        {#if edge.v1 == edge.v2}
            <circle
                transition:fade={{ duration }}
                cx={vcoord[edge.v1][0] + 10} 
                cy={vcoord[edge.v1][1] - 10}
                r="10" 
                fill="none"
                stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? Wmax/2) / Wmax * 10}
                on:click={() => removeEdge(edge)}
                class:removable={editable.removeEdge}
            />
            {#if edge.weight != null}
                <text 
                    transition:fade={{ duration }}
                    x={vcoord[edge.v1][0] + 20} 
                    y={vcoord[edge.v1][1] - 20}
                    font-size="13" 
                    font-weight="bold"
                    text-anchor="middle" 
                    alignment-baseline="middle"
                    stroke="{edge.color ?? "silver"}"
                    fill="white"
                >{edge.weight}</text>
                <text 
                    transition:fade={{ duration }}
                    x={vcoord[edge.v1][0] + 20} 
                    y={vcoord[edge.v1][1] - 20}
                    font-size="13" 
                    font-weight="bold"
                    text-anchor="middle" 
                    alignment-baseline="middle"
                    fill="white"
                    class:resizable={editable.reweightEdge}
                    use:reweightEdge={edge}
                >{edge.weight}</text>
            {/if}
        {:else}
            <polyline 
                transition:fade={{ duration }}
                points={`${vcoord[edge.v1]} ${vcoord[edge.v2]}`}
                fill="none" stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? Wmax/2) / Wmax * 10}
                on:click={() => removeEdge(edge)}
                class:removable={editable.removeEdge}
            />
            {#if edge.weight != null}
                <text 
                    transition:fade={{ duration }}
                    {...middle(vcoord[edge.v1], vcoord[edge.v2], edge.v1)}
                    font-size="13" 
                    font-weight="bold"
                    text-anchor="middle" 
                    alignment-baseline="middle"
                    stroke="{edge.color ?? "silver"}"
                    stroke-width="3"
                    fill="white"
                >{edge.weight}</text>
                <text 
                    transition:fade={{ duration }}
                    {...middle(vcoord[edge.v1], vcoord[edge.v2], edge.v1)}
                    font-size="13" 
                    font-weight="bold"
                    text-anchor="middle" 
                    alignment-baseline="middle"
                    fill="white"
                    class:resizable={editable.reweightEdge}
                    use:reweightEdge={edge}
                >{edge.weight}</text>
            {/if}
        {/if}
	{/each}

    {#if newEdge}
        <polyline points="{vcoord[newEdge.v1]} {newEdge.x},{newEdge.y}"
            fill="none" stroke="silver" stroke-width="5"
            class="grabable"
        />
    {/if}
		
	<!-- points -->
	{#each vertices as vertex (vertex)}
		<circle 
			transition:fade={{ duration }}
			cx={vertex.x}
			cy={vertex.y}
			r="10" 
			fill={vertex.color ?? "grey"}
            use:moveVertex={vertex}
            use:addEdge={vertex}
            class:grabable={editable.moveVertex}
		/>
		<text 
			transition:fade={{ duration }}
			x={vertex.x}
			y={vertex.y}
			font-size="13" 
			font-weight="bold"
			text-anchor="middle" 
			alignment-baseline="central"
			fill="white"
		>{vertex.i}</text>
        {#if vertex.weight != null}
            <text 
                transition:fade={{ duration }}
                x={vertex.x + 10}
                y={vertex.y - 10}
                font-size="11" 
                font-weight="bold"
                text-anchor="middle" 
                alignment-baseline="central"
                stroke="{vertex.color ?? "grey"}"
                stroke-width="3"
            >{vertex.weight}</text>
            <text 
                transition:fade={{ duration }}
                x={vertex.x + 10}
                y={vertex.y - 10}
                font-size="11" 
                font-weight="bold"
                text-anchor="middle" 
                alignment-baseline="central"
                fill="white"
            >{vertex.weight}</text>
        {/if}
	{/each}
</svg>

<style>
	svg.ctrl {
        cursor: copy;
    }
    .grabable {
		cursor: grab;
	}
    .ctrl .grabable {
        cursor: move;
    }
    .grabbing, .grabbing .grabable {
        cursor: grabbing;
    }
	.grabable + text {
		pointer-events: none;
	}
	.resizable {
		cursor: ew-resize;
	}
	.removable {
		cursor: no-drop;
	}
    svg * {
        transition: fill .3s;
    }
    text:first-child {
        cursor: help;
    }
</style>
