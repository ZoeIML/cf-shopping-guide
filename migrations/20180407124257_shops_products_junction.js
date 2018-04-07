
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shops_products_junction', table => {
        table.increments('id').primary()
        table.string('city')
        table.integer('product_id').references('products.id')
        table.integer('shop_id').references('shops.id')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shops_products_junction')
}
