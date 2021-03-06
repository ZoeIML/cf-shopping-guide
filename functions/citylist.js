const environment = 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)
const conn = connection

module.exports = {
   listCities
}

function listCities () {
    return conn('shops')
    .join('shops_products_junction', 'shops.id', '=', 'shops_products_junction.shop_id')
    .join('products', 'products.id', '=', 'shops_products_junction.product_id')
    .select('shops.city as cityName')
}