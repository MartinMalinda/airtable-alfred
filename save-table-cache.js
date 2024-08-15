import alfy from 'alfy';

(async () => {
  // The full URL of the table that was just opened, pass this as a script argument
  const tableUrl = alfy.input;

  if (!tableUrl) {
    alfy.error('No table URL provided.');
    return;
  }

  // Extract the table ID from the URL (last segment after "/")
  const tableId = tableUrl.split('/').pop();

  if (!tableId) {
    alfy.error('Invalid table URL, unable to extract table ID.');
    return;
  }

  // Retrieve the current list of last opened tables from the cache
  let lastOpenedTables = alfy.cache.get('last_opened_tables') || [];

  // Remove the table ID if it already exists in the list
  lastOpenedTables = lastOpenedTables.filter(id => id !== tableId);

  // Add the table ID to the top of the list
  lastOpenedTables.unshift(tableId);

  // Limit the list to the most recent 10 tables (you can adjust this number)
  lastOpenedTables = lastOpenedTables.slice(0, 10);

  // Update the cache with the new list
  alfy.cache.set('last_opened_tables', lastOpenedTables);

  // Output a success message
  alfy.output([{ title: 'Table opened and cache updated successfully.' }]);
})();
