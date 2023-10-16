// load express
const express = require('express');

// create our express application
const app = express();

// define a "root" route directly on app
// next lesson, we'll use better practice routing
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});