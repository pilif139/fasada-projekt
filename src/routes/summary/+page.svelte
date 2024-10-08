<script lang="ts">
    import ListElement from "$lib/components/ListElement.svelte";
    import { points} from "$lib/pointsStore";
    import { questions } from "$lib/questions";
    import Button from "$lib/components/Button.svelte";
</script>

<main class="flex flex-col items-center text-2xl font-bold gap-4 w-[80vw] md:w-[40vw] my-4">
    <p class="text-5xl font-extrabold">Podsumowanie</p>
    <p>Ilość punktów: <span class="font-extrabold text-blue-500">{$points.points}</span></p>
    {#each questions as question, index}
        <ListElement className="from-slate-950 via-blue-950 to-gray-900 min-w-[45vw]">
            <p class="text-3xl font-extrabold">{question.question}</p>
            <div class="flex flex-wrap gap-2">
                <p>Poprawna odpowiedź: {question.answers[question.correctAnswer]}</p>
                {#if $points.YourAnswers[index] !== question.correctAnswer}
                <p class="text-red-500" aria-label="wrong-answer">Twoja odpowiedź: {question.answers[$points.YourAnswers[index]]}</p>
                {:else}
                <p class="text-green-500">Zgadłeś prawidłowo</p>
                {/if}
            </div>
        </ListElement>
    {/each}
    <Button href="/" onClick={()=>points.set({points: 0, YourAnswers: []})}>Rozwiąż jeszcze raz</Button>
</main>