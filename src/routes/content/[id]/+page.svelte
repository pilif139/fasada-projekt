<script lang="ts">
  import { page } from '$app/stores';
    import Button from '$lib/components/Button.svelte';
  import { onMount } from 'svelte';

    export let data;
    const {content} = data;

</script>

<main class="flex flex-col items-center text-justify lg:w-[40vw] md:w-[60vw] text-xl gap-5 mx-6">
    <svelte:component this={content}/>
    <Button href="/question/{data.id}">Next</Button>
</main>