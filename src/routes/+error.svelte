<script lang="ts">
    import {page} from "$app/stores";
  import Button from "$lib/components/Button.svelte";
</script>

<div class="m-auto text-center flex flex-col items-center gap-4">
    <h1 class="font-extrabold text-5xl">Error 
        <span class="text-red-500">{$page.status}</span>
    </h1>
    <h2 class="text-3xl">{$page.error?.message} :(</h2>
    <Button href="/" className="w-[20vw]">Return to home page</Button>
</div>