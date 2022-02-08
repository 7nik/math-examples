<script lang="ts">
    import Graph from "$lib/Graph.svelte";
    import type { Vertex, Edge } from "$lib/Graph.svelte";

    let inputs = [
        "2,4,5,6",
        "3,6,7",
        "7,8",
        "5,9",
        "6,9,10",
        "7,10",
        "8,11",
        "11",
        "10",
        "11",
        ""
    ];

    let vertices: Vertex[] = [{
        i: 1, x: 100, y: 0,
    }, {
        i: 2, x: 200, y: 0,
    }, {
        i: 3, x: 300, y: 0,
    }, {
        i: 4, x: 0, y: 100,
    }, {
        i: 5, x: 100, y: 100,
    }, {
        i: 6, x: 200, y: 100,
    }, {
        i: 7, x: 300, y: 100,
    }, {
        i: 8, x: 400, y: 100,
    }, {
        i: 9, x: 100, y: 200,
    }, {
        i: 10, x: 200, y: 200,
    }, {
        i: 11, x: 300, y: 200,
    }];

    $: edges = inputs
        .flatMap((s, i) => s.match(/\d+/g)?.map(n => ({
            v1: i + 1,
            v2: +n,
        })))
        .filter((x): x is Edge => !!x && x.v1>0 && x.v1<12 && x.v2>0 && x.v2<12)
        // remove duplicates
        .filter(({v1,v2}, i, arr) => i == arr.findIndex(e => e.v1==v1 && e.v2==v2 || e.v1==v2 && e.v2==v1));

    function resetGraph () {
        vertices.forEach(v => v.color = "grey");
        vertices = vertices;
        edges.forEach(e => { e.color = "silver"; e.weight = 50; });
        edges = edges;
    }
    function getEdges (v:number) {
        return edges
            .filter(({ v1, v2 }) => v1==v || v2==v)
            .sort((e1, e2) => Math.min(e1.v1, e1.v2) - Math.min(e2.v1, e2.v2) || Math.max(e1.v1, e1.v2) - Math.max(e2.v1, e2.v2));
    } 
    function markEdge (v1:number, v2:number, color:string) {
        let index = edges.findIndex(e => e.v1==v1 && e.v2==v2 || e.v1==v2 && e.v2==v1);
        if (index < 0) return;
        edges[index].color = color;
        edges[index].weight = 100;
    };
    function markVertex (i:number, color:string) {
        let index = vertices.findIndex(v => v.i == i);
        if (index < 0) return;
        vertices[index].color = color;
    };

    let start = 7;
    let list:number[] = [];
    let method:"bfs"|"dfs" = "bfs";
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

    async function bfs () {
        resetGraph();
        let visitedV:number[] = [start];
        let visitedE:Edge[] = [];
        list = [start];
        
        while (list.length > 0) {
            await sleep();
            markVertex(list[0], "blue");
            
            for (let e of getEdges(list[0])) {
                if (visitedE.includes(e)) continue;
                visitedE.push(e);
    
                await sleep();
                markEdge(e.v1, e.v2, "orange");
    
                await sleep();
                let vi = e.v1 === list[0] ? e.v2 : e.v1;
                if (visitedV.includes(vi)) {
                    markEdge(e.v1, e.v2, "lightpink");
                } else {
                    markEdge(e.v1, e.v2, "green");
                    markVertex(vi, "orange");
                    list = [...list, vi];
                    visitedV.push(vi);
                }
            }

            await sleep();
            markVertex(list[0], "green");
            [, ...list] = list;
        }
    }

    async function dfs () {
        resetGraph();
        let visitedV:number[] = [start];
        let visitedE:Edge[] = [];
        list = [start];
        
        await sleep();
        while (list.length > 0) {
            markVertex(list[1], "orange");
            markVertex(list[0], "blue");
            
            let ee = getEdges(list[0]);
            ee = ee.filter(e => !visitedE.includes(e));
            if (ee.length > 0) {
                let e = ee[0];
                visitedE.push(e);
    
                await sleep();
                markEdge(e.v1, e.v2, "orange");
    
                await sleep();
                let vi = e.v1 === list[0] ? e.v2 : e.v1;
                if (visitedV.includes(vi)) {
                    markEdge(e.v1, e.v2, "lightpink");
                } else {
                    markEdge(e.v1, e.v2, "green");
                    markVertex(vi, "orange");
                    list = [vi, ...list];
                    visitedV.push(vi);
                }
            } else {
                await sleep();
                markVertex(list[0], "green");
                [, ...list] = list;
            }
        }
    }

    async function search () {
        searching = true;
        if (method === "bfs") await bfs()
        else await dfs();
        searching = false;
    }

    function validate (ev:InputEvent) {
		const { inputType, data, target } = ev;
		const { value, selectionStart, selectionEnd } = target as HTMLInputElement;
		
		// we have about how the data will be changed
		// so lets calculated the next value of the input field
		// hope I did it correctly and it has the same behavior in FF and Safari
		let nextValue: string = "";
		let beginning = value.slice(0, selectionStart ?? 0);
		let ending = value.slice(selectionEnd ?? 0);
		if (inputType.startsWith("history")) {
			// assume that the history contains only valide states
			// though it doesn't work if we replace input event with own one
			return;
		} else if (inputType.startsWith("insert")) {
			nextValue = beginning + data + ending;
		} else if (inputType.startsWith("delete")) {
			// looks like if there is a selection, 
			// any delete action will just delete it
			if (selectionStart !== selectionEnd) {
				nextValue = beginning + ending;
			} else {				
				switch(inputType) {
					case "deleteWordBackward":
						beginning = beginning.replace(/(\w+|\W)\s*$/, "");
						break;
					case "deleteWordForward":
						ending = ending.replace(/^\s*(\w+|\W)/, "");
						break;
					case "deleteSoftLineBackward":
					case "deleteHardLineBackward":
						beginning = "";
						break;
					case "deleteSoftLineForward":
					case "deleteHardLineForward":
						ending = "";
						break;
					case "deleteEntireSoftLine":
						// IDK how to trigger it but according to specs for the input field it leads to this:
						beginning = ending = ""; 
						break;
					case "deleteByDrag":
					case "deleteByCut":
					case "deleteContent":
						// handled by the another branch of the if
						break;
					case "deleteContentBackward":
						beginning = beginning.slice(0, -1);
						break;
					case "deleteContentForward":
						ending = ending.slice(1);
						break;
					default:
						console.warn(`Unknown input deletion type: ${inputType}`);
				}
				nextValue = beginning + ending;
			}
		}

        if (!nextValue.match(/^(\s*\d+\s*[, ]?)*$/)) {
            ev.preventDefault();
        }
    }
</script>

<section>
    <div>
        Ребра:<br>
        {#each inputs as value, i}
            {i+1}: <input bind:value on:beforeinput={validate}  disabled={searching}> <br>
        {/each}
    </div>

    <Graph {vertices} {edges} />

    <div>
        Метод пошуку: 
        <label>
            <input type="radio" bind:group={method} value="bfs">
            в ширину
        </label>
        <label>
            <input type="radio" bind:group={method} value="dfs">
            в глибину
        </label>
        <br>
        
        Початок пошуку: 
        <input type="number" min="1" max="11" bind:value={start} >
        <br>
        <button on:click={search} disabled={searching}>
            Почати пошук
        </button>
        
        Черга: 
        {#each list as q, i}
            {#if i},{/if}
            {q}{:else}
            пусто{/each}.
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
        gap: 50px;
    }
</style>
