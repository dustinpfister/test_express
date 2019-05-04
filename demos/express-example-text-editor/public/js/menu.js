// Module to help work with the
// back end system for the editor
var Menu = (function () {

    var api = {};
    api.noop = function () {};
    api.done = function (text) {
        console.log(text)
    };
    api.error = function (eMess) {
        get('text_mess').innerHTML = eMess;
    }

    // Open the file that is at the current
    // dir and fn app settings
    api.Open = function (opt) {
        // if null for dir or fn the default will
        // be whatever is set server side
        opt = opt || {};
        get('text_mess').innerHTML = '';
        get({
            payload: {
                action: 'open',
                dir: opt.dir || null,
                fn: opt.fn || null
            },
            onDone: function (text, resObj) {
                get('text_edit').value = text;
                //console.log(resObj);
                get('text_fn').value = resObj.fn;
            },
            onError: api.error
        });
    };

    api.Save = function (opt) {

        opt = opt || {};
        get('text_mess').innerHTML = '';
        get({
            payload: {
                action: 'save',
                dir: opt.dir || null,
                fn: opt.fn || null,
                data: get('text_edit').value
            },
            onDone: function (text, resObj) {
                get('text_edit').value = text;
                //console.log(resObj);
                //get('text_fn').value = resObj.fn;
            },
            onError: api.error
        });

    };

    return api;

}
    ());
