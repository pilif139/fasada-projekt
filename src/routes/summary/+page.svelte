<script lang="ts">
    import ListElement from "$lib/components/ListElement.svelte";
import { points} from "$lib/pointsStore";
    import { questions } from "$lib/questions";
</script>

<main class="flex flex-col items-center text-2xl font-bold gap-4 w-[35vw]">
    <p class="text-5xl font-extrabold">Summary</p>
    <p>Total points earned: <span class="font-extrabold text-blue-500">{$points.points}</span></p>
    {#each questions as question, index}
        <ListElement className="from-slate-950 via-blue-950 to-gray-900">
            <p class="text-3xl font-extrabold">{question.question}</p>
            <div class="flex flex-wrap gap-2">
                <p>Correct answer: {question.answers[question.correctAnswer]} |</p>
                {#if $points.YourAnswers[index] !== question.correctAnswer}
                <p class="text-red-500">Your answer: {question.answers[$points.YourAnswers[index]]}</p>
                {:else}
                <p class="text-green-500">You guessed this right</p>
                {/if}
            </div>
        </ListElement>
    {/each}
</main>