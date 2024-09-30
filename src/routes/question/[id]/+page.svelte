<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Question from "$lib/components/Question.svelte";

  export let data;
  const { Questions } = data;
  const id = Number($page.params.id);

  let clickedAns: number | null = null;

  const buttonStyle = " bg-gradient-to-t to-black px-10 py-6 rounded-xl mx-2 ";

  const handleAnswer = (e: MouseEvent, index: number) => {
    clickedAns = index;

    // add points to the user
    
  };
</script>

<main class="flex flex-col items-center gap-4 w-[50vw]">
  {#each Questions as question}
    <Question {question}/>
  {/each}

  {#if clickedAns !== null}
    <Button href="content/{id+1}">Next</Button>
  {/if}
</main>
