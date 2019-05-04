let express = require('express'),
app = express();

app.get('/', (req, res, next) => {

    throw new Error('My Custom Error');

});

app.use((err, req, res, next) => {

    res.send(err.message); // 'My Custom Error'

});

app.listen(8080);
