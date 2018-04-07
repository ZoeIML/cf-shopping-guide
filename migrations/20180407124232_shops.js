
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shops', table => {
        table.increments('id').primary()
        table.string('name').unique()
        table.string('website')
        table.text('address')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shops')
}
