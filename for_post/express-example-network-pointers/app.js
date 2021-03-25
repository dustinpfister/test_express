let express = require('express'),
session = require('express-session'),
path = require('path'),
app = express();

// pointer max age in seconds
app.set('pointer_age', 30);
 
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
    cookie: {maxAge: app.get('pointer_age') * 1000 }
}));

// the collection of pointers
let pointers = {};

// create a new pointer
let createPointer = function(sessionID, name){
    return pointers[sessionID] = {
        x: 10 + Math.random() * 300,
        y: 10 + Math.random() * 220,
        name: name,
        made: new Date()
    };
};

// get a pointer for the given sessionID,
// or create and return a new one if not there
let getPointer = function(sessionID, name){
   if(pointers[sessionID]){
      return pointers[sessionID];
   }
   return createPointer(sessionID, name);
};

// purge old objects
let purgeOld = () => {
    let now = new Date();
    Object.keys(pointers).forEach((key) => {
        let pt = pointers[key],
        t = now - pt.made;
        if(t > app.get('pointer_age') * 1000){
            delete pointers[key];
        }
    });
};

// one main middleware for / using express.static and res.render
app.use('/', express.static( app.get('public_html') ));

// get request for / and only /
app.get('/', (req, res, next) => {
    if(req.url === '/'){
        res.render('index', {layout: 'home' });
    }else{
        next();
    } 
})

// post requests to /
app.use('/', express.json());
app.post('/', [
    // get pointer
    (req, res, next) => {
        // purge any old objects
        purgeOld();
        // get the pointer for the current session
        req.pointer = getPointer(req.sessionID, req.body.name);
        next();
    },
    // if info action
    (req, res, next) => {
        if(req.body.action === 'info'){
           res.json({
               action: 'info',
               pointer: req.pointer,
               sessionID: req.sessionID,
               pointers: pointers,
               body: req.body
           });
        }else{
            next();
        }
    },
    // action now known
    (req, res, next) => {
        // unkown action
        res.json({
               action: 'unkown'
        });
    }
]);

// 404
app.get('*', function(req, res){
    res.render('index', {layout: '404' });
});

// listen on the port app setting
app.listen(app.get('port'), function () {
    console.log('app is up on port: ' + app.get('port'));
});
