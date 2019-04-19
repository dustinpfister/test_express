let express = require('express'),
app = express();

app.use((req, res, next) => {
    console.log('***** I am middleware *****');
	console.log('a ' + req.method + ' request was made to ' + req.path);
    console.log('***************************');
    next();
});

app.get('/', (req, res) => res.send('foo'));
app.listen(8080, () => console.log('express middeware basics example up on port 8080'));
