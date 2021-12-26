<script lang="ts">
	export let a = 64, b = 5, m = 13;
	let k:number, q:number[], P:number[], Q:number[];
	export let res:number;
	$: {
		let aa = m, bb = a, qq:number, rr:number;
		k = -1; 
		q = [];
		P = [];
		P[-1] = 1;
		P[-2] = 0;
		Q = [];
		Q[-1] = 0;
		Q[-2] = 1;
		do {
			k += 1;
			qq = Math.floor(aa / bb);
			rr = aa - bb * qq;
			q.push(qq);
			P.push(q[k] * P[k-1] + P[k-2]);
			Q.push(q[k] * Q[k-1] + Q[k-2]);
			aa = bb;
			bb = rr;
		} while (rr > 0);
		res = (-1)**k * P[k-1] * b;
		res %= m;
		while (res < 0) res += m;
	}
</script>

<div style="--size:{Q.length+2}">
	<b>k</b>
	<span>-1</span>
	{#each Array(k+1).fill(1).map((_,i) => i) as n}<span class:lit1={n==k}>{n}</span>{/each}
	
	<b>q<sub>k</sub></b>
	<span>/////</span>
	{#each q as n}<span>{n}</span>{/each}
	
	<b>P<sub>k</sub></b>
	<span>1</span>
	{#each P as n,i}<span class:lit2={i==k-1} >{n}</span>{/each}
	
	<b>Q<sub>k</sub></b>
	<span>0</span>
	{#each Q as n}<span>{n}</span>{/each}
</div>
{#if m !== P[k]}
	<span class="error">Скоріш за все результат не правильний!<br>Скоротіть конгруенцію!<br></span>
{/if}
x ≡ (-1)<sup class="lit1">{k}</sup>*<span class="lit2">{P[k-1]}</span>*{b} (mod{m})
<br>
x ≡ {res} (mod{m})

<style>
	div {
		margin-top: 5px;
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: repeat(var(--size), min-content);
		border: 1px solid black;
		width: min-content;
	}
	div > * {
		border: 1px solid black;
		padding: 2px 8px;
		text-align: center;
	}
	.lit1 {
		background: yellow;
	}
	.lit2 {
		background: cyan;
	}
	.error {
		color: red;
	}
</style>
