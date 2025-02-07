import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'oy7j0u07', // Sanity project ID for this project
  dataset: 'production',
  useCdn: false, // Set to true for faster performance in production
  apiVersion: '2024-01-29', // Keep this date to ensure compatibility
  // token: import.meta.env.VITE_SANITY_TOKEN,
});

export default client;
