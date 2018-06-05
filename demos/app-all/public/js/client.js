axios({

    method: 'GET',
    url: '/'

}).then(function (res) {

    console.log(res)

});


axios({

    method: 'GET',
    url: '/not/a/path'

}).then(function (res) {

    console.log(res)

});

