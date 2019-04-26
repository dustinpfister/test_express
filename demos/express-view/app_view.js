let express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        mess_title: 'Express View Example',
        mess_greet: 'This is ejs in action.'
    });
});

app.listen(8080);
