<script lang="ts">
  import Button from "./Button.svelte";

    export let id;
</script>

<main>
    First Page
    <Button href="/question/{id}">Next</Button>
</main>