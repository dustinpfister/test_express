let express = require('express'),
app = express();
// sending an object will result in sending json
app.get('/', (req, res) => res.send({
        a: req.headers['user-agent'],
        p: req.path,
        t: Date.now()
    }));

app.listen(8080);
