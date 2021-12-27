<script lang="ts">
	import Matrix from "$lib/Matrix.svelte";
	const alphabet = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
    type Point = { r:number, c:number };
    type Point2 = { r:number, c:number, sq:number };

	function pos(s:string, matrix:string[][]) {
		if (!matrix) return { r:-1, c:-1 };
		return {
			r: matrix.findIndex(row => row.includes(s)),
			c: matrix.reduce((index, row) => index >= 0 ? index : row.indexOf(s), -1),
		};
	}
	function encodePlayfair(s1:string, s2:string, key:string[][]) {
		if (!s2) return [pos(s1, key)];
		const { c:c1, r:r1 } = pos(s1, key);
		const { c:c2, r:r2 } = pos(s2, key);
		if (c1 === c2) return [{
			c: c1,
			r: (r1 + 1) % 4,
		}, {
			c: c2,
			r: (r2 + 1) % 4,
		}];
		if (r1 === r2) return [{
			r: r1,
			c: (c1 + 1) % 8,
		}, {
			r: r2,
			c: (c2 + 1) % 8,
		}];
		return [{
			r: r1,
			c: c2,
		}, {
			r: r2,
			c: c1,
		}];
	}
	function decodePlayfair(s1:string, s2:string, key:string[][]) {
		if (!s2) return [pos(s1, key)];
		const { c:c1, r:r1 } = pos(s1, key);
		const { c:c2, r:r2 } = pos(s2, key);
		if (c1 === c2) return [{
			c: c1,
			r: (r1 + 3) % 4,
		}, {
			c: c2,
			r: (r2 + 3) % 4,
		}];
		if (r1 === r2) return [{
			r: r1,
			c: (c1 + 7) % 8,
		}, {
			r: r2,
			c: (c2 + 7) % 8,
		}];
		return [{
			r: r1,
			c: c2,
		}, {
			r: r2,
			c: c1,
		}];
	}
	function doubleSquare(s1:string, s2:string, sq1:string[][], sq2:string[][]) {
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
	
	let playfair1input = "ПІДСИЛИТИ КОНТРОЛЬ";
	let playfair1key = "МІЦНИЙ";
	let playfair1fullkey:string[][], playfair1chars:Point[], playfair1result:string, playfair1bad1:boolean, playfair1bad2:boolean;
	$: {
		const input = playfair1input.replaceAll(/\s/g, "").toUpperCase();
		const key = playfair1key.toUpperCase().split("");
		playfair1bad1 = key.some((s, i) => key.indexOf(s) < i);
		if (playfair1bad1) break $;
		const fullkey = key.concat(alphabet.split("").filter(s => !key.includes(s)));
		playfair1bad2 = input.split("").some(s => !fullkey.includes(s));
		if (playfair1bad2) break $;
		playfair1fullkey = Array(4).fill(1).map((_, i) => fullkey.slice(i*8, (i+1)*8));
		playfair1chars = [];
		for (let i = 0; i < input.length; i += 2) {
			const [s1, s2] = encodePlayfair(input[i], input[i+1], playfair1fullkey);
			if (!s2) {
				playfair1chars.push(s1);
				continue;
			}
			playfair1chars.push(s1, s2);
		}
		playfair1result = playfair1chars.map(({r,c}) => playfair1fullkey[r][c]).join("");
	}

	let playfair1marks = {};
	function mark1 (ev: Event) {
		if (ev.type === "blur") {
			playfair1marks = {};
			return;
		}
		let sel = (ev.target as HTMLInputElement).selectionStart;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		sel -= playfair1input.slice(0, sel+1).match(/\s/g)?.length ?? 0;
		let [a, b] = playfair1input.replaceAll(/\s/g, "").toUpperCase().slice(sel & ~1);
		playfair1marks = {
			blue: [pos(a, playfair1fullkey), pos(b, playfair1fullkey)],
			brown: encodePlayfair(a, b, playfair1fullkey),
		};
	}
	
	let playfair2input = "РСІВБНЕЖПЛЄЛДМУ";
	let playfair2key = "МОДЕЛЬ";
	let playfair2fullkey:string[][], playfair2chars:Point[], playfair2result:string, playfair2bad1:boolean, playfair2bad2:boolean;
	$: {
		const input = playfair2input.replaceAll(/\s/g, "").toUpperCase();
		const key = playfair2key.toUpperCase().split("");
		playfair2bad1 = key.some((s, i) => key.indexOf(s) < i);
		if (playfair2bad1) break $;
		const fullkey = key.concat(alphabet.split("").filter(s => !key.includes(s)));
		playfair2bad2 = input.split("").some(s => !fullkey.includes(s));
		if (playfair2bad2) break $;
		playfair2fullkey = Array(4).fill(1).map((_, i) => fullkey.slice(i*8, (i+1)*8));
		playfair2chars = [];
		for (let i = 0; i < input.length; i += 2) {
			const [s1, s2] = decodePlayfair(input[i], input[i+1], playfair2fullkey);
			if (!s2) {
				playfair2chars.push(s1);
				continue;
			}
			playfair2chars.push(s1, s2);
		}
		playfair2result = playfair2chars.map(({r,c}) => playfair2fullkey[r][c]).join("");
	}

	let playfair2marks = {};
	function mark2 (ev: Event) {
		if (ev.type === "blur") {
			playfair2marks = {};
			return;
		}
		let sel = (ev.target as HTMLInputElement).selectionStart;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		sel -= playfair2input.slice(0, sel+1).match(/\s/g)?.length ?? 0;
		let [a, b] = playfair2input.replaceAll(/\s/g, "").toUpperCase().slice(sel & ~1);
		playfair2marks = {
			blue: [pos(a, playfair2fullkey), pos(b, playfair2fullkey)],
			brown: decodePlayfair(a, b, playfair2fullkey),
		};
	}

	const sq1 = [
		["Ч", " ", "В", "І", "П"],
		["О", "К", "Й", "Д", "У"],
		["Г", "Ш", "З", "Є", "Ф"],
		["Л", "Ї", "Х", "А", ","],
		["Ю", "Р", "Ж", "Щ", "Н"],
		["Ц", "Б", "И", "Т", "Ь"],
		[".", "С", "Я", "М", "Е"],
	];
	const sq2 = [
		["Е", "Л", "Ц", "Й", "П"],
		[".", "Х", "Ї", "А", "Н"],
		["Ш", "Д", "Є", "К", "С"],
		["І", " ", "Б", "Ф", "У"],
		["Я", "Т", "И", "Ч", "Г"],
		["М", "О", ",", "Ж", "Ь"],
		["В", "Щ", "З", "Ю", "Р"],
	];
	
	let dblsq1input = "ПРИЇЖДЖАЮ ШОСТОГО";
	let dblsq1chars:Point2[], dblsq1result:string, dblsq1bad:boolean;
	$: {
		dblsq1chars = [];
		const input = dblsq1input.toUpperCase();
		dblsq1bad = false;
		for (let i = 0; i < dblsq1input.length; i += 2) {
			const [s1, s2] = doubleSquare(input[i], input[i+1], sq1, sq2);
			if (!s2) {
				dblsq1chars.push(s1);
				continue;
			}
			dblsq1chars.push(s1, s2);
		}
		dblsq1bad = dblsq1bad || dblsq1chars.some(({r,c}) => r===-1 || c===-1);
		dblsq1result = dblsq1chars.map(({r,c,sq}) => sq ? sq2[r]?.[c] : sq1[r]?.[c]).join("");
	}

	let dblsq2input = "ЗРФОЛРРЕН.ЬЗМАЛХХ,ІЛЖДАК Х";
	let dblsq2chars:Point2[], dblsq2result:string, dblsq2bad:boolean;
	$: {
		dblsq2chars = [];
		const input = dblsq2input.toUpperCase();
		dblsq2bad = false;
		for (let i = 0; i < dblsq2input.length; i += 2) {
			const [s1, s2] = doubleSquare(input[i], input[i+1], sq2, sq1);
			if (!s2) {
				dblsq2chars.push(s1);
				continue;
			}
			dblsq2chars.push(s1, s2);
		}
		dblsq2bad = dblsq2bad || dblsq2chars.some(({r,c}) => r===-1 || c===-1);
		dblsq2result = dblsq2chars.map(({r,c,sq}) => sq ? sq1[r]?.[c] : sq2[r]?.[c]).join("");
	}
	
	let dblsqMarks1 = {};
	let dblsqMarks2 = {};
	function mark3 (ev: Event) {
		if (ev.type === "blur") {
			dblsqMarks1 = {};
			dblsqMarks2 = {};
			return;
		} 
		let sel = (ev.target as HTMLInputElement).selectionStart;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		let [a, b] = dblsq1input.toUpperCase().slice(sel & ~1);
		let [s1, s2] = doubleSquare(a, b, sq1, sq2);
		dblsqMarks1 = {
			blue: [pos(a, sq1)],
			brown: b ? [s2] : [pos(a, sq1)],
		};
		dblsqMarks2 = {
			blue: [pos(b, sq2)],
			brown: b ? [s1] : null,
		};
	}
	function mark4 (ev: Event) {
		if (ev.type === "blur") {
			dblsqMarks1 = {};
			dblsqMarks2 = {};
			return;
		} 
		let sel = (ev.target as HTMLInputElement).selectionStart;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		let [a, b] = dblsq2input.toUpperCase().slice(sel & ~1);
		let [s1, s2] = doubleSquare(a, b, sq2, sq1);
		dblsqMarks1 = {
			blue: [pos(b, sq1)],
			brown: b ? [s1] : null,
		};
		dblsqMarks2 = {
			blue: [pos(a, sq2)],
			brown: b ? [s2] : [pos(a, sq2)],
		};
	}
</script>

<h3>Шифр PLAYFAIR (зашифрувати)</h3>
Ключ: <input bind:value={playfair1key} class:bad={playfair1bad1} /> <br>
Текст: <input bind:value={playfair1input} class="input" class:bad={playfair1bad2} on:keyup={mark1} on:click={mark1} on:focus={mark1} on:blur={mark1} /> <br>
<Matrix matrix={playfair1fullkey} marks={playfair1marks} /> <br>
Шифровка: <span class="output">{playfair1result}</span>

<h3>Шифр PLAYFAIR (розшифрувати)</h3>
Ключ: <input bind:value={playfair2key} class:bad={playfair2bad1} /> <br>
Шифровка: <input bind:value={playfair2input} class="input" class:bad={playfair2bad2} on:keyup={mark2} on:click={mark2} on:focus={mark2} on:blur={mark2} /> <br>
<Matrix matrix={playfair2fullkey} marks={playfair2marks} /> <br>
Текст: <span class="output">{playfair2result}</span>

<h3>Шифр подвійного квадрата (зашифрувати)</h3>
Текст: <input bind:value={dblsq1input} class="input" class:bad={dblsq1bad} on:keyup={mark3} on:click={mark3} on:focus={mark3} on:blur={mark3} /> <br>
<Matrix matrix={sq1} marks={dblsqMarks1} /> 
<Matrix matrix={sq2} marks={dblsqMarks2} /> <br>
Шифровка: "<span class="output">{dblsq1result}</span>"

<h3>Шифр подвійного квадрата (розшифрувати)</h3>
Шифровка: <input bind:value={dblsq2input} class="input" class:bad={dblsq2bad} on:keyup={mark4} on:click={mark4} on:focus={mark4} on:blur={mark4} /> <br>
Текст: "<span class="output">{dblsq2result}</span>"

<style>
	.bad { background: #f88; }
	.input { color: blue; }
	.output { color: brown; }
</style>
