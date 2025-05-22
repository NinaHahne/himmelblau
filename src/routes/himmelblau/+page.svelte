<script lang="ts">
  import { base } from "$app/paths"; // Dynamically get the base path
  import AnimatedLogoFilled from "$lib/components/AnimatedLogoFilled.svelte";
  import AnimatedLogoStroke from "$lib/components/AnimatedLogoStroke.svelte";
  import AnimatedLogoStrokeFilled from "$lib/components/AnimatedLogoStrokeFilled.svelte";
  import AnimatedLogoOnlyFlower from "$lib/components/AnimatedLogoOnlyFlower.svelte";
  import { onMount } from "svelte";

  let useLogoVariant = $state<"c" | "d">("d");

  function selectLogoVariant(variant: "c" | "d") {
    localStorage.setItem("useLogoVariant", variant);
    location.reload();
  }

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
    console.log("Logo Variant:", useLogoVariant);
  });
</script>

<h1>Coming Soon: Himmelblau 💙</h1>
<p class="mb-4">🚧 This page is under construction. 🏗️</p>
<p class="font-bold text-bluebell">Logos testen: Klick auf das Logo, um die Animation neu zu starten</p>

<h3 class="mt-8"><strong>A)</strong> "wachsende" Blüte:</h3>
<AnimatedLogoFilled />

<h3 class="mt-8"><strong>B)</strong> Blüte wie Schrift animiert:</h3>
<AnimatedLogoStroke />

<h3 class="mt-8">
  <strong>C)</strong> so wie B) aber mit blauer Füllung zum Schluss:
</h3>
<div class="flex flex-col gap-4 lg:flex-row lg:items-end">
  <AnimatedLogoStrokeFilled />
  <button
    disabled={useLogoVariant === "c"}
    class="relative mt-2 rounded bg-bluebell-light px-3 py-1 text-white transition-all active:translate-y-0.5 disabled:bg-bluebell aria-pressed:bg-bluebell hoverable:hover:bg-bluebell"
    onclick={() => selectLogoVariant("c")}
  >
    {useLogoVariant === "c" ? "= Aktuelles Logo " : "Logo verwenden"}
  </button>
</div>

<h3 class="mt-8">
  <strong>D)</strong> so wie C), aber nur die Blume ist animiert:
</h3>
<div class="flex flex-col gap-4 lg:flex-row lg:items-end">
  <AnimatedLogoOnlyFlower />
  <button
    disabled={useLogoVariant === "d"}
    class="relative mt-2 rounded bg-bluebell-light px-3 py-1 text-white transition-all active:translate-y-0.5 disabled:bg-bluebell aria-pressed:bg-bluebell hoverable:hover:bg-bluebell"
    onclick={() => selectLogoVariant("d")}
  >
    {useLogoVariant === "d" ? "= Aktuelles Logo " : "Logo verwenden"}
  </button>
</div>

<p class="mt-8">Altes Logo:</p>
<br />
<a href="{base}/" aria-label="Himmelblau Startseite" class="block w-full max-w-[100vh] md:w-80">
  <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto w-full" />
</a>
