import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'oy7j0u07', // Sanity project ID for this project
  dataset: 'production',
  useCdn: true, // ✅ Enable Sanity CDN caching for production
  apiVersion: '2024-01-29', // Keep this date to ensure compatibility
  // token: import.meta.env.VITE_SANITY_TOKEN,
});

const cache: Record<string, unknown> = {}; // In-memory cache

export async function cachedFetch(query: string, params = {}) {
  const key = JSON.stringify({ query, params });

  if (cache[key]) {
    return cache[key]; // ✅ Return cached data if available
  }

  const data = await client.fetch(query, params);
  cache[key] = data; // ✅ Store fetched data in cache
  return data;
}

export default client;
