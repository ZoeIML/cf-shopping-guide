const express = require('express')

const db = require('../db/db.js')

const router = express.Router()

module.exports = router

router.get('/:city/products', (req, res) => {
  // CHECK FIRST: const city = req.pararms.city
  db.getProducts()
    .then(product => {
      res.json({product})
    })
})

router.get('/:city/shops', (req, res) => {
  const city = req.pararms.city
  db.listShops(city)
    .then(shop => {
      res.json({shop})
    })
})
