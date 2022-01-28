<script lang="ts">
	import Matrix from "$lib/Matrix.svelte";
	
	const fillHoles = (matrix: string[][], filler = "_") => {
		for (let i = 1; i < matrix.length; i++) {
			while (matrix[i].length < matrix[0].length) {
				matrix[i].push(filler);
			}
		}
		return matrix;
	};
	const transpose = <T extends unknown>(matrix: T[][]) => {
		const m: T[][] = [];
		matrix.forEach((row, r) => row.forEach((cell, c) => { 
			if (!m[c]) m[c] = [];
			m[c][r] = cell;
		}));
		return m;
	};
	const _comparator = new Intl.Collator("ua").compare;
	const comparator = (a:string[], b:string[]) => _comparator(a.toString(), b.toString());
	
	let oneDInput = "УЧБОВИЙ_ПОСІБНИК";
	let oneDKey = "ГОРЩИК";
	let oneDSize:number, oneDGrid1:string[][], oneDGrid2:string[][], oneDResult:string;
	let oneDBad:boolean;
	$: {
		oneDSize = Math.ceil(oneDInput.length / oneDKey.length);
		oneDBad = !oneDSize || !Number.isInteger(oneDSize);
		if (oneDBad) break $;
		oneDGrid1 = Array(oneDKey.length).fill(1)
			.map((_, i) => oneDKey[i].concat(oneDInput.slice(i*oneDSize, (i+1)*oneDSize)).split(""));
		oneDGrid1 = fillHoles(oneDGrid1);
        // @ts-ignore
		oneDGrid2 = oneDGrid1.slice().sort(comparator);
		oneDResult = transpose(oneDGrid2)
			.map(row => row.join(""))
			.join("")
			.slice(oneDKey.length);
	}
	
	let twoDInput = "ВАЖЛИВЕ_ЗНАЧЕННЯ";
	let twoDKey1 = "1973";
	let twoDKey2 = "1649";
	let twoDGrid1:string[][], twoDGrid2:string[][], twoDGrid3:string[][], twoDResult:string;
	let twoDBad:boolean;
	$: {
		twoDBad = !twoDKey1 || !twoDKey2;
		if (twoDBad) break $;
		twoDGrid1 = Array(twoDKey1.length + 1).fill(1).map((_, i) => {
			if (!i) return [" ", ...twoDKey2];
			return twoDKey1[i-1].concat(twoDInput.slice((i-1)*twoDKey2.length, (i)*twoDKey2.length)).split("");
		});
		twoDGrid1 = fillHoles(twoDGrid1);
		twoDGrid2 = twoDGrid1.slice().sort(comparator);
		twoDGrid3 = transpose(transpose(twoDGrid2).sort(comparator));
		twoDResult = transpose(twoDGrid3.slice(1))
			.map(row => row.join(""))
			.join("")
			.slice(twoDKey1.length);
	}
	
	let ttwoDInput = "ЗТА_АО_РРТИСК_ІВ";
	let ttwoDKey1 = "1563";
	let ttwoDKey2 = "2647";
	let ttwoDGrid1:string[][], ttwoDGrid2:string[][], ttwoDGrid3:string[][], ttwoDResult:string;
	let ttwoDBad:boolean;
	$: {
		ttwoDBad = !ttwoDKey1 || !ttwoDKey2;
		if (ttwoDBad) break $;
		const ttwoDKey1s = [...ttwoDKey1].sort();
		const ttwoDKey2s = [...ttwoDKey2].sort();
		ttwoDGrid1 = Array(ttwoDKey2.length + 1).fill(1).map((_, i) => {
			if (!i) return [" ", ...ttwoDKey1s];
			return ttwoDKey2s[i-1].concat(ttwoDInput.slice((i-1)*ttwoDKey1.length, (i)*ttwoDKey1.length)).split("");
		});
		ttwoDGrid1 = transpose(ttwoDGrid1);
		ttwoDGrid1 = fillHoles(ttwoDGrid1);
		ttwoDGrid2 = transpose(ttwoDGrid1);
		ttwoDGrid2 = ttwoDGrid2.map((col, i) => {
			if (!i) return col;
			return ttwoDGrid2.find((col) => col[0] === ttwoDKey2[i-1]) ?? [];
		});
		ttwoDGrid2 = transpose(ttwoDGrid2);
		ttwoDGrid3 = ttwoDGrid2.map((col, i) => {
			if (!i) return col;
			return ttwoDGrid2.find((col) => col[0] === ttwoDKey1[i-1]) ?? [];
		});
		ttwoDResult = transpose(ttwoDGrid3.slice(1))
			.map(row => row.join(""))
			.join("")
			.slice(ttwoDKey1.length);
	}
	
	let gridInput = "ПІДКУП ПЕРСОНАЛУ";
	let gridParams = "4 3 8 10 13";
	let gridGrids:string[][][] = [], gridResGrid:string[][], gridResult:string;
	let gridBad:boolean;
	$: {
		let [size, ...holes] = gridParams.split(/\s+/).filter(s => s).map(Number);
		gridBad = Math.floor(size*size/4) !== holes.length
			|| holes.some(n => n > size*size || n < 1)
			|| holes.some((n, i) => holes.indexOf(n) !== i);
		if (gridBad) break $;
		let holes2 = holes;
		for (let i = 0; i < 4; i++) {
			holes2.sort((a, b) => a - b);
			gridGrids[i] = Array(size).fill(1).map(() => Array(size).fill(""));
			holes2.forEach((n, j) => gridGrids[i][(n-1)%size][Math.floor((n-1)/size)] = gridInput[i*size + j]);
			if (i === 3) break;
			holes2 = holes2.map(n => {
				n -= 1;
				const r = Math.floor(n/size);
				const c = n%size;
				return c*size + (size - r);
			});
			gridBad = gridBad || holes2.some(n => holes.includes(n));
		}
		gridResGrid = Array(size).fill(1).map((_, c) => Array(size).fill(1).map((_, r) => 
			gridGrids[0][c][r] || gridGrids[1][c][r] || gridGrids[2][c][r] || gridGrids[3][c][r] || "_"
		));
		gridGrids.forEach((m) => m.forEach((col, c) => col.forEach((cell, r) => { if (!cell) m[c][r] = "·"; })));
		gridResult = transpose(gridResGrid).map(col => col.join("")).join("");
	}
	
	let sqInput = "УЧБОВИЙ_ПОСІБНИК";
	let sqIndex = "4 9 5 16 15 6 10 3 14 7 11 2 1 12 8 13";
	let sqMatrix:number[][], sqMatrix2:string[][], sqResult:string;
	let sqBad:boolean;
	$: {
		const nums = sqIndex.split(/\s+/).map(Number);
		const size = Math.sqrt(nums.length);
		sqBad = !Number.isInteger(size);
		if (sqBad) break $;
		sqMatrix = Array(size).fill(1).map((_, i) => nums.slice(i*size, (i+1)*size));
		sqMatrix = transpose(sqMatrix);
        sqMatrix2 = sqMatrix.map(row => row.map(n => sqInput[n-1]));
		sqResult = nums.map(n => sqInput[n-1] ?? "_").join("");
	}
	
