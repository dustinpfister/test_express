getId('app_send').addEventListener('click', function (e) {

    http({
        url: '/json',
        method: 'POST',
        payload: {

            action: 'foo'

        }
    }, function (res) {

        getId('app_out').value += res + '\n\n';

    });

});
