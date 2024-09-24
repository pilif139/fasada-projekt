<script lang="ts">
    import {page} from "$app/stores";
</script>

<div class="m-auto text-center">
    <h1 class="font-extrabold text-4xl">Error {$page.status}</h1>
    <h2 class="text-2xl">{$page.error?.message}</h2>
</div>