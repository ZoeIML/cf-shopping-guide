
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops_products_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops_products_junction').insert([
        {id: 1, city: 'Auckland', city_id: 1, product_id: 1, shop_id: 2},
        {id: 2, city: 'Auckland', city_id: 1, product_id: 2, shop_id: 2},
        {id: 3, city: 'Auckland', city_id: 1, product_id: 3, shop_id: 2},
        {id: 4, city: 'Auckland', city_id: 1, product_id: 1, shop_id: 3},
        {id: 5, city: 'Auckland', city_id: 1, product_id: 1, shop_id: 1},
        {id: 6, city: 'Auckland', city_id: 1, product_id: 3, shop_id: 3},
        {id: 7, city: 'Wellington', city_id: 2,product_id: 4, shop_id: 4}
      ])
    })
}
