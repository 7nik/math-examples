<script context="module" lang="ts">
	// as graph is generated randomly
	export const ssr = false;
</script>
<script lang="ts">
import { browser } from "$app/env";

    import { fade } from "svelte/transition";
    import type { Vertex, Edge } from "./GraphUtils";

    export let vertices: Vertex[];
    export let edges: Edge[];

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

    $: Xmax = vertices.reduce((m,v) => m.x > v.x ? m : v).x;
    $: Ymax = vertices.reduce((m,v) => m.y > v.y ? m : v).y;
    $: Xmin = vertices.reduce((m,v) => m.x < v.x ? m : v).x;
    $: Ymin = vertices.reduce((m,v) => m.y < v.y ? m : v).y;
    $: Wmax = edges.reduce((m,e) => Math.max(m, e.weight || 0), 0) || 50;
    $: Xrange = Xmax - Xmin;
    $: Yrange = Ymax - Ymin;
    $: w = Xrange > Yrange ? 800 : 800/Yrange*Xrange;
    $: h = Yrange > Xrange ? 800 : 800/Xrange*Yrange;

    let svg:SVGSVGElement;
    let point:DOMPoint;
    if (browser) point = new DOMPoint();

    const duration = 300;

    function grabable (node:Element, v: Vertex) {
		function drag(ev: MouseEvent) {
            point.x = ev.clientX;
            point.y = ev.clientY;
            point = point.matrixTransform(svg.getScreenCTM()?.inverse());
			v.x = point.x;
			v.y = point.y;
            vertices = vertices;
		}
		function endDragging() {
			node.closest("svg")?.removeEventListener("mouseup", endDragging);
			node.closest("svg")?.removeEventListener("mousemove", drag);
		}
		function startDragging(ev: Event) {
            if ((ev as MouseEvent).button !== 0) return;
            ev.preventDefault();
			node.closest("svg")?.addEventListener("mouseup", endDragging);
			node.closest("svg")?.addEventListener("mousemove", drag);
		}

		node.addEventListener("mousedown", startDragging);
        return {
            destroy () {
		        node.removeEventListener("mousedown", startDragging);
                endDragging();
            }
        }
    }

</script>

<svg width={w} height={h} viewBox="{Xmin-20} {Ymin-30} {Xrange+50} {Yrange+50}"
     xmlns="http://www.w3.org/2000/svg"
     font-size="0"
     bind:this={svg}
>
	<!-- lines -->
	{#each edges as edge (`${edge.v1} ${edge.v2}`)}
        {#if edge.v1 == edge.v2}
            <circle
                transition:fade={{ duration }}
                cx={vcoord[edge.v1][0] + 10} 
                cy={vcoord[edge.v1][1] - 10}
                r="10" 
                fill="none"
                stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? Wmax/2) / Wmax * 10}
            />
            {#if edge.weight}
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
                    class="resizable"
                >{edge.weight}</text>
            {/if}
        {:else}
            <polyline 
                transition:fade={{ duration }}
                points={`${vcoord[edge.v1]} ${vcoord[edge.v2]}`}
                fill="none" stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? Wmax/2) / Wmax * 10}
            />
            {#if edge.weight}
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
                    class="resizable"
                >{edge.weight}</text>
            {/if}
        {/if}
	{/each}
		
	<!-- points -->
	{#each vertices as vertex}
		<circle 
			transition:fade={{ duration }}
			cx={vertex.x}
			cy={vertex.y}
			r="10" 
			fill={vertex.color ?? "grey"}
            use:grabable={vertex}
            class="grabable"
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
	.grabable {
		cursor: grab;
	}
	.grabable + text {
		pointer-events: none;
	}
</style>
