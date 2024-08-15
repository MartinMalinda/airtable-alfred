import alfy from 'alfy';
import fetch from 'node-fetch';

const AIRTABLE_API_KEY = alfy.cache.get('AIRTABLE_API_KEY');

// Cache expiration time in milliseconds (e.g., 1 day)
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

async function fetchTables(baseId) {
  const url = `https://api.airtable.com/v0/meta/bases/${baseId}/tables`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  if (!response.ok) {
    alfy.error('Failed to fetch tables. Please check your API key and base ID.');
    return [];
  }

  const data = await response.json();
  const tables = data.tables.map(table => ({
    id: table.id,
    title: table.name,
    arg: `https://airtable.com/${baseId}/${table.id}`,  // Pass the Airtable URL as an argument
    variables: {
      table_id: table.id,  // Set the table ID as a variable
    }
  }));

  // Cache the entire table objects list for this base
  alfy.cache.set(`base_tables_${baseId}`, { data: tables, timestamp: Date.now() });

  return tables;
}

async function getTables(baseId) {
  const cachedTables = alfy.cache.get(`base_tables_${baseId}`);

  if (cachedTables && (Date.now() - cachedTables.timestamp) < CACHE_EXPIRATION) {
    return cachedTables.data;
  }

  const tables = await fetchTables(baseId);
  return tables;
}

(async () => {
  if (!AIRTABLE_API_KEY) {
    alfy.error('API key not found. Please run the tablesetup command to set your API key.');
    return;
  }

  const baseId = process.env.base_id;  // Access the base_id variable set in the previous script

  if (!baseId) {
    alfy.error('No base ID provided.');
    return;
  }

  const tables = await getTables(baseId);

  if (alfy.input.length) {
    const filteredTables = tables.filter(table =>
      table.title.toLowerCase().includes(alfy.input.toLowerCase())
    );
    alfy.output(filteredTables);
  } else {
    alfy.output(tables);
  }
})();
