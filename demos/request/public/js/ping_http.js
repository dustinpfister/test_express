
// just wrapping document.getElementById
var g = function (id) {

    return document.getElementById(id);

};

g('app_body_send').addEventListener('click', function (e) {

    http({
        url: '/body',
        method: 'POST',
        payload: 'foo',
        beforeSend: function (xhr, next) {

            xhr.setRequestHeader('Content-type', 'text/plain');
            next();

        },
        send: function (xhr, argu) {

            console.log('okay sending now.');
            xhr.send(argu.payload);
        }
    }, function (res) {

	    //console.log(res);
	
        g('app_out').value += '**********\n'
        g('app_out').value += res + '\n\n';

    });

});

/*
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
*/
