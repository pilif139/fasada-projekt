<script lang="ts">
  export let data;
  const question = data.question;
  let currentAns: number | null = null;
  let completed = false;

  const handleAnswer = (e: MouseEvent, index: number) => {
    if(!completed){
      const target = e.target as HTMLButtonElement;
      currentAns = index;
      completed=true;

      // add points to the user
      if (index === question.correctAnswer) {
      } else {
      }
    }
  };
</script>

<main class="flex flex-col items-center gap-4 w-[20vw]">
  <h1>{question.question}</h1>
  <ul class="flex justify-between">
    {#each question.answers as answer, index}
      {#if currentAns === question.correctAnswer && currentAns === index}
        <button
          on:click={(e) => handleAnswer(e, index)}
          class="bg-gradient-to-t from-green-800 to-black p-4 rounded-xl mx-2"
        >
          {answer}
        </button>
      {:else if index !== question.correctAnswer && currentAns !== null}
        <button
        on:click={(e) => handleAnswer(e, index)}
        class="bg-gradient-to-t from-red-800 to-black p-4 rounded-xl mx-2"
      >
        {answer}
      </button>
      {:else}
        <button
          on:click={(e) => handleAnswer(e, index)}
          class="bg-gradient-to-t from-slate-950 to-black p-4 rounded-xl mx-2"
        >
          {answer}
        </button>
      {/if}
    {/each}
  </ul>
</main>
