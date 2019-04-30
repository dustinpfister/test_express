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
                try {

                    var reply = JSON.parse(this.response);

                    if (this.status === 200) {
                        done.call(this, null, reply, xhr);
                    } else {
                        done.call(this, new Error('status code: ' + this.status + ' mess: ' + reply.mess), reply, xhr);
                    }

                } catch (e) {

                    done.call(this, new Error('Error parsing JSON'), reply, xhr);

                }
            }
        };
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(idu));
    }
};

// get
get({
    action: 'open',
    mess: 'foo'
}, function (err, res) {

    if (err) {

        get('text_edit').value = err;

    } else {

        get('text_edit').value = res.data;

    }
});
