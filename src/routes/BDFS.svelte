<script lang="ts">
    import Graph from "$lib/Graph.svelte";
    import { Edge, getEdgeIndex, getEdges, markEdge, markVertex, resetGraph, verticesExample } from "$lib/GraphUtils";

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
    let [vertices] = resetGraph(verticesExample, []);

    $: edges = inputs
        .flatMap((s, i) => s.match(/\d+/g)?.map(n => ({
            v1: i + 1,
            v2: +n,
        })))
        .filter((x): x is Edge => !!x && x.v1>0 && x.v1<12 && x.v2>0 && x.v2<12)
        // remove duplicates
        .filter(({v1,v2}, i, arr) => i == getEdgeIndex(v1, v2, arr));

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
        [vertices, edges] = resetGraph(vertices, edges, 50);
        let visitedV:number[] = [start];
        let visitedE:Edge[] = [];
        list = await [start];
        
        while (list.length > 0) {
            vertices = markVertex(list[0], "orange", vertices);
            
            for (let edge of getEdges(list[0], edges)) {
                if (visitedE.includes(edge)) continue;
                visitedE.push(edge);
    
                await sleep();
                edges = markEdge(edge, "orange", edges);
    
                await sleep();
                let vi = edge.v1 === list[0] ? edge.v2 : edge.v1;
                if (visitedV.includes(vi)) {
                    edges = markEdge(edge, "lightpink", edges);
                } else {
                    edges = markEdge(edge, "green", edges);
                    vertices = markVertex(vi, "blue", vertices);
                    list = [...list, vi];
                    visitedV.push(vi);
                }
            }

            await sleep();
            vertices = markVertex(list[0], "green", vertices);
            [, ...list] = list;
            if (list.length > 0) await sleep();
        }
    }

    async function dfs () {
        [vertices, edges] = resetGraph(vertices, edges, 50);
        let visitedV:number[] = [start];
        let visitedE:Edge[] = [];
        list = await [start];
        
        while (list.length > 0) {
            vertices = markVertex(list[1], "blue", vertices);
            vertices = markVertex(list[0], "orange", vertices);
            
            let ee = getEdges(list[0], edges);
            ee = ee.filter(e => !visitedE.includes(e));
            if (ee.length > 0) {
                let edge = ee[0];
                visitedE.push(edge);
    
                await sleep();
                edges = markEdge(edge, "orange", edges);
    
                await sleep();
                let vi = edge.v1 === list[0] ? edge.v2 : edge.v1;
                if (visitedV.includes(vi)) {
                    edges = markEdge(edge, "lightpink", edges);
                } else {
                    edges = markEdge(edge, "green", edges);
                    vertices = markVertex(vi, "blue", vertices);
                    list = [vi, ...list];
                    visitedV.push(vi);
                }
            } else {
                await sleep();
                vertices = markVertex(list[0], "green", vertices);
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

        if (!nextValue.match(/^[\d\s,]*$/)) {
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

    <div>
        <Graph {vertices} {edges} />
        <center>
            {#if method == "bfs"}Черга{:else}Стек{/if}: 
            {#each list as q, i}
                {#if i},{/if}
                {q}{:else}
                пусто{/each}.
        </center>
    </div>

    <div>
        Метод пошуку: 
        <br>
        <label>
            <input type="radio" bind:group={method} value="bfs">
            в ширину
        </label>
        <br>
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
