import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
                'sky-blue': '#cdeaf7',  // Himmelblau
				softwhite: '#fefcfb', // Soft White
				// lavender: '#f3e8ff', // Pastel Lavender
				mint: '#edfbee',  // Pale Mint *
				// beige: '#fff4e6', // Creamy Beige
				// blush: '#ffe8ed', // Pale Blush Pink
				sage: '#e3f2e1', // Sage Green
				// moss: '#d9e4d5', // Pale Moss
				// ecru: '#f0ede1', // Ecru Green
				mist: '#e8ecef', // Misty Grey

				// Text:
				charcoal: '#333333', // Charcoal Grey
				brown: '#5a4631', // Soft Earth Brown
				'deep-moss': '#4a5d41', // Deep Moss Green
				taupe: '#7d7064', // Warm Taupe
				slate: '#4b5563', // Slate Grey

				// Links:
				navy: '#1e3a5f', // Navy Blue
				gold: '#f0a500', // Soft Gold or #d1a854
				coral: '#ff725e', // Pastel Coral
				'soft-olive': '#6b8f6d', // Soft Olive

				// Bluebell Colors:
				bluebell: '#097ff7',
				'bluebell-light': '#5aaefc',
				cyan: '#21dae1',
				'cyan-light': '#7deff3',
				'leaf-green': '#73e8ac', // Leaf Green
				'stem-green': '#22c662', // Stem Green
            },
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
