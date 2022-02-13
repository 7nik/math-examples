<script lang="ts">
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Graph from "$lib/Graph.svelte";
    import EdgeText from "$lib/EdgeText.svelte";
    import EdgeLister from "$lib/EdgeLister.svelte";
    import { Edge, resetGraph, markEdge, findLoop, getEdges, sortEdges, markVertex, getExamples } from "$lib/GraphUtils";

    let { vertices, edges } = getExamples();

    let start = 7;
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

    async function prim () {
        [vertices, edges] = await resetGraph(vertices, edges);
        sortedEdges = sortEdges(getEdges(start, edges), method === "min");
        sortedEdges.forEach(e => markEdge(e, "lightblue", edges));

        let count = 0;
        const visitedV: number[] = [start];
        const visitedE: Edge[] = [];
        const tree: Edge[] = [];

        vertices = markVertex(start, "green", vertices);

        while (sortedEdges.length > 0 && count < vertices.length - 1) {
            await sleep();

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
                [, ...sortedEdges] = sortedEdges;
            } else {
                edges = markEdge(edge, "green", edges);
                visitedE.push(edge);
                [, ...sortedEdges] = sortedEdges;
                await sleep();
                let vi = visitedV.includes(edge.v1) ? edge.v2 : edge.v1;
                visitedV.push(vi);
                vertices = markVertex(vi, "green", vertices);
                sortedEdges = sortEdges(
                    sortedEdges.concat(getEdges(vi, edges).filter(e => 
                            !visitedE.includes(e) 
                            && !sortedEdges.includes(e))), 
                    method === "min",
                );
                sortedEdges.forEach(e => markEdge(e, "lightblue", edges));
                edges = edges;
                count += 1;
            }
        }
        sortedEdges = [];
    }

    async function search () {
        searching = true;
        await prim();
        searching = false;
    }
</script>

<section>
    <EdgeLister bind:edges locked={searching} vertexNumber={vertices.length} />
    <div>
        <Graph bind:vertices bind:edges editable={searching ? {} : {
            addVertex: true,
            moveVertex: true,
            addEdge: "weighted",
            removeEdge: true,
            reweightEdge: true,
        } }/>
        <center>
            Відсортовані ребра:
            {#each sortedEdges as edge (edge)}
                <div out:fade={{duration:100}} in:fade={{delay:200}} animate:flip>
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

        Початок пошуку: 
        <input type="number" min="1" max="11" bind:value={start} >
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
    center {
        position: relative;
    }
</style>
