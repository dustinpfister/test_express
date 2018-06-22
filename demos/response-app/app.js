let express = require('express'),
path = require('path'),
// the main app instance
app = express();
app.set('id','main');
app.set('port',8080);

// path and view engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(require('./otherapp.js'));

app.listen(app.get('port'), function () {

    console.log('express demo is up on port: ' + app.get('port'));

});
