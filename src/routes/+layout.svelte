<script lang="ts">
    import "../app.css";
    import Footer from "./Footer.svelte";
</script>

<main class="bg-gradient-to-t from-slate-700 to-slate-900 w-full flex flex-col min-h-screen text-white font-medium">
    <div class="my-5 mx-40 h-full flex flex-grow justify-center">
        <slot></slot>
    </div>
    <Footer/>
</main>

