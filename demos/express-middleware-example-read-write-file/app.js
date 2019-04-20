let express = require('express'),
app = express();

app.use('/', express.static('public'));

app.use('/file', require('./middleware/file.js'))


app.listen(8080);