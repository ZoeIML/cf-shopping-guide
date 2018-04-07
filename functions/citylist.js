
const environment = 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)
const conn = connection

module.exports = {
    // listCities,
    listShops
}

// function listCities () {
//     return conn('shops')
//     .join('shops_products_junction', 'shops.id', "=", 'shops_products_junction.shop_id')
//     .join('products', 'products.id', "=", 'shops_products_junction.product_id')
//     .select('shops_products_junction.city')
//     .where()
// }

// Have hard coded city in, needs debugging - city not working in .where()
function listShops (city) {
   return conn('shops')
    .join('shops_products_junction', 'shops.id', "=", 'shops_products_junction.shop_id')
    .join('products', 'products.id', "=", 'shops_products_junction.product_id')
    .where('shops_products_junction.city', 'Auckland')
    .select('shops.name as shopName', 
            'products.name as productName', 
            'products.type as productType', 
            'products.brand as productBrand', 
            'shops.address as shopAdd', 
            'shops.website as shopURL')
}
