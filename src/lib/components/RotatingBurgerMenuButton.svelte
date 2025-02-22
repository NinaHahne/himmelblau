<script lang="ts">
  import { scale } from "svelte/transition";

  export let isOpen = false;
  export let onToggle;
</script>

<button
  class="fixed right-0 top-0 z-50 flex h-12 w-14 items-end justify-center p-4 lg:hidden"
  onclick={onToggle}
  aria-label={isOpen ? "Close menu" : "Open menu"}
>
  <div
    class="relative flex h-full w-full flex-col items-center justify-between transition-transform duration-300"
    class:rotate-180={isOpen}
  >
    <span
      class="relative block h-0.5 w-6 bg-navy transition-transform duration-300"
      class:-rotate-45={isOpen}
      class:translate-y-[0.45rem]={isOpen}
    ></span>
    <span
      class="relative block h-0.5 w-6 bg-navy transition-all duration-300"
      class:opacity-0={isOpen}
      class:scale-0={isOpen}
    ></span>
    <span
      class="relative block h-0.5 w-6 bg-navy transition-transform duration-300"
      class:rotate-45={isOpen}
      class:-translate-y-[0.45rem]={isOpen}
    ></span>
  </div>
</button>
