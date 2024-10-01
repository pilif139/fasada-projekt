<script lang="ts">
    import { points} from "$lib/pointsStore";
    import { questions } from "$lib/questions";
</script>

<main class="flex flex-col items-center text-2xl font-bold gap-4">
    <p class="text-5xl font-extrabold">Summary</p>
    <p>Total points earned: <span class="font-extrabold text-blue-500">{$points.points}</span></p>
    {#each questions as question, index}
        <div class="bg-slate-950 px-8 py-4 rounded-2xl flex flex-col items-center gap-2">
            <p class="text-3xl font-extrabold">{question.question}</p>
            <div class="flex gap-2">
                <p>Correct answer: {question.answers[question.correctAnswer]} -> </p>
                {#if $points.YourAnswers[index] !== question.correctAnswer}
                <p class="text-red-500">Your answer: {question.answers[$points.YourAnswers[index]]}</p>
                {:else}
                <p class="text-green-800">You guessed this right</p>
                {/if}
            </div>
        </div>
    {/each}
</main>