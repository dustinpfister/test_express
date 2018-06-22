let express = require('express'),

// the main app instance
app = express();
app.set('id','main');
app.set('port',8080);

app.use(require('./otherapp.js'));

app.listen(app.get('port'), function () {

    console.log('express demo is up on port: ' + app.get('port'));

});
