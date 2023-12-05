const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/recipes')
const app = express();

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    const recipes = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    }, {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }];
    res.render('recipes/index', { recipes : recipes});
})

app.use('/recipes', articleRouter);

app.listen(4000);