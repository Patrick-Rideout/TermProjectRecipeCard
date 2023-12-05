const express = require('express');
const Recipe = require('./../models/recipe');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('recipes/new', { recipe: new Recipe() });
});

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try {
        recipe = await recipe.save()
        res.redirect(`/recipes/${recipe.id}`)
    } catch(e) {
        res.render('recipes/new', {recipe: recipe})
    }
})

module.exports = router;