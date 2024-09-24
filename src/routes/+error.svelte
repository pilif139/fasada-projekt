<script lang="ts">
    import {page} from "$app/stores";
</script>

<div class="m-auto text-center flex flex-col gap-4">
    <h1 class="font-extrabold text-5xl">Error 
        <span class="text-red-500">{$page.status}</span>
    </h1>
    <h2 class="text-3xl">{$page.error?.message} :(</h2>
</div>