
// just wrapping document.getElementById
var g = function (id) {

    return document.getElementById(id);

};

g('app_body_send').addEventListener('click', function (e) {

    http({
        url: '/body',
        method: 'POST',
        payload: {

            action: 'foo'

        }
    }, function (res) {

        g('app_out').value += '**********\n'
        g('app_out').value += res + '\n\n';

    },

        function (res) {});

});
