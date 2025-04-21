<script lang="ts">
  import { base } from "$app/paths"; // Dynamically get the base path
  import AnimatedLogoFilled from "$lib/components/AnimatedLogoFilled.svelte";
  import AnimatedLogoStroke from "$lib/components/AnimatedLogoStroke.svelte";
  import AnimatedLogoStrokeFilled from "$lib/components/AnimatedLogoStrokeFilled.svelte";
  import AnimatedLogoOnlyFlower from "$lib/components/AnimatedLogoOnlyFlower.svelte";
</script>

<h1 class="mt-4">Coming Soon: Himmelblau</h1>
<p>This page is under construction.</p>
<p class="hoverable:hover:text-coral">Logo Testing: click on the logo to restart the animation</p>
<AnimatedLogoFilled />
<AnimatedLogoStroke />
<AnimatedLogoStrokeFilled />
<AnimatedLogoOnlyFlower />
<br />
<p>Old Logo:</p>
<br />
<a href="{base}/" aria-label="Himmelblau Startseite" class="block w-full max-w-[100vh] md:w-80">
  <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto w-full" />
</a>
