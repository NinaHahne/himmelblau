<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { base } from "$app/paths"; // Dynamically get the base path
  import { cachedFetch } from "$lib/sanityClient"; // ✅ Use cached fetch
  import type { NavigationData } from "$lib/types";
  import RotatingBurgerMenuButton from "$lib/components/RotatingBurgerMenuButton.svelte";

  import "../app.css";

  let { children } = $props();

  // ✅ Correct Svelte 5 runes usage:
  let navigation = $state<NavigationData | null>(null);
  let showMenu: boolean = $state(false);

  const toggleMenu = () => {
    // Check screen size before toggling
    if (window.matchMedia("(max-width: 1023px)").matches) {
      showMenu = !showMenu;
    }
  };

  // Fetch navigation data when the component loads
  onMount(async () => {
    // ✅ Fetch only once when the component mounts
    navigation = await cachedFetch(`
      *[_type == "navigation"][0] {
          logo,
          navLinks,
          footerLinks
      }
    `);
  });
  // onDestroy(() => {
  //   console.log("layout onDestroy");
  // });
</script>

<div class="relative flex min-h-dvh w-full">
  <!-- Sidebar Navigation -->

  <RotatingBurgerMenuButton isOpen={showMenu} onToggle={toggleMenu} />

  <nav class="menu pointer-events-none fixed inset-0 z-40 h-auto min-h-dvh w-full overflow-hidden">
    <button
      class="absolute left-0 top-0 h-full w-full cursor-pointer text-inherit lg:hidden"
      class:pointer-events-auto={showMenu}
      onclick={toggleMenu}
      aria-label="Close menu"
    >
      <span
        class="relative block h-full w-full opacity-0 backdrop-blur-[3px] transition-opacity duration-300"
        class:opacity-100={showMenu}
      ></span>
    </button>
    <div class="relative flex h-full w-72">
      <div
        class="pointer-events-auto relative -left-full flex h-full w-full flex-col bg-sky-blue p-6 pt-8 font-amaticSC text-gray-800 transition-transform duration-300 lg:left-0"
        class:translate-x-full={showMenu}
      >
        <!-- Logo -->
        <a href="{base}/" aria-label="Himmelblau Startseite" class="mb-12 block" onclick={toggleMenu}>
          <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto w-full" />
        </a>

        <!-- Navigation Links -->
        <section class="flex h-full flex-col justify-between gap-4">
          <ul class="space-y-4 text-[46px] leading-none">
            {#each navigation?.navLinks ?? [] as { title, url, color, hoverColor }}
              <li>
                <a
                  href="{base}{url}"
                  class="block text-{color ?? 'navy'} hover:text-{hoverColor ?? 'gold'} transition-colors duration-300"
                  onclick={toggleMenu}
                >
                  {title}
                </a>
              </li>
            {/each}
          </ul>
          <ul class="space-y-4 text-[30px] leading-none">
            {#each navigation?.footerLinks ?? [] as { title, url }}
              <li>
                <a
                  href="{base}{url}"
                  class="block text-navy transition-colors duration-300 hover:text-gold"
                  onclick={toggleMenu}
                >
                  {title}
                </a>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-1 bg-mint pb-8 pl-4 pr-4 pt-12 font-nunito lg:ml-72 lg:pl-6 lg:pr-6 lg:pt-8">
    {@render children()}
  </main>
</div>
