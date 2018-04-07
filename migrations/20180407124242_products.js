exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.text('name')
        table.string('type')
        table.string('brand')
        table.integer('price')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products')
}
