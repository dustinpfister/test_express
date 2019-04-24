let express = require('express'),
app = express();

let n = 0;
app.get('/', (req, res) => {
    res.set({
        'Content-Type': n === 0 ? 'text/plain' : 'text/html',
        'Cache-Control': 'no-store'
    });
    console.log(res.get('Content-Type'));
    res.send('<h1>just some html</h1>');
    n += 1;
    n %= 2;

});

app.listen(8080);
