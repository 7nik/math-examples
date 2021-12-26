<script lang="ts">
	export let a = "23015", ga = 7, op = "+", b = "14304", gb = 5, gres = 7, res = NaN;
	let a2:number, b2:number;
	let badA:boolean, badB:boolean;
	
	const str = (n:number, g:number) => {
		try {
			return n.toString(g);
		} catch (ex) {
			console.error(ex);
			return "Bad number";
		}
	};
	$: {
		try {
			badA = false;
			a2 = parseInt(a, ga);
		} catch {
			a2 = NaN;
		}
		try {
			badB = false;
			b2 = parseInt(b, gb);
		} catch {
			b2 = NaN;
		}
		if (a != str(a2, ga)) {
			badA = true;
			a2 = NaN;
		}
		if (b != str(b2, gb)) {
			badB = true
			b2 = NaN;
		}
		switch (op) {
			case "+": res = a2 + b2; break;
			case "-": res = a2 - b2; break;
			case "*": res = a2 * b2; break;
			case "/": res = a2 / b2; break;
		}
	}
</script>

<div>
	<input class="var" type="number" bind:value={a} class:bad={badA}>
	<sub><input class="var" type="number" bind:value={ga} min=2 max=10 class:bad={badA}></sub>
	{op}
	<input class="var" type="number" bind:value={b} class:bad={badB}> 
	<sub><input class="var" type="number" bind:value={gb} min=2 max=10 class:bad={badB}></sub>
	=
	x<sub><input class="var" type="number" bind:value={gres} min=2 max=10></sub>
	<br>
	{str(a2, gres)}<sub>{gres}</sub> {op} {str(b2, gres)}<sub>{gres}</sub> = {str(res, gres)}<sub>{gres}</sub>
</div>

<style>
	.bad {
		background: #f88;
	}
</style>
