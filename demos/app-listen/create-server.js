let express = require('express'),
app = express();

app.get('/', function (req, res) {
    res.send('foo');
});

// the node.js native http module can be used
// in place of app.listen
let http = require('http');
http.createServer(app).listen(8080, () => {
    console.log('server up')
});;
