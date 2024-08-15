import alfy from 'alfy';
import fetch from 'node-fetch';

const AIRTABLE_API_KEY = alfy.cache.get('AIRTABLE_API_KEY');

// Cache expiration time in milliseconds (e.g., 1 day)
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // Set to 1 day

async function fetchBases() {
  const url = `https://api.airtable.com/v0/meta/bases`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  if (!response.ok) {
    alfy.error('Failed to fetch bases. Please check your API key.');
    return [];
  }

  const data = await response.json();
  const bases = data.bases.map(base => ({
    id: base.id,
    title: base.name,
    variables: {
      base_id: base.id  // Set the base ID as a variable
    }
  }));

  // Cache the entire base objects list
  alfy.cache.set('_bases', { data: bases, timestamp: Date.now() });

  return bases;
}

async function getBases() {
  const cachedBases = alfy.cache.get('_bases');

  if (cachedBases && (Date.now() - cachedBases.timestamp) < CACHE_EXPIRATION) {
    return cachedBases.data;
  }

  const bases = await fetchBases();
  return bases;
}

(async () => {
  if (!AIRTABLE_API_KEY) {
    alfy.error('API Key not found! Please run tablesetup command to set your API key.');
    return;
  }

  const bases = await getBases();

  if (alfy.input.length) {
    const filteredBases = bases.filter(base =>
      base.title.toLowerCase().includes(alfy.input.toLowerCase())
    );
    alfy.output(filteredBases);
  } else {
    alfy.output(bases);
  }
})();
