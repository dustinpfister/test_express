let express = require('express'),
path = require('path'),
app = express();

app.set('dir', process.cwd());
app.set('fn', 'newfile.txt');

app.set('port', process.argv[2] || process.env.PORT || 8080);
app.set('dir_mw', path.resolve('./middleware'));
app.set('encode', 'utf8');

// hosting static assets for the client system
app.use('/js', express.static('public/js'));
app.use('/', express.static('public/html'));

// body parser
app.use(require('body-parser').json());

// singe middleware that responds to post requests
app.post('/data',

    [

        require(path.join(app.get('dir_mw'), 'check_body.js')),

        // actions
        require(path.join(app.get('dir_mw'), 'action_open.js')),
        require(path.join(app.get('dir_mw'), 'action_save.js')),
        require(path.join(app.get('dir_mw'), 'action_list.js')),

        // unknown action
        (req, res, next) => {
            res.reply.mess = 'The action given is not known';
            res.status(400).json(res.reply);
        }

    ]);

app.listen(app.get('port'), () => console.log('example text editor is up on port: ' + app.get('port')));
