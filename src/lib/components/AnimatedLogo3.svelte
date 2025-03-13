<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  // import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; // this would be optimal but is only accessible with a payed Club Membership

  // gsap ease cheatsheet:
  // ease: "none", "power1.in", "power1.out", "power1.inOut", "power2.in", "power2.out", "power2.inOut", "power3.in", "power3.out", "power3.inOut", "power4.in", "power4.out", "power4.inOut", "elastic.in", "elastic.out", "elastic.inOut", "back.in", "back.out", "back.inOut", "bounce.in", "bounce.out", "bounce.inOut", "circ.in", "circ.out", "circ.inOut", "expo.in", "expo.out", "expo.inOut", "sine.in", "sine.out", "sine.inOut"

  let showLogo = $state(false);
  const pathEases = [
    "power1.out", // h_leaf_stem
    "none", // 'himme'
    "power1.out", // 'lb'
    "power1.out", // 'l'
    "none", // 'au'
  ];

  onMount(() => {
    showLogo = true;

    const paths = document.querySelectorAll("#himmelblau path") as NodeListOf<SVGPathElement>;
    let durationOfAllPaths: number = 0;
    let delays: number[] = [0];

    paths.forEach((path, index) => {
      const length = path.getTotalLength(); // Get total length of the path
      const duration = (length / 60) * 1.0;

      durationOfAllPaths += duration;
      delays.push(delays[index] + duration);

      // Ensure paths are completely hidden at the start
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        // strokeDashoffset: length + 2, // Add buffer to prevent early visibility
        opacity: 0, // Hide it fully
      });

      // Instantly fade in the path when the stroke animation starts
      gsap.to(path, {
        opacity: 1,
        duration: 0.1, // Very quick fade-in
        delay: delays[index], // Starts at the same time as the stroke animation
        ease: "none", // == linear
      });

      // Animate stroke separately
      gsap.to(path, {
        strokeDashoffset: 0, // Reveal stroke
        duration: duration, // Adjust animation speed as needed
        ease: pathEases[index],
        delay: delays[index], // Stagger effect
      });
    });

    // Animate the dot of the 'i' separately
    gsap.fromTo(
      "#i-dot ellipse",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out", delay: durationOfAllPaths }
    );
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 158.98761 73.34407"
  version="1.1"
  id="svg1"
  stroke="currentColor"
  fill="none"
  class="h-auto w-full text-navy transition-opacity duration-300"
  class:opacity-0={!showLogo}
  class:opacity-100={showLogo}
