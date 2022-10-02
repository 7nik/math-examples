<script lang="ts">
    import Matrix from "../lib/Matrix.svelte";

    const alphabet = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ_".split("");

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
            const pos = alphabet.indexOf(letter) + 1;
            const pos2 = (pos + Number(key[i % len])) % alphabet.length;
            return [letter, pos, key[i % len], pos2, alphabet[pos2-1]];
        });
    }

    function decode(msg: string[], key: string) {
        const len = key.length;
        return msg.map((letter, i) => {
            const pos = alphabet.indexOf(letter) + 1;
            const pos2 = (pos - Number(key[i % len]) + alphabet.length) % alphabet.length;
            return [letter, pos, key[i % len], pos2, alphabet[pos2-1]];
        });
    }
</script>
<b>Алфавіт</b>:
<br>
<Matrix matrix={[
    alphabet,
    alphabet.map((_, i) => i+1)
]} />
<br>
<b>Ключ</b>: <input type="number" bind:value={key}>
<br>

<h1>Шифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg1} />
<br>
<b>Вихідний текст</b>:<br>
<Matrix matrix={encode(msg1U, key)} colDir={true} />

<h1>Дешифрування</h1>
<b>Вхідний текст</b>:<br>
<input bind:value={msg2} />
<br>
<b>Вихідний текст</b>:<br>
<Matrix matrix={decode(msg2U, key)} colDir={true} />
