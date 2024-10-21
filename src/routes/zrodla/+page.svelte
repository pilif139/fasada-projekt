<script>
  import Heading from "$lib/components/Heading.svelte";
  import { BiArrowBack } from "svelte-icons-pack/bi";
  import {Icon} from "svelte-icons-pack";
  import { BiLink } from "svelte-icons-pack/bi";
  import Button from "$lib/components/Button.svelte";

  const sources = [
      {
        name: "Refractoring Guru",
        url: "https://refactoring.guru/pl/design-patterns/facade"
      },
      {
        name: "Wikipedia",
        url: "https://pl.m.wikipedia.org/wiki/Fasada_(wzorzec_projektowy)"
      },
      {
        name: "Programistajutra",
        url: "https://www.programistajutra.pl/wzorce-projektowe/ ",
      }
  ];

</script>

<a href="/" class="absolute top-5 left-5"><Icon src={BiArrowBack} size={30} /></a>
<main class="flex flex-col gap-4 items-center">
    <Heading>Źródła</Heading>
    {#each sources as {name, url}}
        <Button className="flex text-xl w-[20vw] justify-center">
            <a href={url} class="flex">{name}<Icon src={BiLink} size={30}/></a>
        </Button>
    {/each}
</main>