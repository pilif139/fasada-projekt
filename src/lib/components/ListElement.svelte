<script lang="ts">
    export let className = "";
</script>

<div class="p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-t from-slate-900 via-blue-400 to-blue-600  bg-size-200 bg-pos-0 hover:bg-pos-100 my-5 cursor-pointer w-full shadow-lg shadow-black {className}">
    <slot></slot>
</div>
