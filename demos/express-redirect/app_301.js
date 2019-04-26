let express = require('express'),
app = express();

app.get('/old/path/to-a-file.html', (req, res) => {
    res.redirect(301, '/new/path/to-a-file.html');
});

app.listen(8080);
