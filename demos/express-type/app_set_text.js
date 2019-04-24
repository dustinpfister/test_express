let express = require('express'),
app = express();

app.get('/', (req, res) => {
    res.set('Content-Type','text/plain');
    console.log(res.get('Content-Type')); // 'text/plain; charset=utf-8'
    res.send('<h1>This should just be plain text so the tags should show in the browser</h1>')

});

app.listen(8080);
