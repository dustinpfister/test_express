let express = require('express'),

otherApp = express();

otherApp.get('/', function (req, res) {

    res.send('yes this is app two. I have the setting : ' + otherApp.get('foo'));

});

module.exports = function (options) {

    options = options || {};
    otherApp.set('foo', options.foo || 'none');

    return otherApp;

};
