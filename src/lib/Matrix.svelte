<script>
	export let matrix = [[]];
    export let colDir = false;
	export let showRow = false;
	export let showColumn = false;
	export let mark1 = [];
	export let mark2 = [];
	const has = (arr, rr, cc) => arr && arr.find(({r, c}) => rr===r && cc===c);
</script>

<div style="--size: {matrix[0].length}" class:colDir>
	{#each matrix as col, c}
		{#each col as cell, r}
			<span 
                class:row={showRow && !r} 
                class:column={showColumn && !c}
                class:mark1={has(mark1, r, c)} 
                class:mark2={has(mark2, r, c)}
            >{cell}</span>
		{/each}
	{/each}
</div>

<style>
	div {
		border: 1px solid black;
		display: inline-grid;
		grid-template-columns: repeat(var(--size), 25px);
		grid-auto-flow: row;
		text-align: center;
		margin: 10px 10px 0 0;
	}
    div.colDir {
		grid-template-rows: repeat(var(--size), 25px);
		grid-auto-flow: column;
    }
	div * {
		width: 21px;
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
	.mark1 {
		background: blue;
		color: white;
	}
	.mark2 {
		background: brown;
		color: white;
	}
	.mark1.mark2 {
		background: linear-gradient(135deg, blue 50%, brown 50%);
	}
</style>
