let express = require('express'),
app = express();
// using res.set to set the Content-Type header
// for a javaScript resource
app.get('/js/foo.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.send('var foo = document.createElement(\'p\');foo.innerHTML=\'foo\';document.body.appendChild(foo);');
});
// using res.set to set more than one response header
// at once
app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store'
    });
    res.send('<body><script src=\"\/js\/foo.js\"><\/script><\/body>');
});
app.listen(8080);
