<script lang="ts">
	import Matrix from "./Matrix.svelte";

	export let a = 64, b = 5, m = 13;
	let k:number, q:number[], P:number[], Q:number[], eq:number[][];
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
		eq = [];
		do {
			k += 1;
			qq = Math.floor(aa / bb);
			rr = aa - bb * qq;
			eq.push([
				aa,
				bb,
				qq,
				rr,
			]);
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

<details>
	<summary>Рівняння</summary>
	{#each eq as [a,b,q,r]}
		{a} = {b}*<span>{q}</span> + {r} <br>
	{/each}
</details>

<Matrix matrix={[
	["k", -1, ...Array.from({length:k+1}, (_,i)=>i)],
	["qk", "/////", ...q],
	["Pk", 1, ...P],
	["Qk", 0, ...Q],
]} showGrid={true} showColumn={true} marks={{
	yellow: [{r:0, c:k+2}],
	cyan: [{r:2, c:k+1}],
	limegreen: Array.from({length:k+1}, (_,i)=> ({r:1, c:i+2})),
}}/>

<br>
{#if m !== P[k]}
	<span class="error">Результат може бути не правильним!<br>Скоротіть конгруенцію!<br></span>
{/if}
x ≡ (-1)<sup class="lit1">{k}</sup>*<span class="lit2">{P[k-1]}</span>*{b} (mod{m})
<br>
x ≡ {res} (mod{m})

<style>
	summary {
		cursor: pointer;
	}
	details span {
		background: limegreen;
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
