<script lang="ts">
  import Heading from "../Heading.svelte";

  const importantStyle = "text-blue-500 font-extrabold";
</script>

<Heading>Definicja</Heading>
<p>
  <span class={importantStyle}>Fasada</span> jest wzorcem projektowym należącym do
  grupy wzorców strukturalnych. Fasada wyposaża złożony zestaw klas i obiektów w
  uproszczony interfejs. W programie możemy mieć jedną fasadę, odpowiedzialną za
  wszystkie klasy i obiekty, albo w przypadku rozbudowanych lub skomplikowanych projektów:
  główną fasadę oraz fasady podrzędne. Polega to na tym, że główna fasada odprowadza
  użytkownika do podrzędnych, bardziej sprecyzowanych i przystosowanych fasad do
  oczekiwań klienta. Dzięki temu rozwiązaniu przy korzystaniu z ogromnych i skomplikowanych
  aplikacji, zamiast kazać użytkownikowi szukać igły w stogu siana w 1 wielkiej fasadzie,
  to za pomocą kilku podrzędnych fasad, możemy podzielić kod na sekcje.
</p>
