<script lang="ts">
    import Button from '$lib/components/Button.svelte';

    let {data} = $props();
    const {Content} = data;

</script>

<main class="flex flex-col items-center text-justify lg:w-[40vw] md:w-[60vw] text-xl gap-5 mx-6">
    <Content/>
    <Button href="/question/{data.id}">Next</Button>
</main>