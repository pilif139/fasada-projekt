<script lang="ts">
    let {children}: {children: any} = $props();
</script>

<h1 class="text-4xl 2xl:text-5xl font-extrabold text-center">
    {@render children()}
</h1>