let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// using the JSON body parser
app.use(require('body-parser').json());

// what to do for get requests to root
app.get('/', function (req, res) {

    // sending a crude yet effective client system
    res.send('<script>' +
        'var xhr = new XMLHttpRequest();' +
        'xhr.open(\'POST\', \'/\', true);' +
        'xhr.onreadystatechange = function(){console.log(this.response)};' +
        'xhr.setRequestHeader(\'Content-type\', \'application/json\');' +
        'xhr.send(JSON.stringify({foo:\'bar\',n:40}));</script>');

});

// what to do for post requests to root
app.post('/', function (req, res) {

    // body parser works, I have the object sent
    //from the client system
    console.log(req.body); // {foo:'bar',n:40}

    // I can do something with it and send a response
    req.body.n += 2;
    res.json(req.body);

})

app.listen(port, function () {
    console.log('body-parser demo is up on port: ' + port);
});
