let express = require('express'),
path = require('path'),
fs = require('fs'),

app = module.exports = express();

app.set('file-path', path.join(__dirname, 'file.txt'));
app.set('mess', '');

app.delete ('/file', function (req, res, next) {

    console.log('oh look a delete request');

    res.send('umm');

});
