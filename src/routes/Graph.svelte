<script context="module">
	// as graph is generated randomly
	export const ssr = false;
</script>
<script lang="ts">
	let n = 6;
	let matrix: {enabled:boolean, w:number}[][] = [], pos: {i:number, x:number, y:number }[];
	let M = 100, S1 = 80, S2 = 90, S3 = 100;
	
	function newJoint() { return { enabled: !Math.round(Math.random()+0.1), w: Math.round(Math.random()*100) }; }
	function newJoints(n:number) { return Array.from({ length:n }, newJoint); }
	// a,b = 0..n-1; a<=b
	function color(a:number,b:number) { return `hsl(${Math.round(360*(a*n - a*(a-1)/2 + b-a)/(n*(n+1)/2))}, 100%, 50%)`; }
	function mid(a:number,b:number,p:string) { return (pos[a][p]*(a%2?9:11) + pos[b][p]*(a%2?11:9))/20; }

	function off(a:number,b:number) {
		matrix[a][b].enabled = false;
	}

	let dragging:{x1:number,y1:number,x2:number,y2:number,i:number}|null = null;
	function draggable (node:Element, index:number) {
		function drag(ev: MouseEvent) {
			if (!dragging) return;
			dragging.x2 = ev.offsetX/30*11-10;
			dragging.y2 = ev.offsetY/30*11-10;
		}
		function endDragging(ev: MouseEvent) {
			if (!dragging) return;
			if (ev.target instanceof SVGCircleElement) {
				matrix[dragging.i][index].enabled = true;
				matrix[index][dragging.i].enabled = true;
			}
			dragging = null;
			node.closest("svg")?.removeEventListener("mouseup", endDragging);
			node.closest("svg")?.removeEventListener("mousemove", drag);
		}
		function startDragging(ev: MouseEvent) {
			dragging = {
				i: index,
				x1: M+pos[index].x*S1,
				y1: M+pos[index].y*S1,
				x2: M+pos[index].x*S1,
				y2: M+pos[index].y*S1,
			};
			node.closest("svg")?.addEventListener("mouseup", endDragging);
			node.closest("svg")?.addEventListener("mousemove", drag);
		}
		node.addEventListener("mouseup", endDragging, true);
		node.addEventListener("mousedown", startDragging);
		
		return {
			destroy() {
				node.removeEventListener("mousedown", startDragging);
				node.removeEventListener("mouseup", endDragging, true);
				node.closest("svg")?.removeEventListener("mouseup", endDragging);
			}
		}
	}

	function resizable (node:Element, {i1, i2}) {
		let x:number, w:number;
		function resize (ev: MouseEvent) {
			console.log(ev.clientX);
			matrix[i1][i2].w = Math.max(0, Math.min(100, w + (ev.clientX-x)/3)|0);
		}
		function start (ev: MouseEvent) {
			w = matrix[i1][i2].w;
			x = ev.clientX;
			window.addEventListener("mousemove", resize);
			window.addEventListener("mouseup", () => {
				window.removeEventListener("mousemove", resize);
			});
		}
		node.addEventListener("mousedown", start);
		return {
			destroy() {
				node.removeEventListener("mousedown", start);
				window.removeEventListener("mousemove", resize);
			}
		}
	}

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
		i: i,
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
     xmlns="http://www.w3.org/2000/svg"
	 class:grab={!!dragging}
	 on:mousedown|preventDefault
>
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
                        stroke-width={(w+5)/20}
						on:click={() => off(i1,i2)}
						class="off"
					/>
				{:else}
					<polyline points="{pos[i1].x},{pos[i1].y} {pos[i2].x},{pos[i2].y}"
                        transform="translate({M}, {M}) scale({S1})"
                        fill="none" stroke="{color(i1,i2)}" 
                        stroke-width={(w+10)/20/S1}
						on:click={() => off(i1,i2)}
						class="off"
					/>
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
					>{+w}</text>
					<text x="{M+pos[i1].x*S3}" 
                        y="{M+pos[i1].y*S3}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        fill="white"
						use:resizable={{i1,i2}}
						class="resizable"
					>{+w}</text>
				{:else}
					<text x="{M+mid(i1,i2,'x')*S1}" 
                        y="{M+mid(i1,i2,'y')*S1}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        stroke="{color(i1,i2)}"
                        fill="white"
					>{+w}</text>
					<text x="{M+mid(i1,i2,'x')*S1}" 
                        y="{M+mid(i1,i2,'y')*S1}" 
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        fill="white"
						use:resizable={{i1,i2}}
						class="resizable"
					>{+w}</text>
				{/if}
			{/if}
		{/each}
	{/each}

	{#if dragging}
		<polyline points="{dragging.x1},{dragging.y1} {dragging.x2},{dragging.y2}"
			fill="none" stroke="grey" stroke-width="5"
		/>
	{/if}
	
	<!-- points -->
	{#each pos as { i, x, y }}
  	<circle cx="{M+x*S1}" 
        cy="{M+y*S1}" 
        r="6" 
        fill="black"
		use:draggable={i} 
		class="grabable"
	/>
  	<text x="{M+x*S1}" 
        y="{M+y*S1}" 
        font-size="7" 
        font-weight="bold"
        text-anchor="middle" 
        alignment-baseline="middle"
        fill="white"
    >{i+1}</text>
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
	.resizable {
		cursor: ew-resize;
	}
	.off {
		cursor: no-drop;
	}
	.grabable {
		cursor: grab;
	}
	.grabable + text {
		pointer-events: none;
	}
	.grab {
		cursor: grabbing;
	}
</style>
