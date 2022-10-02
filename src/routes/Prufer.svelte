<script lang="ts">
    import Graph from "$lib/Graph.svelte";
    import EdgeLister from "$lib/EdgeLister.svelte";
    import { Edge, markEdge, getEdges, markVertex, Vertex, resetGraph } from "$lib/GraphUtils";

    const verticesOrig:Vertex[] = [{
        i: 1, x: 0, y: 200,
    }, {
        i: 2, x: 50, y: 150,
    }, {
        i: 3, x: 200, y: 200,
    }, {
        i: 4, x: 100, y: 100,
    }, {
        i: 5, x: 300, y: 100,
    }, {
        i: 6, x: 50, y: 50,
    }, {
        i: 7, x: 100, y: 200,
    }, {
        i: 8, x: 300, y: 150,
    }, {
        i: 9, x: 200, y: 100,
    }, {
        i: 10, x: 150, y: 150,
    }, {
        i: 11, x: 300, y: 50,
    }];
    let vertices = verticesOrig.map(v => ({...v}));

    const edgesOrig:Edge[] = [{
        v1: 1, v2: 2
    }, {
        v1: 2, v2: 4
    }, {
        v1: 2, v2: 7
    }, {
        v1: 3, v2: 10
    }, {
        v1: 4, v2: 6
    }, {
        v1: 4, v2: 10
    }, {
        v1: 4, v2: 9
    }, {
        v1: 5, v2: 9
    }, {
        v1: 8, v2: 9
    }, {
        v1: 9, v2: 11
    }];
    let edges = edgesOrig.map(e => ({...e}));

    let code:number[] = [];
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

    function cleanVertices (vv:Vertex[], ee:Edge[]) {
        if (!searching) {
            [vertices, edges] = resetGraph(vv, ee);
        }
    }
    $: cleanVertices(vertices, edges);

    async function encodePrufer () {
        code = [];
        if (edges.length <= 1) {
            [vertices, edges] = [verticesOrig.map(v => ({...v})), edgesOrig.map(e => ({...e}))];
        }

        while (edges.length > 1) {
            let leaves = vertices.filter(v => getEdges(v.i, edges).length === 1);
            leaves.forEach(v => markVertex(v.i, "blue", vertices));
            vertices = vertices;
            await sleep();
            
            let vert = leaves.reduce((a, b) => a.i < b.i ? a : b);
            let [edge] = getEdges(vert.i, edges);
            vertices = markVertex(vert.i, "orange", vertices);
            edges = markEdge(edge, "orange", edges);
            await sleep();

            vertices = markVertex(vert.i, "whitesmoke", vertices);
            edges = edges.filter(e => e != edge);
            const vi = edge.v1 === vert.i ? edge.v2 : edge.v1;
            code = [...code, vi];
        }
        code2 = code.join(", ");
    }

    let vertices2:Vertex[] = [], edges2:Edge[] = [];
    let code2:string = "", code3:number[] = [], anticode:{i:number,enabled:boolean}[] = [];

    let startFromZero = true;
    $: updateVertexNumbers(startFromZero);
    function updateVertexNumbers(zero: boolean) {
        const map = {} as Record<number, number>;
        vertices = vertices.map((v, i) => {
            const j = zero ? i : i+1;
            map[v.i] = j;
            v.i = j;
            return v;
        });
        edges = edges.map((e) => {
            e.v1 = map[e.v1];
            e.v2 = map[e.v2];
            return e;
        });
    }

    async function decodePrufer () {
        searching = true;
        code3 = (code2.match(/\d+/g) ?? []).map(Number);
        const n = code3.length + 2;
        anticode = Array(n).fill(0).map((_, i) => ({
            i: i + (startFromZero ? 0 : 1),
            enabled: !code3.includes(i + (startFromZero ? 0 : 1)),
        }));

        const r = 50 / Math.sin(Math.PI / n);
        vertices2 = vertices.length === n 
            ? vertices.map(({i,x,y}) => ({i,x,y}))
            : Array(n).fill(0).map((_, i) => ({
                i: i + (startFromZero ? 0 : 1),
                x: r + r*Math.cos(2*Math.PI*i/n),
                y: r - r*Math.sin(2*Math.PI*i/n),
            }));
        edges2 = [];
        await sleep();

        let v1:number;
        while (code3.length > 0) {
            [v1, ...code3] = code3;
            let vv2 = anticode.find(x => x.enabled)!;
            anticode = anticode.filter(x => x !== vv2);

            edges2 = [...edges2, { v1, v2: vv2.i }];

            if (!code3.includes(v1)) {
                let x = anticode.find(x => x.i === v1);
                if (x) x.enabled = true;
            }
            await sleep();
        }
        edges2 = [...edges2, { v1: anticode[0].i, v2: anticode[1].i }];
        anticode = [];
        
        searching = false;
    }

    async function search () {
        searching = true;
        await encodePrufer();
        searching = false;
    }
</script>

<section>
    <EdgeLister bind:edges locked={searching} vertexNumber={vertices.length} weighted={false} />
    <div>
        <Graph bind:vertices bind:edges editable={searching ? {} : {
            addVertex: true,
            moveVertex: true,
            addEdge: "unweighted",
            removeEdge: true,
        } }/>
        <center>
            Код Прюфера:
            {#each code as n, i (i)}
                <span>{#if i}, {/if}{n}</span>
            {:else}
                пусто
            {/each}
        </center>
        <Graph bind:vertices={vertices2} bind:edges={edges2} editable={{moveVertex: !searching}}/>
        <center>
            Код Прюфера:
            {#each code3 as n, i (i)}
                <span class:mark={!i}>{#if i}, {/if}{n}</span>
            {:else}
                пусто
            {/each}
            <br>
            Антікод:
            {#each anticode as n, i (i)}
                {#if i}, {/if}<span class:mark={i==anticode.findIndex(x => x.enabled)} class:off={!n.enabled}>{n.i}</span>
            {:else}
                пусто
            {/each}
        </center>
    </div>

    <div>
        <button on:click={search} disabled={searching}>
            Розрахувати код Прюфера
        </button>
        <br><br>
        Код Прюфера:
        <input bind:value={code2}>
        <br>
        <button on:click={decodePrufer} disabled={searching}>
            Побудувати дерево
        </button>
        <label>
            <input type="checkbox" bind:checked={startFromZero} disabled={searching}>
            Перша вершина №0
        </label>
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
    section > :global(:not(:nth-child(2))) {
        position: sticky;
        top: 0;
        height: min-content;
    }
    center {
        position: relative;
    }
    .off {
        color: grey;
    }
    .mark {
        background: skyblue;
    }
</style>
