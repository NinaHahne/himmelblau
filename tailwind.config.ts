import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  // safelist is for custom classes with colors chosen via CMS:
  // TODO: add more colors
  safelist: [
    'text-navy',
    'text-gold',
    'text-coral',
    'text-stem-green',

    'hoverable:hover:text-bluebell-logo-dark',
    'hoverable:hover:text-navy',
    'hoverable:hover:text-gold',
    'hoverable:hover:text-coral',
    'hoverable:hover:text-stem-green',
    'hoverable:hover:text-stem-green-dark',
  ],

  theme: {
    extend: {
      colors: {
        'sky-blue': '#cdeaf7', // Himmelblau
        'sky-blue-light': '#e1f3fa', // Light Sky Blue
        softwhite: '#fefcfb', // Soft White
        // lavender: '#f3e8ff', // Pastel Lavender
        mint: '#dcefde', // * Pale Mint or #edfbee
        'mint-light': '#f0fbf1', // Light Mint or #f6fff8
        // beige: '#fff4e6', // Creamy Beige
        // blush: '#ffe8ed', // Pale Blush Pink
        sage: '#e3f2e1', // Sage Green
        // moss: '#d9e4d5', // Pale Moss
        // ecru: '#f0ede1', // Ecru Green
        mist: '#e8ecef', // Misty Grey

        // Text:
        'deep-moss': '#223928', // Deep Moss Green
        charcoal: '#333333', // Charcoal Grey
        brown: '#5a4631', // Soft Earth Brown
        taupe: '#7d7064', // Warm Taupe
        slate: '#4b5563', // Slate Grey
        teal: '#1c3838', // Dark Teal

        // Links:
        navy: '#1e3a5f', // Navy Blue
        'navy-light': '#274a79', // Slightly Lighter Navy Blue
        gold: '#f0a500', // Soft Gold or #d1a854
        coral: '#ff725e', // Pastel Coral

        // Bluebell Colors:
        bluebell: '#097ff7',
        'bluebell-light': '#5aaefc',
        'bluebell-logo': '#2a8de5',
        'bluebell-logo-dark': '#166cb9',
        cyan: '#33bcd1',
        'cyan-light': '#7deff3',
        'leaf-green': '#6cd48b', // Leaf Green
        'stem-green': '#30a25e', // Stem Green
        'stem-green-dark': '#2a8c57', // Stem Green Dark
      },
      fontFamily: {
        // Logo & Navigation/Links:
        'amatic-sc': ['Amatic SC', 'cursive'],
        'architects-daughter': ['Architects Daughter', 'cursive'],
        caveat: ['Caveat', 'cursive'], // ***
        handlee: ['Handlee', 'cursive'], // *
        'just-another-hand': ['Just Another Hand', 'cursive'],

        neucha: ['Neucha', 'cursive'],
        'patrick-hand': ['Patrick Hand', 'cursive'], // **
        'patrick-hand-sc': ['Patrick Hand SC', 'cursive'],
        kalam: ['Kalam', 'cursive'],
        // Text:
        nunito: ['Nunito', 'sans-serif'], // *
      },
      maskImage: {
        'fade-bottom-edge': 'linear-gradient(to bottom, black calc(100% - var(--fade-edge, 40px)), transparent 100%)',
      },
    },
  },

  plugins: [
    typography,
    forms,
    containerQueries,
    function ({ addVariant }) {
      // Prevents hover sticking on touch devices
      // NOTE: the following media queries work fine to detect hover properly on iPhones but not on Android devices:
      // (any-hover: none) / (hover: none) / (hover: hover)
      // only the following works on iPhones & Android:
      addVariant('hoverable', '@media (any-hover: hover) and (pointer: fine)');
    },
    function ({ addUtilities }) {
      addUtilities({
        '.mask-fade-bottom-edge': {
          '--fade-edge': '2rem', // default, can be overwritten e.g. style="--fade-edge: 40px"
          'padding-bottom': 'var(--fade-edge)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black calc(100% - var(--fade-edge)), transparent 100%)',
          'mask-image': 'linear-gradient(to bottom, black calc(100% - var(--fade-edge)), transparent 100%)',
        },
      });
    },
  ],
} satisfies Config;
