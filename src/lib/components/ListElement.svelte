<script lang="ts">

    let {className, children} : {className?: string, children: any} = $props();
</script>

<div class="p-10 font-bold text-white rounded-xl transition-all duration-500 bg-gradient-to-t from-slate-900 via-blue-400 to-blue-600  bg-size-200 bg-pos-0 hover:bg-pos-100 my-5 cursor-pointer w-full shadow-lg shadow-black {className}">
    {@render children()}
</div>
