<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths"; // Dynamically get the base path
  import { cachedFetch } from "$lib/sanityClient"; // ✅ Use cached fetch
  import { weekdayTranslations } from "$lib/weekdays";
  import type { OpeningHours } from "$lib/types";

  const lang = "de"; // TODO: Change dynamically based on URL or user preference

  // ✅ Correct Svelte 5 runes usage:
  let openingHours = $state<OpeningHours | null>(null);
  let groupedHours = $state<{ days: string[]; hours: string }[]>([]);
  let biggerStar = $state(false);

  const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

  // Group opening hours by hours, if days with the same hours follow each other:
  function groupOpeningHours(openingHours: { day: string; hours: string }[]): { hours: string; days: string[] }[] {
    const grouped: { hours: string; days: string[] }[] = [];
    let currentGroup: { hours: string; days: string[] } | null = null;

    openingHours.forEach(({ day, hours }) => {
      const translatedDay = weekdayTranslations[day][lang];
      if (!currentGroup || currentGroup.hours !== hours) {
        currentGroup = { hours, days: [translatedDay] };
        grouped.push(currentGroup);
      } else {
        currentGroup.days.push(translatedDay);
      }
    });

    return grouped;
  }

  const toggleStar = (size?: "small" | "big") => {
    size === "small" ? (biggerStar = false) : size === "big" ? (biggerStar = true) : (biggerStar = !biggerStar);
    // biggerStar = !biggerStar;
  };

  onMount(async () => {
    openingHours = await cachedFetch(`*[_type == "openingHours"] { day, hours }`);
    if (!openingHours) return;

    openingHours.sort((a, b) => weekdays.indexOf(a.day) - weekdays.indexOf(b.day));
    groupedHours = groupOpeningHours(openingHours);
  });
</script>

<section class="flex h-full flex-col justify-center">
  <div class="flex flex-col items-center justify-center">
    <p class="text-center text-deep-moss">
      Im kleinen
      <a
        class="text-stem-green-dark transition-colors duration-300 hover:text-bluebell-logo-dark focus:text-bluebell-logo-dark"
        href="http://www.stadtteilzeitung-schoeneberg.de/2009/oktober/19.htm"
        target="_blank"
      >
        Blumenladen
      </a>
      himmelblau
      <br />
      gibt es schöne Blumen für
      <br />
      Liebeserklärungen, Hochzeiten und
      <br />
      auch für die einfachen kleinen Anlässe.
    </p>

    <button class="entrance relative m-8">
      <img
        src="{base}/images/PfingstrosenCampanula.webp"
        alt="Pfingstrosen und Campanula"
        class="room absolute inset-0 h-full w-full object-cover object-left-top"
      />
      <div class="door-frame relative w-[160px]">
        <img
          src="{base}/images/tuer_innen_4.webp"
          alt="himmelblaue Ladentür"
          class="door absolute bottom-0 left-[6px] w-[149px] will-change-transform"
        />
        <img src="{base}/images/tuer_rahmen_4.webp" alt="Türrahmen" class="frame relative" />
      </div>
    </button>

    <a
      id="opening_hours"
      href="#opening_hours_details"
      onmouseenter={() => toggleStar("big")}
      onmouseleave={() => toggleStar("small")}
      onfocus={() => toggleStar("big")}
      onblur={() => toggleStar("small")}
    >
      <p class="opening-hours text-center text-bluebell-logo-dark">
        Die himmelblaue Ladentür
        <br />
        öffnet sich in dieser Woche
        <strong
          class="star relative inline-block origin-[50%_30%] text-coral transition-transform duration-300"
          class:scale-150={biggerStar}
        >
          *
        </strong>
        <br />
        {#each groupedHours as { days, hours }, i}
          am
          {#if days.length === 1}
            {days[0]}
          {:else if days.length === 2}
            <strong>{days[0]} & {days[1]}</strong>
          {:else}
            {days.slice(0, -1).join(", ")} & {days[days.length - 1]}
          {/if}
          <br />
          <strong>{hours}</strong>
          {#if i < groupedHours.length - 1}
            <br />
          {/if}
        {/each}
        <!-- 
          am Freitag & Samstag 
          12°° – 18°°
        -->
      </p>
    </a>
    <p id="adress" class="m-2 text-center text-deep-moss">
      Markelstraße 13<br />
      12163 Berlin Steglitz
    </p>
    <p id="mona" class="m-2 text-center text-deep-moss">
      Mona Hahne<br />
      "Frau Himmelblau"
    </p>
    <div id="contact" class="text-center text-deep-moss">
      <a
        class="text-stem-green-dark transition-colors duration-300 hover:text-bluebell-logo-dark focus:text-bluebell-logo-dark"
        href="mailto:blumen@himmelblau.de"
      >
        blumen@himmelblau.de
      </a>
    </div>
  </div>

  <div class="relative flex flex-col items-center justify-center">
    <p id="opening_hours_details" class="mt-4 w-full text-center text-sm text-deep-moss">
      <strong
        class="star relative inline-block origin-[50%_30%] text-base text-coral transition-transform duration-300"
        class:scale-150={biggerStar}
      >
        *
      </strong>
      Die Öffnungszeiten<br />
      des kleinen Blumenladens<br />
      wechseln manchmal ein wenig,<br />
      denn es gibt viele Orte<br />
      und oft auch schöne Feste,<br />
      die Frau Himmelblau mit<br />
      himmelblauen & bunten Blumen<br />
      schmücken darf.<br />
      <br />
      Raumdekorationen <br />
      und besondere Bestellungen<br />
      für Hochzeiten, Geburtstage,<br />
      Taufen und Trauerfeiern<br />
      sind -nach Absprache- an<br />
      allen Tagen der Woche möglich!
    </p>
  </div>
</section>

<style>
  .door-frame {
    perspective: 1500px;
  }
  .door {
    cursor: pointer;
    color: #223928;
    transition: transform 0.3s ease-in-out;
    transform-origin: left center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
  }

  .entrance:hover .door,
  .entrance:focus .door {
    transform: rotateY(24deg);
  }

  /* .tooltip-trigger {
    cursor: pointer;
  }

  .tooltip {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .tooltip.visible {
    opacity: 1;
  } */
</style>
