<script>
	import Cong from "$lib/Cong.svelte";
	import pf from "primes-and-factors";
	
	let n = 3, e = 345, d = 8, r;
	$: phi = pf.getFrequency(d).reduce((prod, { factor, times }) => prod * (factor - 1) / factor, d);
	$: r = n ** (e % phi) % d;
	
	let a = 64, b = 5, m = 13, res;
	$: check = a*res%m;
	
	let a2 = 5, bb2 = 7, cc2 = 11, res2;
	$: b2 = Math.abs(bb2);
	$: c2 = cc2 % b2;
	$: tplus = (cc2 - a2*res2) / bb2;
	$: check2 = a2*res2 + bb2*tplus;
</script>

<h3> Завдання 1 </h3>
<input type=number bind:value={n}><sup><input type=number bind:value={e}></sup> (mod <input type=number bind:value={d}>)
<br>
&phi;({d}) = {phi}; &alpha;<sup>{phi}</sup> ≡ 1(mod{d})
<br>
{n}<sup>{e}</sup>(mod{d}) ≡ {n}<sup>{e % phi}</sup>(mod{d}) = {r}

<h3> Завдання 2 </h3>
<input type=number bind:value={a}>x ≡ <input type=number bind:value={b}> (mod <input type=number bind:value={m}>)
<br>
<Cong {a} {b} {m} bind:res />
<br>
Перевірка: <span class:good={check===b%m}> {a}*{res} (mod{m}) = {check} </span>

<h3> Завдання 3-4 </h3>
<input type=number bind:value={a2}>x + <input type=number bind:value={bb2}> y = <input type=number bind:value={cc2}>
<br>
{a2}x	≡ {c2} (mod{b2})
<Cong a={a2} b={c2} m={b2} bind:res={res2} />
<br>
x = {b2}t + {res2}
<br>
<br>
5({b2}t + {res2}) + {bb2}y = {cc2}
<br>
y = {a2*-1*bb2/b2}t + {tplus};
<br>
<br>
Перевірка: <span class:good={Number.isInteger(tplus) && check2 === cc2}> {a2}*{res2} + {bb2}*{tplus} = {check2} </span>

<style>
	input {
		width: 60px;
	}
	span {
		color: red;
	}
	span.good {
		color: green;
	}
</style>
