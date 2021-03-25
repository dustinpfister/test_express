let express = require('express'),
session = require('express-session'),
path = require('path'),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );
app.set('public_html', path.resolve( __dirname, 'public') );
 
// view engine setup
app.set('view engine', 'ejs'); // the render engine
app.set('views', path.resolve( __dirname, 'views') ); // the views folder for the *.ejs files

// use express session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    name: '_network_pointer_id',
    secret: '1234',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 30 * 1000 }
}))

// one main middleware for / using express.static and res.render
app.use('/', express.static( app.get('public_html') ));

app.get('/', (req, res, next) => {
    console.log(req.sessionID);
    if(req.url === '/'){
        res.render('index', {layout: 'home' });
    }else{
        next();
    } 
})

app.post('/', (req, res) => {
   res.json({
       sessionID: req.sessionID
   });
});

app.get('*', function(req, res){
    res.render('index', {layout: '404' });
});

// listen on the port app setting
app.listen(app.get('port'), function () {
    console.log('app is up on port: ' + app.get('port'));
});
