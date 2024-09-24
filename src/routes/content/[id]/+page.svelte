<script lang="ts">
    export let data;
    const {content} = data;
    console.log(content);
</script>

<svelte:component this={content.component} />