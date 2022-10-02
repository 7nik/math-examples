<script lang="ts">
    import Matrix from "../lib/Matrix.svelte";

    const alphabet = "_АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".split("");

    function unify(str: string) {
        return str.toUpperCase()
            .replaceAll(" ", "_")
            .split("")
            .filter((letter) => alphabet.includes(letter))
    }

    let key = "2321";
    let msg1 = "КАВУН";
    $: msg1U = unify(msg1);
    let msg2 = "МГДФП";
    $: msg2U = unify(msg2);

    function encode(msg: string[], key: string) {
        const len = key.length;
        return msg.map((letter, i) => {
            const pos = alphabet.indexOf(letter);
            const pos2 = (pos + Number(key[i % len])) % alphabet.length;
            return [letter, pos, key[i % len], pos2, alphabet[pos2]];
        });
    }

    function decode(msg: string[], key: string) {
        const len = key.length;
        return msg.map((letter, i) => {
            const pos = alphabet.indexOf(letter);
            const pos2 = (pos - Number(key[i % len]) + alphabet.length) % alphabet.length;
            return [letter, pos, key[i % len], pos2, alphabet[pos2]];
        });
    }
</script>
<b>Алфавіт</b>:
<br>
<Matrix matrix={[
    alphabet,
    alphabet.map((_, i) => i)
]} />
<br>
<b>Ключ</b>: <input type="number" bind:value={key}>
<br>

<h1>Шифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg1} />
<br>
<Matrix matrix={encode(msg1U, key)} colDir={true} />
<br>
<b>Шифровка</b>: {encode(msg1U, key).map((val) => val[4]).join("")}

<h1>Дешифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg2} />
<br>
<Matrix matrix={decode(msg2U, key)} colDir={true} />
<br>
<b>Текст</b>: {decode(msg2U, key).map((val) => val[4]).join("")}
