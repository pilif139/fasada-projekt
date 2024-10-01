<script lang="ts">
    import { points} from "$lib/pointsStore";
</script>

<main class="flex flex-col items-center text-2xl font-bold gap-2">
    <p class="text-4xl">Summary</p>
    <p>Total points earned: <span class="font-extrabold text-blue-500">{$points}</span></p>
</main>