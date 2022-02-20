<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { beforeNavigate, afterNavigate } from "$app/navigation";
    import { onMount } from 'svelte';

    let links = {};
    // wordaround for https://github.com/sveltejs/kit/issues/2962
    // basically: avoid adding links to generated static pages :(
    onMount(() => {
        links = {
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
            Dijkstra: "Алгоритм Дейкстри",
            Prufer: "Алгоритм Прюфера",
        };
    });
    let active: keyof (typeof links);
    // @ts-ignore
    $: active = Object.keys(links).find(link => $page.url.pathname.endsWith(link));
    $: title = `Дискретна математика • ${links[active] ?? "Головна"}`;
    $: isIndexPage = $page.url.pathname === (base || "/");
    $: showMenu = isIndexPage;

    let hide = false;
    beforeNavigate(() => hide = true);
    afterNavigate(() => setTimeout(() => hide = false, 200));
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content="{title}" />
    <meta property="og:locale" content="uk_UA" />
</svelte:head>

<header>
    <span class="menu" on:click={() => showMenu = !showMenu || isIndexPage}>☰</span> 
    <span>{title}</span>
</header>
<ul on:click={() => showMenu = isIndexPage} class:showMenu={showMenu}>
    <h2>Сторінки</h2>
    {#each Object.entries(links) as [link, name]}
        <li>
            <a href="{base}/{link}" class:active={link === active} >
                {name}
            </a>
        </li>
    {/each}
</ul>
<main class:hide>
    <slot/>
</main>

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
        box-shadow: 2px 0 15px #8884;
        background: white;
        z-index: 2;
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
        left: -350px;
        border-right: 1px #8884 solid;
        box-shadow: 2px 0 30px #8884;
        overflow: auto;
        background: white;
        z-index: 1;
        transition: left 0.5s;
    }
    ul.showMenu {
        left: 0px;
    }
    li::marker {
        content: none;
    }
    li:last-child {
        padding-bottom: 2em;
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
        transition: opacity .2s;
    }
    main > :global(section ~ section) {
        display: none !important;
    }
    :global(input) {
        font-size: 90%;
        margin-bottom: 5px;
    }
    .hide {
        opacity: 0;
    }
</style>
