let express = require('express'),
app = express();
app.set('port', process.env.PORT || process.argv[2] || 8080);

// path for root
app.get('/', (req, res) => {

    // The res.json response method can be used to
    // send json to a client
    res.json({
        foo: 'bar'
    });

});

// listen
app.listen(app.get('port'), () => console.log('app up on port: ' + app.get('port')));
