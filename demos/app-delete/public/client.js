
var get = function (id) {

    return document.getElementById(id);

};

// send a post request
var sendPost = function (e) {

    var xhr = new XMLHttpRequest();

    xhr.open('post', '/post');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {

        if (this.readyState === 4) {

            console.log(this.response);

        }

    };

    //xhr.send(JSON.stringify({mess: 'i am the egg man.'}));
    xhr.send(null);

};

// attach
get('post').addEventListener('click', sendPost);
