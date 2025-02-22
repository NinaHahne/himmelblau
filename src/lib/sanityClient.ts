import { createClient } from '@sanity/client';

const workingOnCMS = process.env.WORKING_ON_CMS === 'true';

if (workingOnCMS) {
  console.log('Working on CMS (caching disabled)');
}

const isDev = process.env.NODE_ENV === 'development';

const client = createClient({
  projectId: 'oy7j0u07', // Sanity project ID for this project
  dataset: isDev ? 'production' : 'production', // Can be switched to a 'development' dataset if needed
  // useCdn: false, // Always fetch the latest data from Sanity
  // useCdn: true, // ✅ Enable Sanity CDN caching for production
  useCdn: !workingOnCMS, // Use CDN for caching when not working on CMS
  apiVersion: '2024-01-29', // Keep this date to ensure compatibility
  // token: import.meta.env.VITE_SANITY_TOKEN,
});

const cache: Record<string, unknown> = {}; // In-memory cache

export async function cachedFetch(query: string, params = {}) {
  const key = JSON.stringify({ query, params });

  if (!isDev && cache[key]) {
    return cache[key]; // ✅ Return cached data if available
  }

  const data = await client.fetch(query, params);
  if (!isDev) cache[key] = data; // ✅ Store fetched data in cache
  return data;
}

export default client;
