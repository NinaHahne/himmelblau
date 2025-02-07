import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
  const supportedLanguages = ['de', 'en'];
  const lang = supportedLanguages.includes(params.lang) ? params.lang : 'de'; // Default to 'de' if unsupported
  return { lang };
};

export const prerender = true;
