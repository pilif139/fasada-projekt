<script lang="ts">
  import { points } from "$lib/pointsStore";
  import type { QuestionType } from "$lib/questions";
  import {fade} from 'svelte/transition';

  export let question: QuestionType;
  export let handleClickAnswer: ()=> void;
  let clickedAns: number | null = null;

  const buttonStyle = " bg-gradient-to-t to-black px-10 py-6 rounded-xl mx-2 ";

  const handleAnswer = (e: MouseEvent, index: number) => {
        clickedAns = index;
        handleClickAnswer();
        if(clickedAns === question.correctAnswer){
            points.update((n) => n + 1);
        }
  };

</script>

<main class="flex flex-col items-center gap-4 w-[50vw]">
    <h1 class="text-4xl font-extrabold">{question.question}</h1>
    <ul class="flex justify-between text-xl">
      {#each question.answers as answer, index}
        {#if (clickedAns === index && index === question.correctAnswer)}
          <button class="from-green-800 {buttonStyle} border-4 border-white" transition:fade={{duration: 350}}>
            {answer}
          </button>
          {:else if clickedAns !== null && index === question.correctAnswer}
          <button class="from-green-800 {buttonStyle}">
            {answer}
          </button>
        {:else if clickedAns === index}
          <button class="from-red-800 {buttonStyle} border-4 border-white" transition:fade={{duration: 350}}>
            {answer}
          </button>
        {:else if index !== question.correctAnswer && clickedAns !== null}
          <button class="from-red-800 {buttonStyle}" transition:fade={{duration: 350}}>
            {answer}
          </button>
        {:else}
          <button
            on:click={(e) => handleAnswer(e, index)}
            class=" from-slate-950 {buttonStyle}"
          >
            {answer}
          </button>
        {/if}
      {/each}
    </ul>
</main>