</script>

<h3>1. Одиночна перестановка по ключу</h3>
Текст: <input bind:value={oneDInput} class:bad={oneDBad} /> <br>
Ключ: <input bind:value={oneDKey} class:bad={oneDBad} /> <br>
<Matrix matrix={oneDGrid1} showRow={true} colDir={true} />
<Matrix matrix={oneDGrid2} showRow={true} colDir={true} />
<br>
Шифровка: {oneDResult}

<h3>2. Подвійна перестановка по ключу (зашифрувати)</h3>
Текст: <input bind:value={twoDInput} /> <br>
Ключі: <input bind:value={twoDKey1} class:bad={twoDBad} /> <input bind:value={twoDKey2} class:bad={twoDBad}  /> <br>
<Matrix matrix={twoDGrid1} showRow={true} showColumn={true} colDir={true} />
<Matrix matrix={twoDGrid2} showRow={true} showColumn={true} colDir={true} />
<Matrix matrix={twoDGrid3} showRow={true} showColumn={true} colDir={true} />
<br>
Шифровка: {twoDResult}

<h3>3. Подвійна перестановка по ключу (розшифрувати)</h3>
Шифровка: <input bind:value={ttwoDInput} /> <br>
Ключі: <input bind:value={ttwoDKey1} class:bad={ttwoDBad} /> <input bind:value={ttwoDKey2} class:bad={ttwoDBad} /> <br>
<Matrix matrix={ttwoDGrid1} showRow={true} showColumn={true} colDir={true} />
<Matrix matrix={ttwoDGrid2} showRow={true} showColumn={true} colDir={true} />
<Matrix matrix={ttwoDGrid3} showRow={true} showColumn={true} colDir={true} />
<br>
Текст: {ttwoDResult}

<h3>4. Шифр решіток</h3>
Текст: <input bind:value={gridInput} /> <br>
Розмір решітки та номера дірок: <input bind:value={gridParams} class:bad={gridBad} /> <br>
<Matrix matrix={gridGrids[0]} colDir={true} />
<Matrix matrix={gridGrids[1]} colDir={true} />
<Matrix matrix={gridGrids[2]} colDir={true} />
<Matrix matrix={gridGrids[3]} colDir={true} />
<Matrix matrix={gridResGrid} colDir={true} />
<br>
Шифровка: {gridResult}

<h3>5. Магічні квадрати</h3>
Текст: <input bind:value={sqInput} /> <br>
Магічна послідовність: <input bind:value={sqIndex} class:bad={sqBad}/> <br>
<Matrix matrix={sqMatrix} colDir={true} />
<Matrix matrix={sqMatrix2} colDir={true} />
<br>
Шифровка: {sqResult}

<style>
    input {
        margin-bottom: 5px;
    }
	.bad {
		background: #f88;
	}
</style>
