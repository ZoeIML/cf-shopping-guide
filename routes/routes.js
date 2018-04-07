const express = require('express')

const router = express.Router()

module.exports = router

// Function files:
// to be added HERE

// Home route: 
router.get('/', (req, res) => {
    res.render('index')
})