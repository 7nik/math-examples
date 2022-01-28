<script context="module">
	// as graph is generated randomly
	export const ssr = false;
</script>
<script lang="ts">
	import { fade } from "svelte/transition";
	import { linear } from "svelte/easing";
	import { tweened } from "svelte/motion";

	type Point = {i:number, x:number, y:number };
	const M = 100, S1 = 80, S2 = 90, S3 = 100;
	const duration = 150;
	let n = tweened(6, { duration, easing: linear });
	let matrix: {enabled:boolean, w:number}[][] = [], pos: Point[];
	
	function newJoint() {
		return { enabled: !Math.round(Math.random()+0.1), w: Math.round(Math.random()*100) }; 
	}
	function newJoints(n:number) { 
		return Array.from({ length:n }, newJoint); 
	}
	// a,b = 0..n-1; a<=b<n
	function color(a:number, b:number, n:number) { 
		const hue = Math.round(360*(a*n - a*(a-1)/2 + b-a) / (n*(n+1)/2));
		return `hsl(${hue}, 100%, 50%)`; 
	}
	function mid(p1: Point, p2: Point, ax:"x"|"y") { 
		return (p1?.[ax]*(p1?.i%2?9:11) + p2?.[ax]*(p1?.i%2?11:9))/20; 
	}

	function remove(a:number,b:number) {
		matrix[a][b].enabled = false;
	}

	let dragging:{x1:number,y1:number,x2:number,y2:number,i:number}|null = null;
	function draggable (node:Element, index:number) {
		function drag(ev: MouseEvent) {
			if (!dragging) return;
			dragging.x2 = ev.offsetX/30*11-10;
			dragging.y2 = ev.offsetY/30*11-10;
		}
		function endDragging(ev: Event) {
			if (!dragging) return;
			if (ev.target instanceof SVGCircleElement) {
				matrix[dragging.i][index].enabled = true;
				matrix[index][dragging.i].enabled = true;
			}
			dragging = null;
			node.closest("svg")?.removeEventListener("mouseup", endDragging);
			node.closest("svg")?.removeEventListener("mousemove", drag);
		}
		function startDragging() {
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

	function resizable (node:Element, {i1, i2}: {i1:number, i2:number}) {
		let x:number, w:number;
		function resize (ev: Event) {
			matrix[i1][i2].w = Math.max(0, Math.min(100, w + ((ev as MouseEvent).clientX-x)/3)|0);
		}
		function start (ev: Event) {
			w = matrix[i1][i2].w;
			x = (ev as MouseEvent).clientX;
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

	function transLine (node:Element, { duration, easing, i1, i2 }: { duration: number, easing: (x:number)=>number, i1:number, i2:number }) {
		return { 
			duration,
			easing,
			tick (t: number) {
				const point1 = `${pos[i1]?.x},${pos[i1]?.y}`;
				const point2 = `${pos[i2]?.x},${pos[i2]?.y}`;
				node.setAttribute("points", `${point1} ${point2}`);
				(node as HTMLElement).style.opacity = t.toString();
			}
		};
	}

	function transCircle (node:Element, { duration, easing, scale: size, i }: { duration: number, easing: (x:number)=>number, scale: number, i: number }) {
		const names = node.nodeName === "text" ? ["x", "y"] : ["cx", "cy"];
		return { 
			duration,
			easing,
			tick (t: number) {
				const { x, y } = pos[i] ?? {};
				node.setAttribute(names[0], (M+x*size).toString());
				node.setAttribute(names[1], (M+y*size).toString());
				(node as HTMLElement).style.opacity = t.toString();
			}
		};
	}
	let nn = $n;
	$: $n = nn;
	$: {
		if (matrix.length < nn) {
			matrix = [
				...matrix.map(row => [...row, ...newJoints(nn-row.length)]),
				...Array.from({ length:nn-matrix.length }, () => newJoints(nn)),
			];
		} else if (nn < matrix.length) {
			matrix = matrix.slice(0, nn).map(row => row.slice(0, nn));
		}
	}
	$: pos = Array.from({ length:$n+1 }, (_, i) => ({
		i: i,
		x: Math.cos(i*2*Math.PI/$n - Math.PI/2),
		y: Math.sin(i*2*Math.PI/$n - Math.PI/2),
	}));
</script>

Кількість вершин: 
<input type="number" min="1" max="15" bind:value={nn} > <br>

<div class="matrix" style="--size: {nn}">
	<div></div>
	{#each {length:nn} as _,i}<div class="header">{i+1}</div>{/each}
	
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
					<circle
						in:fade={{ duration, easing:linear }}
						out:transCircle={{ 
							duration,
							easing: linear,
							scale: S2,
							i: i1,
						}}
						cx={M+pos[i1]?.x*S2} 
						cy={M+pos[i1]?.y*S2}
                        r="10" 
                        fill="none"
                        stroke="{color(i1, i2, $n)}" 
                        stroke-width={(w+5)/20}
						on:click={() => remove(i1,i2)}
						class="off"
					/>
				{:else}
					<polyline 
						in:fade={{ duration }}
						out:transLine={{ 
							duration,
							easing: linear, 
							i1,
							i2,
						}}
						points={`${pos[i1]?.x},${pos[i1]?.y} ${pos[i2]?.x},${pos[i2]?.y}`}
						transform="translate({M}, {M}) scale({S1})"
						fill="none" stroke="{color(i1, i2, $n)}" 
						stroke-width={(w+10)/20/S1}
						on:click={() => remove(i1,i2)}
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
					<text 
						in:fade={{duration}}
						out:transCircle={{ 
							duration,
							easing: linear,
							scale: S3,
							i:i1
						}}
						x={M+pos[i1]?.x*S3}
						y={M+pos[i1]?.y*S3}
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        stroke="{color(i1, i2, $n)}"
                        fill="white"
					>{+w}</text>
					<text 
						in:fade={{duration}}
						out:transCircle={{ 
							duration,
							easing: linear,
							scale: S3,
							i:i1
						}}
						x={M+pos[i1]?.x*S3}
						y={M+pos[i1]?.y*S3}
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        fill="white"
						use:resizable={{i1,i2}}
						class="resizable"
					>{+w}</text>
				{:else}
					<text 
						transition:fade={{duration}}
						x={M+mid(pos[i1], pos[i2], 'x')*S1} 
						y={M+mid(pos[i1], pos[i2], 'y')*S1}
                        font-size="7" 
                        font-weight="bold"
                        text-anchor="middle" 
                        alignment-baseline="middle"
                        stroke="{color(i1, i2, $n)}"
                        fill="white"
					>{+w}</text>
					<text 
						transition:fade={{duration}}
						x={M+mid(pos[i1], pos[i2], 'x')*S1} 
						y={M+mid(pos[i1], pos[i2], 'y')*S1}
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
		{#if i < nn }
		<circle 
			in:fade={{duration, easing: linear}}
			out:transCircle={{ 
				duration,
				easing: linear,
				scale: S1,
				i
			}}
			cx={M+x*S1}
			cy={M+y*S1}
			r="6" 
			fill="black"
			use:draggable={i} 
			class="grabable"
		/>
		<text 
			in:fade={{duration, easing: linear}}
			out:transCircle={{ 
				duration,
				easing: linear,
				scale: S1,
				i
			}}
			x={M+x*S1}
			y={M+y*S1}
			font-size="7" 
			font-weight="bold"
			text-anchor="middle" 
			alignment-baseline="middle"
			fill="white"
		>{i+1}</text>
		{/if}
	{/each}
</svg>

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
