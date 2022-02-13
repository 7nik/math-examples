<script lang="ts">
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Graph from "$lib/Graph.svelte";
    import EdgeLister from "$lib/EdgeLister.svelte";
    import { Edge, getExamples, resetGraph, markEdge, getEdges, markVertex, Vertex } from "$lib/GraphUtils";

    let { vertices, edges } = getExamples();

    $: weighted = vertices.every(v => "weight" in v);

    let start = 8;
    let end = 4;
    let queue:Vertex[] = [];
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

    async function dijkstra () {
        [vertices, edges] = await resetGraph(vertices, edges);

        const visitedE: Edge[] = [];
        queue = [vertices[start-1]];
        vertices[start-1].weight = 0;

        while (queue.length > 0) {
            vertices = markVertex(queue[0].i, "orange", vertices);
            const ee = getEdges(queue[0].i, edges).filter(e => !visitedE.includes(e));
            ee.forEach(e => markEdge(e, "skyblue", edges));
            edges = edges;
            await sleep();

            for (const edge of ee) {
                edges = markEdge(edge, "orange", edges);
                
                const vi = edge.v1 === queue[0].i ? edge.v2 : edge.v1;
                vertices = markVertex(vi, "blue" ,vertices);
                await sleep();

                const newWeight = (queue[0].weight ?? 0) + (edge.weight ?? 0);
                if ((vertices[vi-1].weight??Infinity) > newWeight) {
                    vertices[vi-1].weight = newWeight;
                    if (!queue.includes(vertices[vi-1])) {
                        queue.push(vertices[vi-1]);
                        queue.sort((v1, v2) => (v1.weight??Infinity) - (v2.weight??Infinity));
                    }
                    queue = queue;
                    await sleep();
                }
                
                vertices = markVertex(vi, "skyblue" ,vertices);
                edges = markEdge(edge, "lightgreen", edges);
                visitedE.push(edge);
            }

            vertices = markVertex(queue[0].i, "green", vertices);
            [, ...queue] = queue;
            queue.sort((v1, v2) => (v1.weight??0) - (v2.weight??0));
            await sleep();
        }
    }

    async function buildPath () {
        if (!vertices[end-1].weight) return;
        searching = true;
        vertices.forEach(v => v.color = "grey");
        vertices = markVertex(end, "green", vertices);
        edges.forEach(e => e.color = "silver");
        edges = edges;
        
        let currentV = vertices[end-1];
        let path: Edge[] = [];

        do {
            let ee = getEdges(currentV.i, edges).filter(e => !path.includes(e));
            ee.forEach(e => markEdge(e, "skyblue", edges));
            edges = edges;
            let vv = ee.map(e => vertices[e.v1 === currentV.i ? e.v2-1 : e.v1-1]);
            vv.forEach(v => markVertex(v.i, "skyblue", vertices));
            vertices = vertices;
            await sleep();

            let nextV = vv[0], nextE:Edge = ee[0];
            for (let i = 0; i < vv.length; i++) {
                if (currentV.weight == vv[i].weight! + ee[i].weight!) {
                    nextV = vv[i];
                    nextE = ee[i];
                    break;
                }
            }
            currentV = nextV;
            path.push(nextE);

            ee.forEach(e => markEdge(e, "silver", edges));
            edges = markEdge(nextE, "green", edges);
            vv.forEach(v => markVertex(v.i, "grey", vertices));
            vertices = markVertex(nextV.i, "green", vertices);
            if (currentV.weight !== 0) await sleep();

        } while (currentV.weight !== 0);
        searching = false;
    }

    async function search () {
        searching = true;
        await dijkstra();
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
            Вершини для обходу:
            {#each queue as v (v)}
                <div out:fade={{duration:100}} in:fade={{delay:200}} animate:flip>
                    {v.i} = {v.weight ?? "∞"}
                </div>
            {:else}
                пусто
            {/each}
        </center>
    </div>

    <div>
        Початок розрахунку: 
        <input type="number" min="1" max={vertices.length} bind:value={start} >
        <br>
        <button on:click={search} disabled={searching}>
            Розрахувати відстані
        </button>
        <br><br>
        Знайти шлях з: 
        <input type="number" min="1" max={vertices.length} bind:value={end} disabled={!weighted} >
        <br>
        <button on:click={buildPath} disabled={!weighted || searching}>
            Знайти шлях
        </button>
        <br><br>
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
