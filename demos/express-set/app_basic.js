let express = require('express'),
app = express();

// set  value for port
app.set('port', process.env.PORT || process.argv[2] || 8080);

// define one or more paths
app.get('/', (req, res) => res.send('foo'));

// listen on port
app.listen(app.get('port'), ()=> console.log('app up on port: ' + app.get('port')));