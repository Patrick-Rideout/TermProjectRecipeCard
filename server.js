const express = require('express');
const articleRouter = require('./routes/recipes')
const app = express();

app.set('view engine', 'ejs');

app.use('/recipes', articleRouter);

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
    res.render('index', { recipes : recipes});
})

app.listen(4000);