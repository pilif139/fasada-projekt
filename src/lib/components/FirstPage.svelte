<script lang="ts">
  import Button from "./Button.svelte";

    export let id;
</script>

<main class="flex flex-col">
    First Page
    <Button href="/question/{id}">Next</Button>
</main>