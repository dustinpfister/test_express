let express = require('express'),
path = require('path'),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );
app.set('public_html', path.resolve( __dirname, 'public') );
 
// view engine setup
app.set('view engine', 'ejs'); // the render engine
app.set('views', path.resolve( __dirname, 'views') ); // the views folder for the *.ejs files

// one main middleware for / using express.static and res.render
app.use('/', [
 
    // use express.static first to look for a static resource
    express.static( app.get('public_html') ),
 
    // if not found render main index, but only for / else next
    function (req, res, next) {
        if(req.url === '/'){
            res.render('index', {layout: 'home' });
        }else{
            next();
        } 
    }
]);

app.get('*', function(req, res){
    res.render('index', {layout: '404' });
});

// listen on the port app setting
app.listen(app.get('port'), function () {
    console.log('app is up on port: ' + app.get('port'));
});
