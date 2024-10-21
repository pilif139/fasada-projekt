<script lang="ts">
  import Heading from "../Heading.svelte";

  const importantStyle = "text-blue-500 font-extrabold";
</script>

<Heading>Definicja</Heading>
<p>
  Fasada jest wzorcem projektowym należącym do grupy <b class={importantStyle}>wzorców strukturalnych</b>. Fasada wyposaża złożony zestaw klas i obiektów w <b class={importantStyle}>uproszczony interfejs</b>.
</p>
<p>
  W programie możemy mieć <b class={importantStyle}>dowolną ilość fasad</b>.  Jeżeli fasad jest wiele, to istnieje jedna <b class={importantStyle}>główna fasada</b> odprowadzająca użytkownika do <b class={importantStyle}>fasad podrzędnych</b>, które są bardziej sprecyzowane i przystosowane do wyborów klienta.
</p>
