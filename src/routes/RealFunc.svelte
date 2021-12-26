<script lang="ts">
	import pf from "primes-and-factors";
    import Fraction from "$lib/Fraction.svelte";
	
    type Canon = { factor:number, times:number }[];

	let value = 42;
	$: canon = pf.getFrequency(value) as Canon;
	
	const tau = (canon: Canon) => canon.reduce((prod, { times }) => prod * (times + 1), 1);
	const sigma = (canon: Canon) => canon.reduce((prod, { factor, times }) => prod * (factor ** (times + 1) - 1) / (factor - 1), 1);
	const phi = (canon: Canon, n: number) => canon.reduce((prod, { factor, times }) => prod * (factor - 1) / factor, n);
</script>

<input type="number" min=2 bind:value />
<br><br>

{value} = 
{#each canon as { factor, times }, i}
	{#if i>0}&nbsp;· {/if}
	{factor}{#if times>1}<sup>{times}</sup>{/if}
{/each}

<br><br>

&tau;({value})
= 
{#each canon as { times }, i}
	{#if i>0}&nbsp;· {/if}
	({times} + 1)
{/each}
=
{#each canon as { times }, i}
	{#if i>0}&nbsp;· {/if}
	{times+1}
{/each}
=
{tau(canon)}

<br><br>

&sigma;({value})
= 
{#each canon as { factor, times }, i}
	{#if i>0}&nbsp;· {/if}
    <Fraction denominator="{factor} - 1">
		{factor}<sup>{times}+1</sup> - 1
    </Fraction>
{/each}
=
{#each canon as { factor, times }, i}
	{#if i>0}&nbsp;· {/if}
	{(factor ** (times+1)-1) / (factor-1)}
{/each}
=
{sigma(canon)}

<br><br>

&phi;({value})
= 
{value}
{#each canon as { factor }, i}
	&nbsp;· 
    <Fraction numerator="{factor} - 1" denominator={factor} />
{/each}
=
{canon.reduce((n, {factor}) => n/factor, value)}
{#each canon as { factor }, i}
	&nbsp;· 
	{factor - 1}
{/each}
=
{phi(canon, value)}
<br>
