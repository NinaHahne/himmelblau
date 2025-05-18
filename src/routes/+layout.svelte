<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { base } from "$app/paths"; // Dynamically get the base path
  import { cachedFetch } from "$lib/sanityClient"; // ✅ Use cached fetch
  import type { NavigationData } from "$lib/types";
  import RotatingBurgerMenuButton from "$lib/components/RotatingBurgerMenuButton.svelte";
  import AnimatedLogoOnlyFlowerMenu from "$lib/components/AnimatedLogoOnlyFlowerMenu.svelte";

  import "../app.css";

  let { children } = $props();

  const getScrollbarWidth = () => {
    // Scrollbar-Breite ermitteln
    const e = document.createElement("div");
    (e.style.visibility = "hidden"), (e.style.width = "100px"), document.body.append(e);
    const t = e.offsetWidth;
    e.style.overflow = "scroll";
    const o = document.createElement("div");
    (o.style.width = "100%"), e.append(o);
    const d = o.offsetWidth;
    e.remove();
    document.body.style.setProperty("--scrollbar-width", t - d + "px");
  };

  let container: HTMLElement;
  let resizeObserver: ResizeObserver;
  let isBodyOverflowing = $state(false);

  const checkBodyOverflow = () => {
    isBodyOverflowing = document.body.scrollHeight > window.innerHeight;
  };

  // ✅ Correct Svelte 5 runes usage:
  let navigation = $state<NavigationData | null>(null);
  let showMenu: boolean = $state(false);

  let showNavigation = $state(false);

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

    getScrollbarWidth();

    resizeObserver = new ResizeObserver(() => {
      // console.log("Layout changed!");

      // Handle layout changes here
      checkBodyOverflow();
    });
    if (container) {
      resizeObserver.observe(container);
    }

    showNavigation = true;
  });

  onDestroy(() => {
    // console.log("layout onDestroy");
    resizeObserver?.disconnect();
  });
</script>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
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
        class="pointer-events-auto relative -left-full flex h-full w-full flex-col overflow-auto bg-sky-blue p-6 pt-2 font-amaticSC text-gray-800 transition-transform duration-300 lg:left-0"
        class:translate-x-full={showMenu}
      >
        <a href="{base}/" aria-label="Himmelblau Startseite" class="mb-12 block" onclick={toggleMenu}>
          <!-- Old Logo -->
          <!-- <img src="{base}/images/logo.webp" alt="Himmelblau Logo" class="logo mx-auto w-full" /> -->
          <div class="logo-wrapper relative -ml-2 w-auto overflow-hidden">
            <AnimatedLogoOnlyFlowerMenu />
          </div>
        </a>

        <!-- Navigation Links -->
        <section
          class="flex h-full flex-col justify-between gap-4 transition-opacity duration-1000"
          class:opacity-0={!showNavigation}
          class:opacity-100={showNavigation}
        >
          <ul class="space-y-4 text-[46px] leading-none">
            {#each navigation?.navLinks ?? [] as { title, url, color, hoverColor }}
              <li>
                <a
                  href="{base}{url}"
                  class="inline-block text-{color ?? 'navy'} hover:text-{hoverColor ?? 'gold'} focus:text-{hoverColor ??
                    'gold'} transition-colors duration-300"
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
                  class="inline-block text-navy transition-colors duration-300 hover:text-gold focus:text-gold"
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
  <main class="flex w-full flex-col bg-mint pb-6 pl-4 pr-4 pt-12 font-nunito lg:ml-72 lg:p-6 lg:pt-8">
    {@render children()}
  </main>
</div>
