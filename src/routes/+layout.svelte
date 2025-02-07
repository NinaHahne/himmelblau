<script lang="ts">
  import { base } from "$app/paths"; // Dynamically get the base path
  import client from "$lib/sanityClient";
  import type { NavigationData } from "$lib/types";

  import "../app.css";

  let { children } = $props();

  // ✅ Correct Svelte 5 runes usage:
  let navigation = $state<NavigationData | null>(null);

  // Fetch navigation data when the component loads
  $effect(() => {
    async function fetchNavigation() {
      navigation = await client.fetch(`
                *[_type == "navigation"][0] {
                    logo,
                    navLinks,
                    footerLinks
                }
            `);
    }
    fetchNavigation();
  });
</script>

<div class="flex min-h-screen">
  <!-- Sidebar Navigation -->
  <aside class="fixed h-full w-72 bg-sky-blue font-amaticSC text-gray-800">
    <div class="h-full p-6">
      <!-- Logo -->
      <a href="{base}/" aria-label="Himmelblau Startseite" class="mb-12 block">
        <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto" />
      </a>

      <!-- Navigation Links -->
      <nav>
        <ul class="space-y-4 text-[46px] leading-none">
          <!-- <li>
                        <a href="{base}/" class="block text-stem-green hover:text-bluebell transition-colors duration-300">
                            Blumenladen
                        </a>
                    </li>
                    <li>
                        <a href="{base}/himmelblau" class="block text-navy hover:text-gold transition-colors duration-300">
                            himmelblau
                        </a>
                    </li>
                    <li>
                        <a href="{base}/bluetenspuren" class="block text-navy hover:text-gold transition-colors duration-300">
                            BlütenSpuren
                        </a>
                    </li>
                    <li>
                        <a href="{base}/bildergalerie" class="block text-navy hover:text-gold transition-colors duration-300">
                            Bildergalerie
                        </a>
                    </li> -->
          {#each navigation?.navLinks ?? [] as { title, url, color, hoverColor }}
            <li>
              <a
                href="{base}{url}"
                class="block text-{color ?? 'navy'} hover:text-{hoverColor ?? 'gold'} transition-colors duration-300"
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
        <ul class="space-y-4 text-[30px] leading-none">
          {#each navigation?.footerLinks ?? [] as { title, url }}
            <li>
              <a href="{base}{url}" class="block text-navy transition-colors duration-300 hover:text-gold">
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="ml-72 flex-1 bg-mint p-8 font-nunito">
    {@render children()}
  </main>
</div>

<style>
  aside a {
    /* font-weight: 700; */
    /* letter-spacing: 0.025em; */
  }
</style>
