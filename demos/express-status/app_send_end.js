let express = require('express'),
app = express();

// the sendStatus method can be used to just
// send a status with no data
app.get('/send1', (req, res) => {
    res.sendStatus(404);
});

// the status method with the end method
// can also be used
app.get('/send2', (req, res) => {
    res.status(404).end();
});

// the status and send method with no
// argument also seems to work okay
app.get('*', (req, res) => {
    res.status(404).send();
});

app.listen(8080);
