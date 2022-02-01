<script lang="ts">
	import Matrix from "$lib/Matrix.svelte";
	const alphabet = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

	type Point = { r:number, c:number };
    const Playfair = {
        pos (s:string, matrix:string[][]) {
            if (!matrix) return { r:-1, c:-1 };
            return {
                r: matrix.findIndex(row => row.includes(s)),
                c: matrix.reduce((index, row) => index >= 0 ? index : row.indexOf(s), -1),
            };
        },
	    encode (s1:string, s2:string, key:string[][]) {
            if (!s2) return [this.pos(s1, key)];
            const { c:c1, r:r1 } = this.pos(s1, key);
            const { c:c2, r:r2 } = this.pos(s2, key);
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
        },
        decode (s1:string, s2:string, key:string[][]) {
            if (!s2) return [this.pos(s1, key)];
            const { c:c1, r:r1 } = this.pos(s1, key);
            const { c:c2, r:r2 } = this.pos(s2, key);
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
    };
	
    const keys = ["УНІВЕР", "МОГИЛЯНКА", "ВЧИТЕЛЬ", "ШИФРУВАНЯ", "ПЛЕЙФЄРА"];
	let input = "Сила Математики";
	let key = "МОГИЛЯНКА";
    let method: "encode"|"decode" = "encode";
	let fullkey: string[][], result: string|Point[], badKey: boolean, badInput: boolean;
	$: {
		const strkey = key.toUpperCase().split("");
		badKey = strkey.some((s, i) => strkey.indexOf(s) < i);
		if (badKey) break $;
		const fullstrkey = strkey.concat(alphabet.split("").filter(s => !strkey.includes(s)));
		const text = input.replaceAll(/\s/g, "").toUpperCase();
		badInput = text.split("").some(s => !fullstrkey.includes(s));
		if (badInput) break $;
		fullkey = Array(4).fill(1).map((_, i) => fullstrkey.slice(i*8, (i+1)*8));
		result = [];
		for (let i = 0; i < text.length; i += 2) {
			const [s1, s2] = Playfair[method](text[i], text[i+1], fullkey);
			if (!s2) {
				result.push(s1);
				continue;
			}
			result.push(s1, s2);
		}
		result = result.map(({r, c}) => fullkey[r][c]).join("");
	}

	let marks = {};
	function mark (ev: Event) {
		if (ev.type === "blur") {
			marks = {};
			return;
		}
		let sel = (ev.target as HTMLInputElement).selectionStart || 0;
		if ((sel&-1) === ((ev.target as HTMLInputElement).value.length&-1)) sel -= 1;
		sel -= input.slice(0, sel+1).match(/\s/g)?.length ?? 0;
		let [a, b] = input.replaceAll(/\s/g, "").toUpperCase().slice(sel & ~1);
		marks = {
			blue: [Playfair.pos(a, fullkey), Playfair.pos(b, fullkey)],
			brown: Playfair[method](a, b, fullkey),
		};
	}

</script>

<h1>
    <a href="https://chmnu.edu.ua/populyarizatsiya-prirodnichih-nauk-ta-matematiki/" target="_blank">
        Алгоритм шифрування Playfair
    </a>
</h1>
Ключ: 
<select bind:value={key} class:bad={badKey}>
    {#each keys as k}<option>{k}</option>{/each}
</select>

<br>
Текст: <input bind:value={input} class="input" class:bad={badInput} on:keyup={mark} on:click={mark} on:focus={mark} on:blur={mark} /> <br>
<label>
    <input type="radio" bind:group={method} value="encode"> Зашифрувати
</label>
<label>
    <input type="radio" bind:group={method} value="decode"> Дешифрувати
</label>
<br>
<Matrix matrix={fullkey} {marks} /> <br>
Результат: <span class="output">{result}</span>

<style>
    input:not([type]), select { width: 220px; }
	.bad { background: #f88; }
	.input { color: blue; }
	.output { color: brown; }
</style>
