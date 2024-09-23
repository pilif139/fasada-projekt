<script lang="ts">
    export let data;
    const question = data.question;

    const handleAnswer = (e: MouseEvent, index: number) => {
       const target = e.target as HTMLButtonElement;
       const answer = target.innerText;
       if(index === question.correctAnswer) {
           
       } else {
           alert('Incorrect!');
       }
    }
</script>

<main class="flex flex-col items-center gap-4 w-[20vw]">
  <h1>{question.question}</h1>
  <ul class="flex justify-between">
    {#each question.answers as answer,index}
        <button
            on:click={(e)=>handleAnswer(e,index)}
            class="bg-gradient-to-t from-slate-950 to-black p-4 rounded-xl mx-2">
            {answer}
        </button>
    {/each}
  </ul>
</main>