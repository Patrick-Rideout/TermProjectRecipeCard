const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render("recipes/new")
})

router.post('/', async (req, res) => {

})

module.exports = router;