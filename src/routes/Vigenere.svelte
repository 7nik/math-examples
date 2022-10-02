<script lang="ts">
    import Matrix from "../lib/Matrix.svelte";

    const alphabet = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ_".split("");
    const matrix = alphabet.reduce((m, letter) => {
        const pos = alphabet.indexOf(letter);
        m[letter] = alphabet.slice(pos).concat(alphabet.slice(0, pos));
        return m;
    }, {} as Record<string,string[]>);

    function unify(str: string) {
        return str.toUpperCase()
            .replaceAll(" ", "_")
            .split("")
            .filter((letter) => alphabet.includes(letter))
    }

    let key = "ЗАЯЦЬ";
    $: keyU = unify(key);
    let msg1 = "Захист інформації";
    $: msg1U = unify(msg1);
    let msg2 = "НАУБНЬ_ЗЗРЦРКЦТПЇ";
    $: msg2U = unify(msg2);

    function encode(msg: string[], key: string[]) {
        const len = key.length;
        return msg.map((letter, i) => {
                const row = matrix[key[i % len]] ?? alphabet;
                return row[alphabet.indexOf(letter)] ?? "?";
            });
    }

    function decode(msg: string[], key: string[]) {
        const len = key.length;
        return msg.map((letter, i) => {
                const row = matrix[key[i % len]] ?? alphabet;
                return alphabet[row.indexOf(letter)] ?? "?";
            });
    }

    let selCol = -1, selRow = -1, pos1 = -1, pos2 = -1, top = true;
    function mark1(ev: Event & { currentTarget: HTMLInputElement}) {
        if (ev.type === "blur") {
            selCol = -1;
            selRow = -1;
            pos1 = -1;
            return;
        }
        top = true;
        pos1 = ev.currentTarget.selectionStart ?? -1;
        const letter = msg1.at(pos1);
        selCol = alphabet.indexOf(letter?.toUpperCase() ?? "_");
        selRow = pos1 % key.length + 1;
    }
    function mark2(ev: Event & { currentTarget: HTMLInputElement}) {
        if (ev.type === "blur") {
            selCol = -1;
            selRow = -1;
            pos2 = -1;
            return;
        }
        top = false;
        pos2 = ev.currentTarget.selectionStart ?? -1;
        const letter = msg2.at(pos2);
        selRow = pos2 % key.length + 1;
        selCol = matrix[keyU[selRow-1]].indexOf(letter!);
    }
</script>

<b>Ключ</b>: <input bind:value={key}>
<br>
<b>Матриця</b>:
<br>
<Matrix matrix={(["А"].concat(keyU).map(l => matrix[l] ?? alphabet))}
    marks={{
        cyan: [{ c:selCol, r: top?0:selRow }, { c:0, r:selRow }],
    }}
    showColumn={true} showRow={true}
/>

<h1>Шифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg1} on:blur={mark1} on:focus={mark1} on:keyup={mark1} on:click={mark1} />
<br>
<b>Вихідний текст</b>:<br>
<Matrix 
    matrix={[
        msg1U,
        "".padEnd(msg1.length, key).split(""),
        encode(msg1U, keyU)
    ]} 
    marks={{
        cyan: [{ c:pos1, r:0 }, { c:pos1, r:1 }, { c:pos1, r:2 }]
    }}
/>

<h1>Дешифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg2} on:blur={mark2} on:focus={mark2} on:keyup={mark2} on:click={mark2} />
<br>
<b>Вихідний текст</b>:<br>
<Matrix 
    matrix={[
        msg2U,
        "".padEnd(msg2.length, key).split(""),
        decode(msg2U, keyU)
    ]} 
    marks={{
        cyan: [{ c:pos2, r:0 }, { c:pos2, r:1 }, { c:pos2, r:2 }]
    }}
/>

<style>
</style>
