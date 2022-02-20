<script lang="ts">
    import EdgeText from "./EdgeText.svelte";
    import { Edge, getEdgeIndex } from "./GraphUtils";

    export let edges:Edge[] = [];
    export let vertexNumber = 11;
    export let locked = false;
    export let weighted = true;
    
    let v1 = 1, v2 = 2, weight = 10;
    function addEdge() {
        if (v1 > 0 && v1 <= vertexNumber && v2 > 0 && v2 <= vertexNumber && weight) {
            const index = getEdgeIndex(v1, v2, edges);
            if (index >= 0) {
                edges.splice(index, 1);
            }
            const edge:Edge = { v1, v2 };
            if (weighted) edge.weight = weight;
            edges = [...edges, edge];
        }
    }
    function removeEdge(edge: Edge) {
        if (locked) return;
        edges = edges.filter(e => e !== edge);
    }
</script>

<div class="edges-box">
    <div>
        Ребра:<br>
        {#each edges as edge}
            <div class:removable={!locked} on:click={() => removeEdge(edge)}>
                <EdgeText {edge}/>
            </div>
        {/each}
    </div>
    <div>
        Вершини:
        <input type="number" min="1" max={vertexNumber} bind:value={v1} />
        <input type="number" min="1" max={vertexNumber} bind:value={v2} />
        <br>
        {#if weighted}
            Вага:
            <input type="number" min="1" max={vertexNumber} bind:value={weight} />
            <br>
        {/if}
        <button on:click={addEdge} disabled={locked}>Додати ребро</button>
    </div>
</div>

<style>
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
