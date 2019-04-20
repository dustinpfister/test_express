var getIt = function (cb) {
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

var el_text = document.getElementById('text'),
el_button_save = document.getElementById('button_save');

getIt(function (res) {
    el_text.value = res;
});

el_button_save.addEventListener('click', function () {

    postIt({
        text: text.value
    }, function (res) {
        console.log(res);
    });

});
