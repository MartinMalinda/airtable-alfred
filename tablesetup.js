import alfy from 'alfy';

const apiKey = alfy.input.trim();

if (apiKey) {
  // Save the API key to Alfred's cache
  alfy.cache.set('AIRTABLE_API_KEY', apiKey);
  alfy.output([{ title: 'API Key saved successfully!', subtitle: 'You can now use it in your workflows.' }]);
} else {
  alfy.output([{ title: 'No API Key provided!', subtitle: 'Please provide a valid API Key.' }]);
}
