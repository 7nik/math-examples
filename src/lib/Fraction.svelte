<script lang="ts">
    export let numerator = "", denominator = "";
</script>

<span class="fact">
    <span><slot>{numerator}</slot></span>
    <span><slot name="denominator">{denominator}</slot></span>
</span>

<style>
	.fact {
		display: inline-flex;
		flex-direction: column;
		vertical-align: middle;
        align-items: stretch;
		text-align: center;
	}
	.fact > :first-child {
		padding: 0 5px 3px 5px;
		border-bottom: 1px solid black;
	}
	.fact > :last-child {
		padding: 3px 5px 0 5px;
	}
	.fact > span > :global(*) {
		margin: 0;
	}
</style>
 