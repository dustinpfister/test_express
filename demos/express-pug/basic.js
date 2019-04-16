// get express and create an
// express app object
let express = require('express'),
app = express();

// set pug as the view engine
app.set('view engine', 'pug');

// use the render method to render
// a pug template
app.get('/', (req, res) => {
    res.render('index');
});

// use listen or createServer to
// listen on a port
app.listen(8080);
