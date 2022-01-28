<script lang="ts">
	export let matrix: {}[][] = [[]];
    export let colDir = false;
	export let showRow = false;
	export let showColumn = false;
	export let showGrid = false;
	export let marks: Record<string, {c:number,r:number}[]> = {};
	$: markMap = Object.entries(marks).reduce((map: Record<string,string>, [k,arr]) =>{
		arr.forEach(({r,c}) => {
			const rc = `${r},${c}`;
			if (map[rc]) {
				map[rc] += ","+k;
			} else {
				map[rc] = k
			}
		});
		return map;
	}, {});
	type Mark = {
		r: number,
		c: number,
		markMap: Record<string, string>,
	};
	function marking(node:HTMLElement, params:Mark) {
		function mark({r, c, markMap}: Mark) {
			const color = markMap[`${r},${c}`]?.split(",");
			if (!color) {
				node.style.background = "none";
				return;
			};
			if (color.length === 1) {
				node.style.background = color[0];
			} else {
				node.style.background = `linear-gradient(135deg, ${color[0]} 50%, ${color[1]} 50%)`;
			}
		}
		mark(params);
		return { update: mark };
	}
</script>

<div style="--w: {colDir ? matrix.length : matrix[0].length}; --h: {colDir ? matrix[0].length : matrix.length}" 
	class:colDir class:showGrid
>
	{#each matrix as row, r}
		{#each row as cell, c}
			<span 
                class:row={showRow && !r && !colDir || showRow && !c && colDir} 
                class:column={showColumn && !c && !colDir || showColumn && !r && colDir}
                use:marking={{r,c,markMap}}
            >{cell}</span>
		{/each}
	{/each}
</div>

<style>
	div {
		border: 1px solid black;
		display: inline-grid;
		grid-template-columns: repeat(var(--w), minmax(27px, auto));
		grid-template-rows: repeat(var(--h), minmax(27px, auto));
		grid-auto-flow: row;
		text-align: center;
		margin: 10px 10px 0 0;
	}
    div.colDir {
		grid-auto-flow: column;
    }
	div.showGrid > span {
		border: 1px solid black;
	}
	div * {
		padding: 2px
	}
	.row {
		border-bottom: 1px solid black;
		font-weight: bold;
	}
	.column {
		border-right: 1px solid black;
		font-weight: bold;
	}
</style>
