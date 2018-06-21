
document.getElementById('post').addEventListener('click', function (e) {

    var xhr = new XMLHttpRequest();

    xhr.open('post', '/post');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {

        console.log(this);

    };

    xhr.send(JSON.stringify({
            mess: 'i am the egg man.'
        }));

    console.log('okay');

});
