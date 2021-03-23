// just a way to serve the html folder
let express = require('express'),
serveIndex = require('serve-index'),
path = require('path'),
app = express(),
PORT = process.env.PORT || process.argv[2] || 8080,
PUBLIC_HTML = path.resolve(__dirname, 'public');

// use serve index to nav public folder
app.use('/', serveIndex( path.resolve(PUBLIC_HTML) ));

// use express static to serve public folder assets
app.use('/', express.static( path.join(PUBLIC_HTML) ));

// listen on PORT
app.listen(PORT, function () {
    console.log('static server up');
    console.log('serving PUBLIC HTML folder at: ' + PUBLIC_HTML);
    console.log('on port: ' + PORT);
});