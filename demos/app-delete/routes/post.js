let express = require('express'),

app = module.exports = express();

app.use(require('body-parser').json());

app.post('/post', function (req, res) {

    console.log(req.body);

    res.json({

        foo: 'bar',
        body: req.body

    });

});
