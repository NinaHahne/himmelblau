<script lang="ts">
  import { base } from "$app/paths"; // Dynamically get the base path
  import AnimatedLogoFilled from "$lib/components/AnimatedLogoFilled.svelte";
  import AnimatedLogoStroke from "$lib/components/AnimatedLogoStroke.svelte";
  import AnimatedLogoStrokeFilled from "$lib/components/AnimatedLogoStrokeFilled.svelte";
  import AnimatedLogoOnlyFlower from "$lib/components/AnimatedLogoOnlyFlower.svelte";
  import { onMount } from "svelte";

  let useLogoVariant = $state<"c" | "d">("d");

  onMount(() => {
    // beim Mount synchronisieren
    const stored = localStorage.getItem("useLogoVariant");
    if (stored === "c" || stored === "d") {
      useLogoVariant = stored;
    }
  });

  // speichern bei Änderung
  $effect(() => {
    localStorage.setItem("useLogoVariant", useLogoVariant);
  });
</script>

<h1 class="mt-4">Coming Soon: Himmelblau 💙</h1>
<p>🚧 This page is under construction. 🏗️</p>
<p class="hoverable:hover:text-coral">Logos testen: Klick auf das Logo, um die Animation neu zu starten</p>
<br />
<h2><strong>A)</strong> "wachsende" Blüte:</h2>
<AnimatedLogoFilled />
<br />
<h2><strong>B)</strong> Blüte wie Schrift animiert:</h2>
<AnimatedLogoStroke />
<br />
<h2><strong>C)</strong> so wie B) aber mit blauer Füllung zum Schluss:</h2>
<AnimatedLogoStrokeFilled />
<button class="mt-2 rounded bg-bluebell px-3 py-1 text-white" onclick={() => (useLogoVariant = "c")}>
  Logo verwenden
</button>
<br />
<h2><strong>D) aktuelles Logo, </strong> so wie C), aber nur die Blume ist animiert:</h2>
<AnimatedLogoOnlyFlower />
<button class="mt-2 rounded bg-bluebell px-3 py-1 text-white" onclick={() => (useLogoVariant = "d")}>
  Logo verwenden
</button>
<br />
<br />
<p>Altes Logo:</p>
<br />
<a href="{base}/" aria-label="Himmelblau Startseite" class="block w-full max-w-[100vh] md:w-80">
  <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto w-full" />
</a>
