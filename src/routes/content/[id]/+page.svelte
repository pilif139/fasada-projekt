<script lang="ts">
    export let data;
    const {content} = data;
</script>

<svelte:component this={content.component} id={data.id}/>