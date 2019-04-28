let express = require('express'),
app = express();

// sending a string will work
// but res.send should be used
app.get('/str', (req, res) => {
    res.end('foo'); // foo
});

// sending a Buffer will work
// but res.send should be used
app.get('/buf', (req, res) => {
    res.end(new Buffer('bar')); // bar
});

// sending an object will result in an error
// use res.json
app.get('/obj', (req, res) => {
    let obj = {
        mess: 'okay'
    };
    try {
        res.end(obj);
    } catch (e) {
        obj.mess = e.message;
        res.json(obj); // {"mess":"First argument must be a string or Buffer"}
    }
});

// res.send, res.json, or res.redner should
// be used when sending some kind of data
app.get('/', (req, res) => {
    res.send('<ul>' +
        '<li><a href=\"/str\">str<\/a><\/li>' +
        '<li><a href=\"/buf\">buf<\/a><\/li>' +
        '<li><a href=\"/obj\">obj<\/a><\/li>' +
        '<\/ul>');
});

app.get('*', (req, res) => {
    res.status(404).send('File Not Found');
});

app.listen(8080);
