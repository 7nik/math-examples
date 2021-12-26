<script lang="ts">
	let n = 6;
	let matrix: {enabled:boolean, w:number}[][] = [], pos: {i:number, x:number, y:number }[];
	let M = 100, S1 = 80, S2 = 90, S3 = 100;
	
	function newJoint() { return { enabled: !Math.round(Math.random()), w: Math.round(Math.random()*100) }; }
	function newJoints(n:number) { return Array.from({ length:n }, newJoint); }
	// a,b = 0..n-1; a<=b
	function color(a:number,b:number) { return `hsl(${Math.round(360*(a*n - a*(a-1)/2 + b-a)/(n*(n+1)/2))}, 100%, 50%)`; }
	function mid(a:number,b:number,p:string) { return (pos[a][p]*(a%2?9:11) + pos[b][p]*(a%2?11:9))/20; }

	$: {
		if (matrix.length < n) {
			matrix = [
				...matrix.map(row => [...row, ...newJoints(n-row.length)]),
				...Array.from({ length:n-matrix.length }, () => newJoints(n)),
			];
		} else if (n < matrix.length) {
			matrix = matrix.slice(0, n).map(row => row.slice(0, n));
		}
	}
	$: pos = Array.from({ length:n }, (_, i) => ({
		i: i+1,
		x: Math.cos(i*2*Math.PI/n - Math.PI/2),
		y: Math.sin(i*2*Math.PI/n - Math.PI/2),
	}));
</script>

Кількість вершин: 
<input type="number" min="1" max="15" bind:value={n} > <br>

<div class="matrix" style="--size: {n}">
	<div></div>
	{#each {length:n} as _,i}<div class="header">{i+1}</div>{/each}
	
	{#each matrix as row, i}
		<div class="header">{i+1}</div>
		{#each row as cell, ci}
			<!-- svelte -ignore a11y-label-has-associated-control -->
			{#if ci>=i}
				<label>
					<input type="checkbox" bind:checked={cell.enabled}>
					<input type="number" bind:value={cell.w} min="0" max="100" disabled={!cell.enabled}>
				</label>
			{:else}
				<label>
					<input type="checkbox" bind:checked={matrix[ci][i].enabled}>
					<input type="number" bind:value={matrix[ci][i].w} min="0" max="100" disabled={!matrix[ci][i].enabled}>
				</label>
			{/if}
		{/each}
	{/each}
</div>

{#key n}
<svg width="600" height="600" viewBox="-10 -10 220 220"
     xmlns="http://www.w3.org/2000/svg">
	<!-- lines -->
	{#each matrix as row, i1}
		{#each row as { enabled,w }, i2}
			{#if enabled && i2>=i1}
				{#if i1==i2}
					<circle cx="{M+pos[i1].x*S2}" 
                        cy="{M+pos[i1].y*S2}" 
                        r="10" 
                        fill="none"
                        stroke="{color(i1,i2)}" 
                        stroke-width={(w+5)/33}/>
				{:else}
					<polyline points="{pos[i1].x},{pos[i1].y} {pos[i2].x},{pos[i2].y}"
                        transform="translate({M}, {M}) scale({S1})"
                        fill="none" stroke="{color(i1,i2)}" 
                        stroke-width={(w+10)/33/S1}/>
				{/if}
			{/if}
		{/each}
	{/each}
	
	<!-- weights -->
	{#each matrix as row, i1}
		{#each row as { enabled,w }, i2}
			{#if enabled && i2>=i1}
				{#if i1==i2}
					<text x="{M+pos[i1].x*S3}" 
                        y="{M+pos[i1].y*S3}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        stroke="{color(i1,i2)}"
                        fill="white"
					>{w}</text>
					<text x="{M+pos[i1].x*S3}" 
                        y="{M+pos[i1].y*S3}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        fill="white"
					>{w}</text>
				{:else}
					<text x="{M+mid(i1,i2,'x')*S1}" 
                        y="{M+mid(i1,i2,'y')*S1}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        stroke="{color(i1,i2)}"
                        fill="white"
					>{w}</text>
					<text x="{M+mid(i1,i2,'x')*S1}" 
                        y="{M+mid(i1,i2,'y')*S1}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        fill="white"
					>{w}</text>
				{/if}
			{/if}
		{/each}
	{/each}
	
	<!-- points -->
	{#each pos as { i, x, y }}
  	<circle cx="{M+x*S1}" 
        cy="{M+y*S1}" 
        r="5" 
        fill="black" />
  	<text x="{M+x*S1}" 
        y="{M+y*S1}" 
        font-size="7" 
        font-weight="bold"
        text-anchor="middle" 
        alignment-baseline="middle"
        fill="white"
    >{i}</text>
	{/each}
</svg>
{/key}

<style>
	.matrix {
		display: inline-grid;
		grid-template-columns: 2em repeat(var(--size), 75px);
		border: 1px solid black;
		width: min-content;
		vertical-align: top;
	}
	.matrix div {
		border: 1px solid black;
		font-weight: bold;
		display: flex;
    justify-content: center;
    align-items: center;
  }
	.matrix label {
		border: 1px solid black;
		padding: 3px;
	}
	.matrix input[type="checkbox"] {
		margin: 0;
	}
	.matrix input[type="number"] {
		width: 40px;
	}
</style>
