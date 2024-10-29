<script lang="ts">
    import Heading from "../Heading.svelte";
</script>

<Heading>Zastosowania - bank</Heading>
<p>Przykładem użycia wzorca fasady może być aplikacja bankomatowa, która musi wchodzić w interakcję z systemem bankowym. Skoro aplikacja bankomatowa wykorzystuje tylko niewielką część możliwości systemu bankowego (autoryzacja karty, sprawdzenie stanu konta, wypłacanie i wpłacanie), to można zastosować fasadę, która zasłoni skomplikowaną strukturę wewnętrzną systemu bankowego. Upraszcza to pisanie aplikacji na bankomaty, a jednocześnie zapewnia lepsze bezpieczeństwo systemu bankowego. 
.</p>