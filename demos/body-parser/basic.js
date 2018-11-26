let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

app.use(require('body-parser').json());

app.get('/', function (req, res) {

    res.send('<script>var xhr = new XMLHttpRequest();xhr.open(\'POST\', \'/\', true);xhr.onreadystatechange = function(){console.log(this)};xhr.setRequestHeader(\'Content-type\', \'application/json\');xhr.send(JSON.stringify({foo:\'bar\'}));</script>');

});

app.post('/', function (req, res) {

    console.log(req.body); // {foo:'bar'}

    res.send('foo');

})

app.listen(port, function () {

    console.log('request object demo is up on port: ' + port);

});
