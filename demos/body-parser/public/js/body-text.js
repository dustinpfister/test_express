
// just wrapping document.getElementById
var g = function (id) {

    return document.getElementById(id);

};

g('app_send').addEventListener('click', function (e) {

    http({
        url: '/text',
        method: 'POST',
        payload: 'foo',
        beforeSend: function (xhr, next) {

            xhr.setRequestHeader('Content-type', 'text/plain');
            next();

        }
    }, function (res) {

        g('app_out').value += res + '\n\n';

    });

});
