<script lang="ts">
    import type { Edge } from "./GraphUtils";
    export let edge: Edge;
</script>

({edge.v1}, {edge.v2}) {#if edge.weight} = {edge.weight}{/if}
