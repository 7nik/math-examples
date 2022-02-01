<script lang="ts">
	import Matrix from "$lib/Matrix.svelte";

    type Point = { r:number, c:number };
    type Point2 = { r:number, c:number, sq:number };
	function pos(s:string, matrix:string[][]) {
		if (!matrix) return { r:-1, c:-1 };
		return {
			r: matrix.findIndex(row => row.includes(s)),
			c: matrix.reduce((index, row) => index >= 0 ? index : row.indexOf(s), -1),
		};
	}
	function doubleSquare(s1:string, s2:string, sq1:string[][], sq2:string[][]):Point2[] {
		if (!s2) {
			return [{
				sq:1,
				...pos(s1, sq2),
			}];
		}
		const { r:r1, c:c1 } = pos(s1, sq1);
		const { r:r2, c:c2 } = pos(s2, sq2);
		if (r1 === r2) return [{
			c:c1, r:r1, sq:1,
		}, {
			c:c2, r:r2, sq:0,
		}];
		return [{
			c:c2, r:r1, sq:1,
		}, {
			c:c1, r:r2, sq:0,
		}];
	}

	const sq1 = [
		["Щ", "П", "З", "Л", "Ю"],
		[",", "К", "Є", "С", "Ф"],
		["А", "Е", "Б", "Г", "Р"],
		["Я", "Ї", " ", "І", "М"],
		["И", "Ж", "Ч", "В", "Н"],
		["О", "Ь", "Х", "У", "."],
		["Д", "Й", "Т", "Ц", "Ш"],
	];
	const sq2 = [
		["І", "В", "Ш", "Ю", "Г"],
		["Ф", "Ї", "П", " ", "Я"],
		["С", "Щ", "Р", "Ч", "Л"],
		["М", "Ь", "Д", "Й", "Є"],
		["О", "Х", "К", "Н", "И"],
		["Б", "Ж", "З", "У", "."],
		["Т", ",", "Ц", "Е", "А"],
	];

	let input = "Шифровка";
    let method = "encode";
	
	// let dblsq1input = "ПРИЇЖДЖАЮ ШОСТОГО";
	let chars:Point2[], result:string, badInput:boolean;
	$: {
		chars = [];
		const text = input.toUpperCase();
		badInput = false;
		const [t1, t2] = method === "encode" ? [sq1, sq2] : [sq2, sq1];
		for (let i = 0; i < text.length; i += 2) {
			const [s1, s2] = doubleSquare(text[i], text[i+1], t1, t2);
			if (!s2) {
				chars.push(s1);
				continue;
			}
			chars.push(s1, s2);
		}
		badInput = badInput || chars.some(({r,c}) => r===-1 || c===-1);
		result = chars.map(({r,c,sq}) => sq ? t2[r]?.[c] : t1[r]?.[c]).join("");
	}
	
	let mask1: Record<string,Point[]> = { blue: [], brown: [] };
	let mask2: Record<string,Point[]> = { blue: [], brown: [] };
	function mark (ev:Event) {
		if (ev.type === "blur") {
			mask1 = { blue: [], brown: [] };
			mask2 = { blue: [], brown: [] };
			return;
		} 
		let sel = (ev.target as HTMLInputElement).selectionStart || 0;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		const [a, b] = input.toUpperCase().slice(sel & ~1);
		const [t1, t2] = method === "encode" ? [sq1, sq2] : [sq2, sq1];
		const [s1, s2] = doubleSquare(a, b, t1, t2);
		mask1 = {
			blue: [pos(a, t1)],
			brown: b ? [s2] : [pos(a, t1)],
		};
		mask2 = {
			blue: [pos(b, t2)],
			brown: b ? [s1] : [],
		};
		if (method === "decode") {
			[mask1, mask2] = [mask2, mask1];
		}
	}
</script>

<h1>
    <a href="https://chmnu.edu.ua/populyarizatsiya-prirodnichih-nauk-ta-matematiki/" target="_blank">
        Алгоритм шифрування Вітсона
    </a>
</h1>
<br>
Текст: <input bind:value={input} class="input" class:bad={badInput} on:keyup={mark} on:click={mark} on:focus={mark} on:blur={mark} /> <br>
<label>
    <input type="radio" bind:group={method} value="encode"> Зашифрувати
</label>
<label>
    <input type="radio" bind:group={method} value="decode"> Дешифрувати
</label>
<br>

<Matrix matrix={sq1} marks={mask1} /> 
<Matrix matrix={sq2} marks={mask2} /> <br>
Результат: "<span class="output">{result}</span>"


<style>
	.bad { background: #f88; }
	.input { color: blue; }
	.output { color: brown; }
</style>
