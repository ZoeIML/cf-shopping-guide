const express = require('express')

const db = require('../db/db.js')

const router = express.Router()

module.exports = router

router.get('/:city/products', (req, res) => {
  db.getProducts()
    .then(product => {
      res.json({product})
    })
})

router.get('/:city/shops', (req, res) => {
  db.getShops()
    .then(shop => {
      res.json({shop})
    })
})
