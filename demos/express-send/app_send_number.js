let express = require('express'),
app = express();
// a number is seen as a status code, so it needs to be
// converted to a string
app.get('/', (req, res) => res.send(42 + ''));

// even if you want to set the status to say 404, you do not want to
// just do it with res.send alone as this is deprecated.
// use res.status, or res.sendStatus
app.get('*', (req, res) => res.status(404).send('file not found'));

app.listen(8080);
