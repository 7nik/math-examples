<script lang="ts">
    import Fraction from "$lib/Fraction.svelte";

	const data = `0 111001 4 12253 7 43021 8 31 8 11011 3 115 6 24532 7 4
1 321 4 642 7 57 8 121 3 45 6 54 7 12 4 2
2 232 5 421 6 43 7 210 4 120 3 46 7 17 8 3
3 423 6 215 7 51 6 320 4 210 3 110 2 25 6 4
4 121 3 432 5 103 4 401 5 102 3 101 2 21 3 5
5 567 8 142 5 315 6 113 4 211 3 111 2 101 2 6
6 744 8 213 4 502 6 312 4 125 6 103 4 33 4 7 
7 625 7 452 6 321 4 121 3 30 4 53 6 15 6 8
8 242 5 377 8 155 6 222 3 124 5 103 4 25 6 2
9 153 6 710 8 440 5 331 4 210 3 401 5 12 5 3
10 442 5 215 6 123 4 461 7 52 6 102 3 71 8 4
11 245 6 546 7 320 5 603 7 22 5 51 6 35 6 5
12 126 7 144 5 121 6 362 8 31 4 110 3 55 7 6
13 662 7 411 5 270 8 223 4 17 8 34 5 43 6 7  
14 771 8 325 6 321 4 144 5 72 8 231 4 120 3 8
15 615 7 504 6 102 3 413 6 241 5 133 5 211 3 2
16 504 6 444 5 215 8 332 4 115 6 212 4 14 5 3
17 325 7 326 8 112 4 211 3 510 6 421 5 105 6 4
18 114 6 214 7 715 8 235 6 314 5 214 6 102 3 5
19 154 6 511 7 322 5 301 4 502 6 321 4 143 6 6
20 455 6 313 4 621 8 125 6 304 5 220 3 125 6 7 
21 774 8 213 4 502 6 312 4 125 6 103 4 33 4 7
22 134 8 18 9 2200 3 30 4 8 10 7 8 23 4 5 
23 423 6 215 7 51 6 320 4 210 3 110 2 25 6 4 
24 111 4 25 6 320 4 2 10 46 8 121 5 11001 2 5
25 625 7 123 4 22 5 34 5 51 6 34 5 35 6 6
26 126 7 546 7 331 4 320 5 125 6 53 6 55 7 7 
27 567 8 142 5 315 6 113 4 211 3 111 2 101 2 6
28 327 8 326 8 112 4 211 3 510 6 421 5 105 6 4
29 321 4 421 6 43 7 121 3 31 4 101 2 15 8 4
30 154 6 313 6 215 8 144 5 72 8 212 4 143 6 5
31 121 6 223 4 103 4 222 3 45 6 51 6 105 6 4`.split("\n");
	
	let value = 1, numbers = [], variant, g, valid = false, trans = [], acts = [];
	const vars = ["a", "b", "c", "d", "k", "m", "p"];
	const actnames = ["a*b", "a*b+c", "d+k", "(d+k)*m", "(d+k)*m-p", ["a*b+c","(d+k)*m-p"]];
	const str = (n:number, gg:number = g):string => {
		try {
			return n.toString(gg || g);
		} catch (ex) {
			console.error(ex);
			return "Bad number";
		}
	};
	$: {
		const nums = data[value]?.split(" ").filter(s => s);
		valid = nums?.length === 16;
		if (!valid) break $;
		variant = nums.shift();
		g = nums.pop();
		numbers = [];
		trans = [];
		for (let i = 0; i < nums.length; i += 2) {
			numbers.push(parseInt(nums[i], +nums[i+1]));
			trans.push([nums[i], nums[i+1], parseInt(nums[i], +nums[i+1])]);
		}
		valid = valid && numbers.every(Number.isInteger);
		const [a, b, c, d, k, m, p] = numbers;
		acts = [];
		acts.push([a, "*", b, a*b]);
		acts.push([acts[0][3], "+", c, acts[0][3] + c]);
		acts.push([d, "+", k, d+k]);
		acts.push([acts[2][3], "*", m, acts[2][3]*m]);
		acts.push([acts[3][3], "-", p, acts[3][3] - p]);
		const res = [acts[1][3], "/", acts[4][3]];
		res.push(Math.trunc(res[0]/res[2]));
		res.push(res[0] - res[2]*res[3]);
		res.push(res[2]);
		acts.push(res);
	}
</script>

Номер ваіанту: <input class="var" type="number" min=0 max=31 bind:value> <br>

{#if valid}
	<h3>Варіант №{variant}</h3>
	<div>
		{#each trans as [n, gg], i}
			<span>{vars[i]}</span>
			<span>{n}<sub>{gg}</sub></span>
		{/each}
		<span>g</span>
		<span>{g}</span>
	</div>

	<h4>Перетворення в g-ічну систему</h4>
	{#each trans as [a, gg, n], i}
		{vars[i]} = <input required pattern={str(n)} value={str(n)}> <sub>{g}</sub> <br>
	{/each}
	
	<h4>Виконання операцій</h4>
	{#each acts as [a, op, b, res, f1, f2], i}
        {#if Array.isArray(actnames[i])}
            <Fraction numerator="{actnames[i][0]}" denominator="{actnames[i][1]}" />
        {:else}
		    {actnames[i]}
        {/if}
        =
		{#if f1}
			<input required pattern={str(res)} value={str(res)}>
            <Fraction>
                <input required pattern={str(f1)} value={str(f1)}>
				<span slot="denominator"><input required pattern={str(f2)}  value={str(f2)}></span>
            </Fraction>
			<sub>{g}</sub>
		{:else}
			<input required pattern={str(res)} value={str(res)}> <sub>{g}</sub>
		{/if}
		<br>
	{/each}
{:else}
	Неправильна кількість чисел, їх порядок чи їх значення!
{/if}

<style>
	div {
		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(2, 1fr);
		border: 1px solid black;
		width: min-content;
	}
	div span {
		border: 1px solid black;
		text-align: center;
		width: 60px;
	}
	input:not(.var):valid {
		background: lightgreen;
	}
</style>
