<script lang="ts">
    export let href:string = "";
    export let onClick : (() => void) | null = null;
</script>

{#if href}
    <a  href={href} 
        class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800 transition-all border-2 border-blue-600 hover:scale-110 duration-300">
        <slot></slot>
    </a>
{:else if onClick}
    <button on:click={onClick} 
            class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800      transition-all border-2 border-blue-600 hover:scale-110 duration-300"
            >
        <slot></slot>
    </button>
{:else}
    <button
        class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800 transition-all border-2 border-blue-600 hover:scale-110 duration-300"
     
        >
        <slot></slot>
    </button>
{/if}