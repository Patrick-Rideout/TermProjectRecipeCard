const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/recipe')
const articleRouter = require('./routes/recipes')
const methodOverride = require('method-override')
const app = express();
 
mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const recipes = await Article.find().sort({ title: 'asc'})
    res.render('recipes/index', { recipes : recipes});
})

app.use('/recipes', articleRouter);

app.listen(4000);