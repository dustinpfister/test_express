// request for a path that is not there
axios({

    method: 'GET',
    url: '/not/a/path'

}).then(function (res) {

    console.log(res);

});

// HEAD method request for index.html
axios({

    method: 'HEAD',
    url: '/index.js'

}).then(function (res) {

    console.log(res.headers);

});