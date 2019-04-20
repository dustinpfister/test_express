let express = require('express'),
app = express();

app.get('/', (req, res) => res.json('foo'));

app.listen(8080);
