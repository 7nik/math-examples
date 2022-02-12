<script lang="ts">
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Graph from "$lib/Graph.svelte";
    import EdgeText from "$lib/EdgeText.svelte";
    import { Edge, verticesExample, edgesExample, resetGraph, markEdge, getEdgeIndex, getEdges, markVertex, Vertex } from "$lib/GraphUtils";

    let [vertices, edges] = resetGraph(verticesExample, edgesExample);

    let start = 8;
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
                // await sleep();
                
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
                edges = markEdge(edge, "silver", edges);
                visitedE.push(edge);
            }

            vertices = markVertex(queue[0].i, "green", vertices);
            // queue.shift();
            [, ...queue] = queue;
            queue.sort((v1, v2) => (v1.weight??0) - (v2.weight??0));
            await sleep();
        }
    }

    async function search () {
        searching = true;
        await dijkstra();
        searching = false;
    }

    let v1 = 1, v2 = 2, weight = 10;
    function addEdge() {
        if (v1 > 0 && v1 < 12 && v2 > 0 && v2 < 12 && weight) {
            if (getEdgeIndex(v1, v2, edges) < 0) {
                edges = [...edges, { v1, v2, weight }];
            }
        }
        v1 = 1;
        v2 = 2;
        weight = 10;
    }
    function removeEdge(edge: Edge) {
        if (searching) return;
        edges = edges.filter(e => e !== edge);
    }
</script>

<section>
    <div class="edges-box">
        <div>
            Ребра:<br>
            {#each edges as edge}
                <div class:removable={!searching} on:click={() => removeEdge(edge)}>
                    <EdgeText {edge}/>
                </div>
            {/each}
        </div>
        <div>
            Вершини:
            <input type="number" min="1" max="11" bind:value={v1} />
            <input type="number" min="1" max="11" bind:value={v2} />
            <br>
            Вага:
            <input type="number" min="1" max="11" bind:value={weight} />
            <br>
            <button on:click={addEdge} disabled={searching}>Додати ребро</button>
        </div>
    </div>

    <div>
        <Graph {vertices} {edges} />
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
    .edges-box {
        display: flex;
        gap: 10px;
    }
    .removable {
        cursor: no-drop;
        transition: background .3s
    }
    .removable:hover {
        background: #eee;
    }
</style>
