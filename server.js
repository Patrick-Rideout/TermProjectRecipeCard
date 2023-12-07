const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe')
const recipeRouter = require('./routes/recipes')
const methodOverride = require('method-override');
const { appendFile } = require('fs/promises');
const app = express();
 
mongoose.connect('mongodb+srv://RecipeCardAdmin:123CNA123@recipecardcluster.qigg8sx.mongodb.net/')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const recipes = await Recipe.find().sort({ title: 'asc'})
    res.render('recipes/index', { recipes : recipes});
})

app.get('/search', async (req, res) => {
    const { difficulty, category } = req.query;
    console.log(difficulty);
    console.log(category);

    let query = {};
    if (difficulty !== 'Any' && category !== 'Any') {
        query = req.query
    }
    else {
        if (difficulty !== 'Any') {
            query.difficulty = difficulty;

        }
        if (category !== 'Any') {
            query.category = category;
        }
    }
    console.log(query);

    const recipes = await Recipe.find(query).sort({ title: 'asc' });
    res.render('recipes/index', { recipes : recipes});
});


app.use('/recipes', recipeRouter);

app.listen(4000);