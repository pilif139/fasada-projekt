<script lang="ts">
    type ButtonProps = {
        className: string;
        href: string;
        onClick: (() => void) | null;
        children: any;
    }
    let { className = "", href = "", onClick = null, children }: ButtonProps = $props();
</script>

{#if href}
    <a  href={href} 
        class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800 transition-all border-2 border-blue-600 hover:scale-110 duration-300 {className}">
        {@render children()}
    </a>
{:else if onClick}
    <button onclick={onClick} 
            class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800      transition-all border-2 border-blue-600 hover:scale-110 duration-300 {className}"
            >
        {@render children()}
    </button>
{:else}
    <button
        class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800 transition-all border-2 border-blue-600 hover:scale-110 duration-300 {className}"
        >
        {@render children()}
    </button>
{/if}