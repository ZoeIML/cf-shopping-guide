const express = require('express')

const router = express.Router()

module.exports = router

// Function files:
// to be added HERE

// Home route: 
router.get('/', (req, res) => {
    res.render('index')
})

//Lists route
router.get('/lists', (req, res) => {
    res.render('lists')
})

//City list route
router.get('/lists/:id', (req, res) => {
    res.render('citylist')
})