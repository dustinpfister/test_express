let express = require('express'),
app = express();

// using the JSON body parser
app.use(require('body-parser').json());

// using basic.html to serve as the index of root at /
app.use('/', express.static('public', {
        index: 'basic.html'
    }));

// using app.post to define express post requests
app.post('/', (req, res) => {

    res.send(String(Math.pow(req.body.base, req.body.pow)));

});

app.listen(8080, () => {
    console.log('express post basic example up on port 8080');
});