>
  <defs id="defs1" />
  <g
    xmlns="http://www.w3.org/2000/svg"
    id="himmelblau"
    style="display:inline;fill:none;stroke-linecap:round;stroke-linejoin:round"
    transform="matrix(2.6189553,0,0,3.2184245,-109.53419,-159.20038)"
  >
    <path
      id="h_leaf_stem"
      style="display:inline;fill:none;stroke-width:0.00184908in;stroke-linecap:round;stroke-linejoin:round"
      d="m 35.397946,65.553462 c 1.328287,-3.031726 1.960189,-5.704447 2.231152,-7.337919 0.174515,-1.022142 0.466442,-5.183164 -0.497942,-5.451748 -1.105349,0.197269 -1.999749,4.324521 -2.085337,5.372035 -0.190089,1.782308 -0.178624,5.265692 0.348628,7.415367 -0.421574,1.843507 -1.372375,5.525509 -1.592317,6.371279 0.197065,-0.869591 1.179337,-4.720456 1.59673,-6.345023"
      transform="matrix(0.99726536,0,0,1.1767972,8.2023332,-12.522525)"
    />
    <path
      style="display:inline;fill:none;stroke-width:0.00223247in;stroke-linecap:round;stroke-linejoin:round"
      d="m 43.623725,64.405711 c 0.627076,-0.623987 1.221508,-0.611551 1.743515,-0.441885 0.557702,0.153423 1.165578,0.76253 1.294373,1.57733 0.500842,3.095294 0.69835,6.350893 2.143806,6.51293 1.65816,-0.160704 2.314805,-4.077173 2.740193,-8.030183 0.242753,3.938026 0.930403,11.218966 2.437654,6.517508 0.607666,-2.011292 0.655323,-1.964562 0.74434,-5.296063 0.167075,-0.968111 1.276383,-1.072264 1.276383,-1.072264 0.40619,-0.08276 0.436043,1.07308 0.452953,1.440159 l -0.03006,6.433681 c 0,0 -0.08226,-6.927784 0.525645,-7.461641 0.586271,-0.468644 1.519573,-0.903318 1.970266,-0.245329 0.08522,0.638786 0.03056,7.692709 0.03056,7.692709 0,0 -0.123536,-6.940695 0.533237,-7.433981 0.522087,-0.502008 1.603164,-0.893146 1.97899,-0.273477 0.09519,0.589647 -0.0467,2.705756 0.05898,5.34134 0.132646,2.350861 1.345634,3.135241 2.104945,0.95257 0.65996,-2.088996 0.707617,-2.042266 0.796634,-5.373767 0.167075,-0.968111 1.276382,-1.072264 1.276382,-1.072264 0.40619,-0.08276 0.436044,1.07308 0.452954,1.440159 l -0.03006,6.433681 c 0,0 -0.08226,-6.927784 0.525644,-7.461641 0.586272,-0.468644 1.519574,-0.903318 1.970266,-0.245329 0.08522,0.638786 0.03056,7.692709 0.03056,7.692709 0,0 -0.123535,-6.940695 0.533237,-7.433981 0.522087,-0.502008 1.603165,-0.893146 1.97899,-0.273477 0.09519,0.589647 -0.0467,2.705756 0.05898,5.34134 0.132646,2.350861 1.00813,3.107777 2.071785,1.009727 0.778909,-1.698617 1.449425,-2.618981 1.869668,-4.345042 0.212319,-1.239018 -0.276048,-2.16638 -0.811401,-2.300457 -0.619581,0.08164 -1.107041,1.112043 -1.035642,2.270453 0.551041,5.110254 1.988437,9.158755 4.412712,1.324419"
      id="himme"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      style="display:inline;fill:none;stroke-width:0.00223247in;stroke-linecap:round;stroke-linejoin:round"
      d="m 77.730214,67.625645 c 0.274736,-0.64736 1.695138,-4.815456 2.117163,-9.722366 0.02871,-1.801061 -0.176531,-7.139625 -1.239947,-7.639738 -1.035725,0.478017 -1.564775,5.845604 -1.636201,7.664179 0.216113,4.383388 0.438391,5.326846 1.705271,10.270434 1.28813,4.846362 2.717603,4.931847 4.273972,-0.345748 0.109054,-0.429986 0.213508,-0.827259 0.313436,-1.197732 0.921495,-3.416354 1.458066,-4.553845 1.6666,-8.051394 0.08953,-2.606929 -0.106755,-6.601204 -1.147291,-6.923801 -0.951094,0.349527 -1.3974,4.366669 -1.453562,6.833923 0.108663,3.868763 0.306026,5.445387 1.448926,9.89067 1.1429,4.445284 2.618978,3.841609 2.808355,0.100442 l 0.08554,-1.691156 C 86.44021,64.3902 86.212265,64.606323 86.477871,65.763554"
      id="lb"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      style="display:inline;fill:none;stroke-width:0.00223247in;stroke-linecap:round;stroke-linejoin:round"
      d="m 86.477871,65.763554 c 0.131508,0.259356 1.196114,3.254662 2.439604,1.36134 1.285723,-3.479063 1.378053,-4.494996 1.483568,-7.861823 0.03558,-2.630255 -0.42233,-5.683213 -1.317896,-6.001258 -0.987098,0.315004 -1.200483,3.083407 -1.308375,5.894101 0.07725,3.25462 0.678491,5.652764 1.992138,9.77883"
      id="l"
    />
    <path
      style="fill:none;stroke-width:0.00223247in;stroke-linecap:round;stroke-linejoin:round"
      d="m 89.76691,68.934744 c 1.246147,4.483097 2.150222,3.304006 2.315668,0.839692 0.218213,-3.420771 0.02135,-5.455983 2.84385,-5.260862 -1.220866,-0.03287 -2.19835,0.300685 -2.459208,1.634596 -0.195662,1.454059 -0.715017,5.924379 0.773193,5.938744 1.589179,0.1858 1.692702,-1.316466 1.683243,-3.97528 0.0745,-1.374576 0.07655,-2.588101 0.17888,-3.961249 0.02047,2.592384 -0.548288,7.88336 1.170393,7.894762 1.20953,-0.147469 1.203986,-3.176309 1.328159,-7.784818 0.03213,4.653693 -0.535489,7.827996 1.317894,7.886638 1.385448,-0.191052 1.306668,-1.329312 1.485308,-2.74894 0.0361,-1.597278 0.0459,-5.034981 0.0459,-5.034981 0,0 0.093,3.352333 0.13235,5.056881 0.0244,1.14038 0.45085,2.945058 1.84041,2.669075"
      id="au"
    />
    <g id="i-dot" class="fill-current" transform="matrix(0.57408835,0,0,0.61914586,25.054777,23.468306)">
      <ellipse
        style="display:inline;stroke-width:0.111286;stroke-linecap:round;stroke-linejoin:round"
        id="path1-7"
        cx="46.231426"
        cy="61.974384"
        rx="0.31260148"
        ry="0.695135"
      />
    </g>
  </g>
</svg>
