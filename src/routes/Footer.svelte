<script lang="ts">
    import { Icon } from 'svelte-icons-pack';
    import {BiBookmark, BiLogoGithub} from 'svelte-icons-pack/bi';
</script>

<footer class="relative bottom-0 flex items-center justify-center gap-5 py-8 font-bold text-xl bg-gradient-to-t from-[rgba(15,23,42,1)] to-[rgba(51,65,85,0)]">
    <p>Stronę stworzyli: Filip Kasperski, Władysław Furmańczyk i Antoni Piętka</p>
    <a  href="/zrodla"
        target="_blank"
         class="flex items-center gap-2 px-4 py-2 bg-gray-950 rounded-xl hover:bg-slate-900 transition hover:scale-110">
        <Icon src={BiBookmark}/>
        <p>Źródła</p>
    </a>
    <a  href="https://github.com/pilif139/fasada-projekt" target="_blank" class="hover:text-gray-400 transition duration-300 hover:scale-125">
        <Icon src={BiLogoGithub} size={50}/>
    </a>
</footer>