const express = require('express')

const router = express.Router()

module.exports = router

// Function files:
const sl = require('../functions/shoplist')
const cl = require('../functions/citylist')

// Home route: 
router.get('/', (req, res) => {
    res.render('index')
})

// List the cities route
router.get('/lists', (req, res) => {
    cl.listCities()
        .then (cityList => {
            console.log(cityList)
            const cities = {
                cities: cityList.map((c) => {
                    return {
                        cityID: c.cityID,
                        cityName: c.cityName
                    }
                })
            }
            res.render('citylist', cities)
        })
        .catch(err => {
            res.status(500).send('Database Error: ' + err.message)
          })
    })
        
        

// list shops in city route:

router.get('/lists/:id', (req, res) => {
    const id = req.params.id
    sl.listShops(id) 
        .then (shopList => {
            // console.log(shopList)
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
            return res.render('shoplist', shops)
        })
        .catch(err => {
                    res.status(500).send('Database Error: ' + err.message)
                  })
        })