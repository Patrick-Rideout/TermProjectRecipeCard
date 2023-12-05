const express = require('express');
const Recipe = require('./../models/recipe');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('recipes/new', { recipe: new Recipe() });
});

router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if (recipe == null) res.redirect('/')
    res.render('recipes/show', {recipe: recipe})
})

router.post('/', async (req, res) => {
    let recipe = new Recipe({
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