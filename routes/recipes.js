const express = require('express');
const Recipe = require('./../models/recipe');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('recipes/new', { recipe: new Recipe() });
});

router.get('/:slug', async (req, res) => {
    const recipe = await Recipe.findOne({slug: req.params.slug})
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
        res.redirect(`/recipes/${recipe.slug}`)
    } catch(e) {
        res.render('recipes/new', {recipe: recipe})
    }
})

router.delete('/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id)
    res.redirect('/')
})
  

module.exports = router;