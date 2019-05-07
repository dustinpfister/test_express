let express = require('express'),
path = require('path'),
fs = require('fs'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

app.set('dir', path.join(process.cwd(), '_posts'));
app.set('fn', 'first-post.md');
app.set('encode', 'utf8');

// hosting static assets for the client system
app.use('/js', express.static('public/js'));
app.use('/', express.static('public/html'));

// html of current md file
app.use('/html', require('./middleware/post_gethtml.js'));

// body parser
app.use(require('body-parser').json());

// actions
app.post('/action',
    [
        // check body
        require('./middleware/body_check.js'),
        // preform action
        require('./middleware/action.js'),
        // something went wrong
        (req, res, next) => {
            res.reply.mess = 'YIKES something went wrong';
            res.status(400).json(res.reply);
        }
    ]);

app.listen(app.get('port'), () => console.log('example markdown editor is up on port: ' + app.get('port')));
