
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shops', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('website')
        table.text('address')
        table.string('city')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shops')
}
