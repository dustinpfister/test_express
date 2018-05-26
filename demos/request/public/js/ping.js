console.log('I am ping');

var g = function (id) {

    return document.getElementById(id);

};

g('app_ping').addEventListener('click', function (e) {

    console.log(e);

    axios.post('/req', {
        action: 'foo'
    }).then(function (res) {

        console.log('good');
        console.log(res.data);

		g('app_out').value += '**********\n'
        g('app_out').value += JSON.stringify(res) + '\n\n';
        g('app_out').value += res.data + '\n\n';

    }).catch (function (e) {

        console.log('bad');

    });

});
