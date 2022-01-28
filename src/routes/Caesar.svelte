<script lang="ts">
    const alphabet = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
    const len = alphabet.length;
    let msg = "СТУЙЛТЕУИТІКУЦТУЖТЛЬФУТДЧВЦШЯЕЦТУНСЕЧІСЕЧЛПЛЦЧ\
ХУЗУЖУТУТІЖЛКТЕЯЕЇЧВЦДЕРІСУЙІЄШЧЛИЕТУМТЧШНЧЛЖТІЖЛК\
ТЕЯІТТДСТУЙЛТЛДПЦШПШФТУЦЧМФІЖТЛЬМХМКТЛЬУЄЇПЧМЖИУ\
ЖМРВТУНФХЛХУИЛДПЕХУКЗРДИЕЇЧВЦДДПУИТІЮМРІУЄЇПЧЛДПМ\
ЦПРЕИЕГЧВСТУЙЛТШТЕКЛЖЕГЧВЦДННІРІСІТЧЕСЛТЕФХЛПРЕИСУЙ\
ТЕЗУЖУХЛЧЛФХУСТУЙЛТШШЦМЬПТЛЗЖФІЖТМОЄМЄРМУЧІЮМСТ\
УЙЛТШРМЧІХШПХЕНТЦВПУЗУЕРЩЕЖМЧШЕЄУФХУСТУЙЛТШЖЦМ\
ЬПУХІТМЖФІЖТУЗУХМЖТДТТД"
    let shift = 5;
    $: res = msg.toUpperCase().split("")
        .map(s => alphabet[(alphabet.indexOf(s) + shift + len) % len])
        .join("");
    let chart: Record<string, [number,number]>;
    $: chart = alphabet.split("")
        .reduce((map: Record<string,[number,number]>, s) => {
            map[s] = [
                (msg.toUpperCase().split(s).length-1)/msg.length,
                (res.split(s).length-1)/res.length,
            ];
            return map;
        }, {});
    $: max = Math.max(...Object.values(chart).flat());

</script>

<article>
    <section>
        <b>Абетка</b>: {alphabet}<br><br>

        <b>Вхідний текст</b>:<br>
        <textarea rows=10 cols=50 bind:value={msg}></textarea>
        <br>
        <b>Зміщення</b>: <input type="number" min="{-len}" max="{len}" bind:value={shift}>
        <br>
        <b>Вихідний текст</b>:<br>
        <div class="res">{res}</div>
    </section>
    <section>
        <div class="chart" style="--size: {alphabet.length}">
            {#each alphabet as s}
                <div class="col1" style="height:{chart[s][0]/max*100}%"></div>
                <div class="col2" style="height:{chart[s][1]/max*100}%"></div>
            {/each}
            {#each alphabet as s}
                <span>{s}</span>
            {/each}
        </div>
        <span style="color:blue">■ Вхідний текст</span>
        <span style="color:brown">■ Вихідний текст</span>
    </section>
</article>

<style>
    article {
        display: flex;
        align-items: stretch;
    }
    section:last-child {
        flex-grow: 1;
        text-align: center;
    }
    .res {
        width: 400px;
        word-wrap: break-word;
    }
    .chart {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(var(--size), 1fr 2fr);
        grid-template-rows: 1fr auto;
        align-items: end;
        grid-gap: 3px;
    }
    .chart .col1 {
        background: blue;
    }
    .chart .col2 {
        background: brown;
        width: 50%;
    }
    .chart span {
        grid-column: span 2;
        margin-right: 30%;
    }
</style>
