const express = require('express');
const Recipe = require('./../models/recipe');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('recipes/new', { recipe: new Recipe() });
});

router.get('/edit/:id', async (req, res) => {
    const recipe =  await Recipe.findById(req.params.id)
    res.render('recipes/edit', { recipe: recipe });
});


router.get('/:slug', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({slug: req.params.slug})
        if (recipe == null) res.redirect('/')
        res.render('recipes/show', {recipe: recipe})
    } catch(e) {
        console.log(e)
    }
})

router.post('/', async (req, res, next) => {
    req.recipe = new Recipe()
    next()
}, saveRecipeAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
    req.recipe = await Recipe.findById(req.params.id)
    next()
}, saveRecipeAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveRecipeAndRedirect(path) {
    return async (req, res) => {
      let recipe = req.recipe
      recipe.title = req.body.title
      recipe.difficulty = req.body.difficulty
      recipe.category = req.body.category
      recipe.description = req.body.description
      recipe.ingredients = req.body.ingredients
      recipe.instructions = req.body.instructions
      try {
        recipe = await recipe.save()
        res.redirect(`/recipes/${recipe.slug}`)
      } catch (e) {
        res.render(`recipes/${path}`, { recipe: recipe })
      }
    }
  }
  
  

module.exports = router;