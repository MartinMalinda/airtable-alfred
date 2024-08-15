import alfy from 'alfy';

// Clear the cached data for the bases
alfy.cache.delete('bases');
alfy.cache.delete('_bases');

alfy.output([{ title: 'Cache cleared!', subtitle: 'The next run will fetch fresh data for bases.' }]);
