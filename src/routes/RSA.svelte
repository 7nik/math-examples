<script lang="ts">
	import Matrix from "$lib/Matrix.svelte";
import pf from "primes-and-factors";
	
	const alphabet = "?_АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ.";
	
	let pVal = 7, qVal = 13;
	$: pGood = pVal ? pf.isPrime(pVal) : null;
	$: qGood = qVal ? qVal !== pVal && pf.isPrime(qVal) : null;
	$: n = pVal * qVal || 0;
	let phi:number;
	$: phi = pVal && qVal
		? (pVal - 1) * (qVal - 1) 
		: pf.getFrequency(n).reduce((prod, { factor }) => prod * (factor - 1) / factor, n);
	let eVal:number, dVal:number;
	$: eGood = eVal && phi ? eVal>1 && pf.getFactors(eVal).every(x => !Number.isInteger(phi/x)) : null;
	$: dGood = dVal && eVal && phi ? eVal*dVal % phi === 1 : null;
	let eHint:number|"", dHint:number|"";
	$: {
		if (phi) {
			eHint = 3;
			while (pf.getFactors(eHint).some(x => Number.isInteger(phi/x))) eHint += 2;
		} else {
			eHint = "";
		}
	}
	$: {
		if (phi) {
			let a = phi, b = eVal || +eHint;
			let k = -1, Pk1 = 0, Pk2 = 1, q:number, r:number;
			do {
				k += 1;
				q = Math.floor(a / b);
				r = a - b*q;
				[Pk1, Pk2] = [Pk2, q*Pk2 + Pk1];
				[a, b] = [b, r];
			} while (r > 0);
			dHint = (-1)**k * Pk1 % phi;
			if (dHint < 0) dHint += phi;
		} else {
			dHint = "";
		}
	}
	
	let text = "Текст із прикладом";
	$: rawText = text.toUpperCase().replaceAll(" ", "_").split("");
	$: rawNumbers = rawText.map(s => alphabet.indexOf(s));
	$: rsaEncoded = n ? rawNumbers.map(x => BigInt(x) ** BigInt(eVal || eHint) % BigInt(n)) : [];
	
	let code1 = "";
	$: code2 = rsaEncoded.join(" ");
	$: rawNumbers2 = (code1 || code2).match(/\d+/g) ?? [];
	$: rsaDecoded = n ? rawNumbers2.map(x => BigInt(x) ** BigInt(dVal || dHint) % BigInt(n)) : [];
	$: output = rsaDecoded.map((n) => alphabet[n.toString()] || "?")
	
</script>

p: <input type="number" min=1 bind:value={pVal} class:bad={pGood===false} class:good={pGood}>
q: <input type="number" min=1 bind:value={qVal} class:bad={qGood===false} class:good={qGood}>
<br>
n: <input type="number" min=1 bind:value={n} disabled={!!pVal && !!qVal}>
&phi;(n): {phi}
<br>
e: <input type="number" min=1 bind:value={eVal} placeholder={eHint.toString()} class:bad={eGood===false} class:good={eGood}>
d: <input type="number" min=1 bind:value={dVal} placeholder={dHint.toString()} class:bad={dGood===false} class:good={dGood}>
<br>

<h3>Шифрування</h3>
текст: <input bind:value={text}><br>
{#if n}
	<!-- <div style="--size:{text.length}">
		{#each rawText as char}<span>{char}</span>{/each}
		{#each rawNumbers as num}<span>{num}</span>{/each}
		{#each rsaEncoded as num}<span>{num}</span>{/each}
	</div> -->
    <Matrix matrix={[rawText, rawNumbers, rsaEncoded]} />
{/if}

<h3>Дешифрування</h3>
шифр: <input bind:value={code1} placeholder={code2}><br>
{#if n && (dVal || dHint)}
    <Matrix matrix={[rawNumbers2, rsaDecoded, output]} />
{/if}

<style>
	.bad {
		background: #F88;
	}
	.good {
		background: #8F8;
	}
	input:not([type]) {
		width: 60%;
	}
</style>
