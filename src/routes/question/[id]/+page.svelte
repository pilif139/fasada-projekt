<script lang="ts">
  import { page } from '$app/stores';

  export let data;
  const {question} = data;
  const id = Number($page.params.id);

  let clickedAns: number | null = null;
  let completed = false;

  let message = "";
  let messageStyle = "";
  

  const handleAnswer = (e: MouseEvent, index: number) => {
    if(!completed){
      clickedAns = index;
      completed=true;

      // add points to the user
      if (index === question.correctAnswer) {
        message = "That is correct!";
        messageStyle = "text-green-700";
      } else {
        message = "That is incorrect!";
        messageStyle = "text-red-700";
      }
    }
  };

  const buttonStyle = "bg-gradient-to-t to-black px-10 py-6 rounded-xl mx-2"
</script>

<main class="flex flex-col items-center gap-4 w-[20vw]">
  <h1 class="text-4xl font-extrabold">{question.question}</h1>
  <ul class="flex justify-between text-xl">
    {#each question.answers as answer, index}
      {#if clickedAns === index && index === question.correctAnswer || completed === true && index === question.correctAnswer} 
        <button
          on:click={(e) => handleAnswer(e, index)}
          class="from-green-800 {buttonStyle}"
        >
          {answer}
        </button>
        {:else if clickedAns === index}
        <button
          on:click={(e) => handleAnswer(e, index)}
          class="from-red-800 {buttonStyle} border-4 border-white"
        >
          {answer}
        </button>
        {:else if index !== question.correctAnswer && clickedAns !== null}
          <button
          on:click={(e) => handleAnswer(e, index)}
          class="from-red-800 {buttonStyle}"
        >
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

  {#if completed}
    <p class="text-2xl {messageStyle}">{message}</p>
    <a href="/content/{id}" class="bg-blue-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800 transition-all border-2 border-blue-600">Next</a>
  {/if}
</main>
