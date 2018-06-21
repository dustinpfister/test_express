
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

            try {

                var data = JSON.parse(this.response);
                get('text').value = data.text;

            } catch (e) {

                console.log(e.message);
                get('text').value = e.message;

            }

        }

    };

    xhr.send(null);

};

// send a delete request
var deleteFile = function (e) {

    var xhr = new XMLHttpRequest();

    xhr.open('delete', '/file');

    xhr.onreadystatechange = function () {

        if (this.readyState === 4) {

            console.log('status: ' + this.status);
            console.log(this.response);

            // confirm
            getFile();

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
            getFile();

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
get('delete').addEventListener('click', deleteFile);

// first get
getFile();
