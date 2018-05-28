getId('app_send').addEventListener('click', function (e) {

    http({
        url: '/text',
        method: 'POST',
        payload: 'foo',
        beforeSend: function (xhr, next) {

            xhr.setRequestHeader('Content-type', 'text/plain');
            next();

        }
    }, function (res) {

        getId('app_out').value += res + '\n\n';

    });

});
