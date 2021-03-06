let express = require('express'),
path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
readdir = promisify(fs.readdir),
readFile = promisify(fs.readFile),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );

app.get('/', (req, res) => {
    readdir(path.resolve(__dirname, 'examples'))
    .then((folders) => {
        let html = '';
        folders.forEach((folderName)=>{
            html += '<a href=\"/examples/' + folderName + '\">' + folderName + '</a><br>';
        });
        res.send(html);
    })
    .catch((e) => {
        res.send(e.message);
    });
});

// a single path for /
app.get('/examples/:exampleName', (req, res) => {
    readFile(path.resolve(__dirname, 'examples', req.params.exampleName, 'outline.txt'))
    .then((text)=>{
        res.send('<pre>' + text + '</pre>');
    })
    .catch((e)=>{
        res.send(e.message);
    });
});

// listen on the port app setting
app.listen(app.get('port'), () => {
    console.log('app is up on port: ' + app.get('port') );
});
