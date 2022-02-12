<script lang="ts">
    import { slide } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Graph from "$lib/Graph.svelte";
    import EdgeText from "$lib/EdgeText.svelte";
    import EdgeLister from "$lib/EdgeLister.svelte";
    import { Edge, resetGraph, markEdge, findLoop, sortEdges, getExamples } from "$lib/GraphUtils";

    let { vertices, edges } = getExamples();

    let sortedEdges:Edge[] = [];
    let method:"max"|"min" = "min";
    let searching = false;
    let autopause = true;

    let nextstep = (x:unknown) => {x;};
    function sleep () {
        return new Promise(res => {
            if (autopause) {
                setTimeout(res, 1000)
            } else {
                nextstep = res;
            }
        });
    }

    async function kruskal () {
        [vertices, edges] = await resetGraph(vertices, edges);
        sortedEdges = sortEdges(edges, method === "min");

        let count = 0;
        const tree: Edge[] = [];

        while (sortedEdges.length > 0 && count < vertices.length - 1) {
            if (count) await sleep();

            const edge = sortedEdges[0];
            edges = markEdge(edge, "orange", edges);
            await sleep();
            
            tree.push(edge);
            const loop = findLoop(tree);
            if (loop) {
                loop.forEach((e) => markEdge(e, "red", edges));
                edges = edges;
                await sleep();
                loop.forEach((e) => markEdge(e, "green", edges));
                edges = markEdge(edge, "lightpink", edges);
                tree.pop();
            } else {
                edges = markEdge(edge, "green", edges);
                count += 1;
            }
            [, ...sortedEdges] = sortedEdges;
        }
        sortedEdges = [];
    }

    async function search () {
        searching = true;
        await kruskal();
        searching = false;
    }
</script>

<section>
    <EdgeLister bind:edges locked={searching} />
    <div>
        <Graph {vertices} {edges} />
        <center>
            Відсортовані ребра:
            {#each sortedEdges as edge (edge)}
                <div out:slide animate:flip>
                    <EdgeText {edge} />
                </div>
            {:else}
                пусто
            {/each}
        </center>
    </div>

    <div>
        Метод побудови: 
        <br>
        <label>
            <input type="radio" bind:group={method} value="min">
            мінімальне дерево
        </label>
        <br>
        <label>
            <input type="radio" bind:group={method} value="max">
            максимальне дерево
        </label>
        <br>
        
        <button on:click={search} disabled={searching}>
            Почати пошук
        </button>
        <br>
        <button on:click={nextstep} disabled={autopause}>
            Наступний крок
        </button>
        <label>
            <input type="checkbox" bind:checked={autopause} on:change={() => autopause && nextstep(1)}>
            автокрокування
        </label>
    </div>
</section>

<style>
    section {
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }
</style>
