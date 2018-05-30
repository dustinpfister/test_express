let express = require('express'),
low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
adapter = new FileSync('db.json'),
db = low(adapter);

router = module.exports = express.Router();

router.post('/', function (req, res) {

    res.json({

        mess: 'hello there'

    });

});
