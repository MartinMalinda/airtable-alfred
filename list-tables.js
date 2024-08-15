import alfy from 'alfy';

(async () => {
  // Retrieve the cached bases
  const cachedBases = alfy.cache.get('_bases');
  const lastOpenedTables = alfy.cache.get('last_opened_tables') || [];

  if (!cachedBases) {
    alfy.error('No cached bases found.');
    return;
  }

  // Initialize an array to hold all tables across all bases
  let allTables = [];

  // Iterate over each cached base to retrieve its tables
  for (const base of cachedBases.data) {
    const baseId = base.id;
    const baseName = base.title;

    // Retrieve the cached tables for the specific base
    const cachedTables = alfy.cache.get(`base_tables_${baseId}`);

    if (cachedTables) {
      // Format each table's title as 'Base Name / Table Name'
      const formattedTables = cachedTables.data.map(table => ({
        ...table,
        title: `${table.title}`,
        subtitle: baseName,
      }));

      // Combine tables from this base with the overall tables list
      allTables = allTables.concat(formattedTables);
    }
  }

  // Filter the combined tables based on user input
  if (alfy.input.length) {
    const filteredTables = allTables.filter(table =>
      table.title.toLowerCase().includes(alfy.input.toLowerCase())
    );
    alfy.output(filteredTables);
  } else {
    // Sort the tables by last opened order
    const sortedTables = [
      ...lastOpenedTables.map(id => allTables.find(table => table.id === id)).filter(Boolean),
      ...allTables.filter(table => !lastOpenedTables.includes(table.id))
    ];
    alfy.output(sortedTables);
  }
})();
