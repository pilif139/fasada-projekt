<script>
  import Heading from "../Heading.svelte";
  import ListElement from "../ListElement.svelte";
</script>

<Heading>Zalety</Heading>
<ol>
  <ListElement
    >Można odizolować kod od złożoności podsystemu, co prowadzi do podziału
    aplikacji na warstwy, które ułatwiają niezależny rozwój klienta i złożonego
    systemu.</ListElement
  >
  <ListElement>
    możliwość zablokowania klientowi drogi do bezpośredniego korzystania ze
    złożonego systemu, jeśli jest to konieczne.
  </ListElement>
  <ListElement>
    kod klienta wykorzystującego fasadę jest czytelniejszy i łatwiejszy w
    zrozumieniu
  </ListElement>
  <ListElement>
    duże zmniejszenie liczby zależności między klientem a złożonym systemem —
    jeśli klient nie korzysta bezpośrednio z żadnych elementów ukrytych za
    fasadą systemu, całość jest łatwiejsza w konserwacji i utrzymaniu
  </ListElement>
</ol>
