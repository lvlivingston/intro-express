// load express
const express = require('express');
const path = require('path');

// require the to do "database"
const todoDb = require('./data/todo-db');

// create our express application
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware (app.use)


// mount routes


// define a "root" route directly on app
// next lesson, we'll use better practice routing
app.get('/', function (req, res) {
    // res.send('<h1>Hello Express</h1>');
    // path must start with a leading slash
    res.redirect('/todos');
});

// defines another route that matches a request of GET /home
app.get('/home', function (req, res) {
    // res.send('<h1>Home Page</h1>');
    // never begin the name of the template with a forward slash (/)
    res.render('home');
});

app.get('/todos', function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});