const express = require('express')

const router = express.Router()

module.exports = router

// Function files:
const cl = require('../functions/citylist')

// Home route: 
router.get('/', (req, res) => {
    res.render('index')
})

// List the cities route
// router.get('/lists', (req, res) => {
//     cl.listCities()
//         .then(results => {
//             console.log(results)
//             return res.render('lists', {city: results})
//         })
//         .catch(err => {
//             res.status(500).send('Database Error: ' + err.message)
//           })
//         })

// list shops in city route
router.get('/lists/:id', (req, res) => {
    const id = req.params.id
    cl.listShops(id) 
        .then (shopList => {
            console.log(shopList)
            const shops = {
                shops: shopList.map((s) => {
                    return {
                        productName: s.productName,
                    productType: s.productType,
                    productBrand: s.productBrand,
                    shopName: s.shopName,
                    shopURL: s.shopURL,
                    shopAdd: s.shopAdd
                    }
                })
            }
            return res.render('citylist', shops)
        })
        .catch(err => {
                    res.status(500).send('Database Error: ' + err.message)
                  })
        })