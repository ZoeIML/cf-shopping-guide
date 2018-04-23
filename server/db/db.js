const knex = require('knex')
const config = require('../knexfile').development
const conn = knex(config)

module.exports = {
    listShops,
    listProducts
}

function listShops (city) {
    return conn('shops')
     .join('shops_products_junction', 'shops.id', "=", 'shops_products_junction.shop_id')
     .where('shops.city', "=", city)
     .select('shops.name as shopName', 
             'shops.address as shopAdd', 
             'shops.website as shopURL'
            )
 }

 function listProducts () {
     return conn('products')
     .join('shops_products_junction', 'products.id', "=", 'shops_products_junction.product_id')
     .where('products.id', '=', 'shops_products_junction.product_id')
     .select('products.name as productName', 
             'products.type as productType', 
             'products.brand as productBrand'
            )
 }