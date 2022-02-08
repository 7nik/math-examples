<script context="module" lang="ts">
	// as graph is generated randomly
	export const ssr = false;

    type Vertex = {
        i: number,
        x: number,
        y: number,
        color?: string,
    };
    type Edge = {
        v1: number,
        v2: number,
        weight?: number,
        color?: string,
    };
    export type { Vertex, Edge };
</script>
<script lang="ts">
    import { fade } from "svelte/transition";

    export let vertices: Vertex[];
    export let edges: Edge[];

    let vcoord: Record<number, string>;
    $: {
        vcoord = {};
        vertices.forEach(v => {
            vcoord[v.i] = `${v.x},${v.y}`;
        });
    }


    $: Xmax = vertices.reduce((m,v) => m.x > v.x ? m : v).x;
    $: Ymax = vertices.reduce((m,v) => m.y > v.y ? m : v).y;
    $: w = Xmax > Ymax ? 800 : 800/Ymax*Xmax;
    $: h = Ymax > Xmax ? 800 : 800/Xmax*Ymax;
    $: scale = 800 / (Math.max(Ymax,Xmax) + 100)

    const duration = 300;

    function grabable (node:Element, v: Vertex) {
		function drag(ev: MouseEvent) {
			v.x += ev.movementX/scale;
			v.y += ev.movementY/scale;
            vertices = vertices;
		}
		function endDragging() {
			node.closest("svg")?.removeEventListener("mouseup", endDragging);
			node.closest("svg")?.removeEventListener("mousemove", drag);
		}
		function startDragging() {
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

<svg width={w} height={h} viewBox="-40 -40 {Xmax + 100} {Ymax + 100}"
     xmlns="http://www.w3.org/2000/svg"
     font-size="0"
>
	<!-- lines -->
	{#each edges as edge (`${edge.v1} ${edge.v2}`)}
        {#if edge.v1 == edge.v2}
            <circle
                transition:fade={{ duration }}
                cx={vertices[edge.v1-1].x + 10} 
                cy={vertices[edge.v1-1].y - 10}
                r="10" 
                fill="none"
                stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? 50) / 15}
            />
        {:else}
            <polyline 
                transition:fade={{ duration }}
                points={`${vcoord[edge.v1]} ${vcoord[edge.v2]}`}
                fill="none" stroke={edge.color ?? "silver"} 
                stroke-width={(edge.weight ?? 50) / 15}
            />
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
