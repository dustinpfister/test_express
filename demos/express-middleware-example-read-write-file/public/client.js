var getIt = function (obj, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/file', true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            cb.call(this, this.response, xhr);
        }
    };
    xhr.send();

};

var postIt = function (obj, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/file', true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            cb.call(this, this.response, xhr);
        }
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(obj));

};
