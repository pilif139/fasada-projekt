<script lang="ts">
  import Heading from "./Heading.svelte";
  import { points } from "$lib/pointsStore";
  import type { QuestionType } from "$lib/questions";
  import {fade} from 'svelte/transition';

  export let question: QuestionType;
  export let handleClickAnswer: ()=> void;
  let clickedAns: number = -1;

  const buttonStyle = " bg-gradient-to-t to-black px-10 py-6 rounded-xl mx-2 ";

  const handleAnswer = (e: MouseEvent, index: number) => {
        clickedAns = index;
        handleClickAnswer();
        if(clickedAns === question.correctAnswer && $points.YourAnswers[question.id] === undefined){
            points.update(({points, YourAnswers}) => {
                return {
                    points: points + 1,
                    YourAnswers: [...YourAnswers, question.correctAnswer]
                }
            });
        }
        else{
            points.update(({points, YourAnswers}) => {
                return {
                    points: points,
                    YourAnswers: [...YourAnswers, clickedAns]
                }
            });
        }
       points.subscribe((value) => {
            console.log(value.points);
        });
  };

</script>

<main class="flex flex-col items-center gap-4 w-full">
    <Heading>{question.question}</Heading>
    <ul class="flex justify-center text-xl w-full">
      {#each question.answers as answer, index}
        {#if (clickedAns === index && index === question.correctAnswer)}
          <button class="from-green-800 {buttonStyle} outline outline-4 outline-white" transition:fade={{duration: 350}}>
            {answer}
          </button>
          {:else if clickedAns !== -1 && index === question.correctAnswer}
          <button class="from-green-800 {buttonStyle}">
            {answer}
          </button>
        {:else if clickedAns === index}
          <button class="from-red-800 {buttonStyle} outline outline-4 outline-white" transition:fade={{duration: 350}}>
            {answer}
          </button>
        {:else if index !== question.correctAnswer && clickedAns !== -1}
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