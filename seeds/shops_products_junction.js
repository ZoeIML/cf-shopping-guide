
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops_products_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops_products_junction').insert([
        {id: 1, product_id: 1, shop_id: 2},
        {id: 2, product_id: 2, shop_id: 2},
        {id: 3, product_id: 3, shop_id: 2},
        {id: 4, product_id: 1, shop_id: 3},
        {id: 5, product_id: 1, shop_id: 1},
        {id: 6, product_id: 3, shop_id: 3},
        {id: 7, product_id: 4, shop_id: 4}
      ])
    })
}
