let express = require('express'),
path = require('path'),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );

app.get('/', (req, res) => {
   let exampleName = 'the_foo_project';
   res.send('<a href=\"/examples/' + exampleName + '\">' + exampleName + '</a>');
});

// a single path for /
app.get('/examples/:exampleName', (req, res) => {
    res.send('example Name: ' + req.params.exampleName);
});

// listen on the port app setting
app.listen(app.get('port'), () => {
    console.log('app is up on port: ' + app.get('port') );
});
