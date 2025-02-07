<script lang="ts">
  import { base } from "$app/paths"; // Dynamically get the base path
  import client from "$lib/sanityClient";

  let openingHours: { day: string; hours: string }[] = [];

  const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

  async function fetchOpeningHours() {
    openingHours = await client.fetch(`
      *[_type == "openingHours"] {
          day,
          hours
      }
    `);
  }

  fetchOpeningHours();

  // sort opening hours by day
  // Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag
  // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

  $: openingHours.sort((a, b) => {
    const dayIndexA = weekdays.indexOf(a.day);
    const dayIndexB = weekdays.indexOf(b.day);
    return dayIndexA - dayIndexB;
  });

  // $: console.log("openingHours", openingHours);

  // Group opening hours by hours, if days with the same hours follow each other:

  function groupOpeningHours(openingHours: { day: string; hours: string }[]): { hours: string; days: string[] }[] {
    const grouped: { hours: string; days: string[] }[] = [];
    let currentGroup: { hours: string; days: string[] } | null = null;

    openingHours.forEach(({ day, hours }) => {
      if (!currentGroup || currentGroup.hours !== hours) {
        currentGroup = { hours, days: [day] };
        grouped.push(currentGroup);
      } else {
        currentGroup.days.push(day);
      }
    });

    return grouped;
  }

  // 🛠️ This will automatically update when `openingHours` is fetched
  $: groupedHours = groupOpeningHours(openingHours);
</script>

<div class="flex flex-col items-center">
  <p class="text-center text-deep-moss">
    Im kleinen
    <a
      class="text-stem-green transition-colors duration-300 hover:text-bluebell"
      href="https://www.stadtteilzeitung-schoeneberg.de/2009/oktober/19.htm"
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

  <div class="door-frame m-8">
    <img src="{base}/images/Tuer.webp" alt="himmelblaue Ladentür" class="door" />
  </div>
  <p class="opening-hours text-center text-bluebell">
    Die himmelblaue Ladentür
    <br />
    öffnet sich in dieser Woche <strong class="text-coral">*)</strong>
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
  <p id="adress" class="m-2 text-center text-deep-moss">
    Markelstraße 13<br />
    12163 Berlin Steglitz
  </p>
  <p id="mona" class="m-2 text-center text-deep-moss">
    Mona Hahne<br />
    "Frau Himmelblau"
  </p>
  <div id="contact" class="text-center text-deep-moss">
    <a class="text-stem-green transition-colors duration-300 hover:text-bluebell" href="mailto:blumen@himmelblau.de">
      blumen@himmelblau.de
    </a>
  </div>
  <p id="opening_hours-details" class="m-4 w-full text-sm text-deep-moss">
    <strong class="text-base text-coral">*)</strong> Die Öffnungszeiten<br />
    des kleinen Blumenladens<br />
    wechseln manchmal ein wenig,<br />
    denn es gibt viele Orte<br />
    und oft auch schöne Feste,<br />
    die Frau Himmelblau mit<br />
    himmelblauen & bunten Blumen<br />
    schmücken darf.<br />
    <br /><br />
    Raumdekorationen <br />
    und besondere Bestellungen<br />
    für Hochzeiten, Geburtstage,<br />
    Taufen und Trauerfeiern<br />
    sind -nach Absprache- an<br />
    allen Tagen der Woche möglich!
  </p>
</div>

<style>
  .door-frame {
    perspective: 1000px;
    background-color: #cdeaf7;
  }
  .door {
    cursor: pointer;
    width: 160px;
    height: auto;
    color: #223928;
    transition: transform 0.3s ease-in-out;
    transform-origin: left center;
  }

  .door-frame:hover .door {
    transform: rotateY(24deg);
  }
</style>
