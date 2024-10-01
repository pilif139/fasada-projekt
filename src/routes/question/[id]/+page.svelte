<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Question from "$lib/components/Question.svelte";

  export let data;
  const { Questions } = data;
  const id = Number($page.params.id);
  let clickedAnswers = 0;
  
  const handleClickAnswer = () => {
    clickedAnswers += 1;
  };

</script>

<main class="flex flex-col items-center gap-8 w-[50vw]">
  {#each Questions as question}
    <Question {handleClickAnswer} {question}/>
  {/each}

  {#if clickedAnswers === Questions.length}
    <Button href="/content/{id+1}">Next</Button>
  {/if}
</main>
