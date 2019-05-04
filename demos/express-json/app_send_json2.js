let express = require('express'),
app = express();
app.set('port', process.env.PORT || process.argv[2] || 8080);
// path for root
app.get('/', (req, res) => {
    // json can also be sent this way, but it is a bit more involved
    try {
        let json = JSON.stringify({
                foo: 'bar'
            });
        res.set('Content-Type', 'application/json ');
        res.send(json);
    } catch (e) {
        res.status(400).send(e.message);
    }

});
// listen
app.listen(app.get('port'), () => console.log('app up on port: ' + app.get('port')));
