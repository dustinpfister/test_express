var get = function (idu, done) {
    // if one argument get is a wrapper for document.getElementById
    if (arguments.length === 1) {
        return document.getElementById(idu);
    } else {
        // if two arguments get is used to make post requests
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/data', true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    done.call(this, null, this.response, xhr);
                } else {
                    done.call(this, new Error('statusCode: ' + this.status), this.response, xhr);
                }
            }
        };
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(idu));
    }
};

// get
get({action:'foo',mess:'foo'}, function (err, res) {
    get('text_edit').value = res;
});
