let express = require('express'),
app = express();
app.set('port', process.env.PORT || process.argv[2] || 8080);

// send basic client system that sends json
// to the server with XMLHttpRequest
app.get('/', (req, res) => {
    res.send(
        '<script>\n' +
        'var xhr = new XMLHttpRequest();\n' +
        'xhr.open(\'POST\', \'\/\', true);\n' +
        'xhr.onreadystatechange = function () {\n' +
        '  if (this.readyState === 4) {\n' +
        '    document.body.innerHTML += \'<span>\' + this.response + \'<\/span>\';\n' +
        '  }\n' +
        '};\n' +
        'xhr.setRequestHeader(\'Content-type\', \'application\/json\');\n' +
        'xhr.send(JSON.stringify({x: 40}));\n' +
        '<\/script>');
});

// body parser can be used to parse the incoming json into 
// a workable object via req.body
app.use(require('body-parser').json());
app.post('/', (req, res) => {
    let obj = {
        x: req.body.x,
        y: 2
    };
    obj.n = obj.x + obj.y;
    res.json(obj);
});

// listen
app.listen(app.get('port'), () => console.log('app up on port: ' + app.get('port')));
