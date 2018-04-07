
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then( () => {
      // Inserts seed entries
      return knex('shops').insert([
        {id: 1, name: 'Lush', website: 'https://nz.lush.com/', address: '123 Test Street'},
        {id: 2, name: 'Farmers', website: 'https://www.farmers.co.nz', address: '456 Test Street'},
        {id: 3, name: 'Another Shop', website: 'www.test.com', address: '789 Test Street'},
        {id: 4, name: 'Gisborne CF Shop', website: 'www.Gisborne-test.com', address: '789 Test Street'}
      ])
    })
}
