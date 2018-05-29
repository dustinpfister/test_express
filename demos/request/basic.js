let express = require('express'),
util = require('util'),
port = 8080,
app = express();

app.get('/', function (req, res) {

   // util.inspect returns a string representation of
   // the request object with circular
   // references replaced by [Circular]
   let str = util.inspect(req);

   // send that string
    res.send(str);

});

app.listen(port, function () {

    console.log('basic example up on port: ' + port);

});
