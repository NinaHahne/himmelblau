import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env.WORKING_ON_CMS': JSON.stringify(process.env.WORKING_ON_CMS || 'false'),
  },
});
