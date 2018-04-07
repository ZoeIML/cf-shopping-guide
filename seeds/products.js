
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Awesome Cleanser', type: 'Skincare', brand: 'Sukin', price: '11.50'},
        {id: 2, name: 'Nice Moisturiser', type: 'Skincare', brand: 'Essano', price: '12.50'},
        {id: 3, name: 'Pretty Eyeliner', type: 'Cosmetics', brand: 'Tarte', price: '13.50'},
        {id: 4, name: 'Lovely Mascara', type: 'Cosmetics', brand: 'Tarte', price: '13.50'}
      ])
    })
}