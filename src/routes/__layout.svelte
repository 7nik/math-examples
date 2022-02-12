<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { fly, fade } from "svelte/transition";

    const links = {
        RealFunc: "Числові функції",
        NumSys: "Системи числення",
        NumSysExam: "Системи числення КР",
        Cong: "Конгруенції",
        Caesar: "Криптоаналіз шифру Цезаря",
        Crypto: "Класичні алгоритми шифрування",
        Playfair: "Шифр Playfair",
        RSA: "RSA",
        Graph: "Граф",
        BDFS: "Пошук у графі",
        Kruskal: "Алгоритм Крускала",
        Prim: "Алгоритм Пріма",
    }
    let active: keyof (typeof links);
    // @ts-ignore
    $: active = Object.keys(links).find(link => $page.path.endsWith(link));
    $: title = `Дискретна математика • ${links[active] ?? "Головна"}`;
    let showMenu = $page.path.endsWith("/");
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<header>
    <span class="menu" on:click={() => showMenu = !showMenu}>☰</span> 
    <span>{title}</span>
</header>
{#if showMenu}
    <ul transition:fly={{ x:-350, duration:500, opacity:1 }} on:click={() => showMenu=false}>
        <h2>Сторінки</h2>
        {#each Object.entries(links) as [link, name]}
            <li>
                <a href="{base}/{link}" class:active={link === active} >
                    {name}
                </a>
            </li>
        {/each}
    </ul>
{/if}
{#key active}
    <main in:fade>
        <slot/>
    </main>
{/key}

<style>
    :global(body) {
        margin: 0;
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }
    :global(#svelte) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    header {
        /* border-bottom: 1px #8884 solid; */
        box-shadow: 2px 0 15px #8884;
        background: white;
        z-index: 1;
    }
    header span {
        display: inline-block;
        padding: 20px;
        font-size: 20px;
        line-height: 20px;
    }
    .menu {
        cursor: pointer;
    }
    .menu:hover {
        background: lightsalmon;
    }
    ul {
        position: fixed;
        height: calc(100vh - 60px);
        width: auto;
        padding: 1em;
        margin: 0;
        top: 60px;
        border-right: 1px #8884 solid;
        box-shadow: 2px 0 30px #8884;
        overflow: auto;
        background: white;
    }
    li::marker {
        content: none;
    }
    h2 {
        padding: 15px;
        margin: 0;
    } 
    a {
        display: block;
        padding: 15px;
        color: black;
        text-decoration: none;
    }
    a:hover {
        background: lightskyblue;
    }
    a.active {
        background: lightgreen;
    }
    main {
        flex-grow: 1;
        padding: 20px;
        overflow: auto;
    }
    :global(input) {
        font-size: 90%;
        margin-bottom: 5px;
    }
</style>
