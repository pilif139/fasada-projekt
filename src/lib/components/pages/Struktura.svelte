<script lang="ts">
  import src from "$lib/assets/strukutura.png";
  import Heading from "../Heading.svelte";
  import ListElement from "../ListElement.svelte";
</script>

<Heading>Struktura</Heading>
<img {src} alt="Struktura fasady" class="rounded-2xl shadow-lg shadow-black" />
<h2 class="text-2xl">Struktura fasady:</h2>
<ol>
  <ListElement>
    Klient, jest użytkownikiem aplikacji, w której zastosowana jest fasada
  </ListElement>
  <ListElement>
    Główna fasada, którą widzi klient, powinna być skonstruowana w jasny i
    przejrzysty sposób, aby klient się nie zgubił korzystając z naszej aplikacji
  </ListElement>
  <ListElement>
    Dodatkowe, podrzędne fasady, najczęściej zajmują się bardziej szczegółowymi
    zagadnieniami lub sekcjami kodu niż główna fasada, dzięki czemu od strony
    klienta program wygląda na bardziej przejrzysty
  </ListElement>
  <ListElement>
    Podsystem, czyli wszystkie klasy i obiekty, które stworzyliśmy i są
    wykorzystywane w programie, działają wewnątrz systemu i współpracują ze sobą
    bezpośrednio. To do nich odwołują się fasady, aby spełnić to, czego klient
    oczekuje.
  </ListElement>
</ol>
