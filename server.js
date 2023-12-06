const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe')
const recipeRouter = require('./routes/recipes')
const methodOverride = require('method-override')
const app = express();
 
mongoose.connect('mongodb+srv://RecipeCardAdmin:123CNA123@recipecardcluster.qigg8sx.mongodb.net/')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const recipes = await Recipe.find().sort({ title: 'asc'})
    res.render('recipes/index', { recipes : recipes});
})

app.use('/recipes', recipeRouter);

app.listen(4000);