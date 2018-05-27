
var g = function (id) {

    return document.getElementById(id);

};

g('app_body_send').addEventListener('click', function (e) {

    axios.post('/body', {
        action: g('app_body_text').value
    }).then(function (res) {


        g('app_out').value += '**********\n'
        g('app_out').value += JSON.stringify(res) + '\n\n';
        g('app_out').value += JSON.stringify(res.data) + '\n\n';

    }).catch (function (e) {

        console.log('bad');

    });

});
