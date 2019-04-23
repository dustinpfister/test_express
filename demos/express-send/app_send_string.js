let express = require('express'),
app = express();
app.get('/', (req, res) => res.send('foo'));
app.listen(8080);