<div>
    <slot></slot>
</div>

<style>
    div {
        margin: 50px auto;
        text-align: center;
    }
    div :global(a) {
        color: blue;
        text-decoration: none;
    }
    div :global(a:hover) {
        text-decoration: underline;
    }
</style>
