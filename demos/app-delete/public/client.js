
// warping document.getElementById
var get = function (id) {

    return document.getElementById(id);

};

// get the file
var getFile = function () {

    var xhr = new XMLHttpRequest();

    xhr.open('get', '/file');

    xhr.onreadystatechange = function () {

        if (this.readyState === 4) {

            console.log(this.response);

        }

    };

    xhr.send(null);

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
    //xhr.send(null);
    xhr.send(JSON.stringify({
            mess: get('text').value
        }));

};

// attach
get('post').addEventListener('click', sendPost);
