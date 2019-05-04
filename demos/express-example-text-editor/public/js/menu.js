// Module to help work with the
// back end system for the editor
var Menu = (function () {

    // set + clear messages
    var mess = (function () {
        var el_mess = get('text_mess'),
        el_eMess = get('text_emess');
        var func = function (mess) {
            el_mess.innerHTML = mess;
        };
        func.eMess = function (eMess) {
            el_eMess.innerHTML = eMess;
        };
        func.clear = function () {
            el_mess.innerHTML = '';
            el_eMess.innerHTML = '';
        };
        return func;
    }
        ());

    // public api
    var api = {};
    api.noop = function () {};
    api.done = function (text) {
        console.log(text)
    };
    api.error = function (eMess) {
        console.log(eMess);
        mess.eMess(eMess);
    }

    // Open the file that is at the current
    // dir and fn app settings
    api.Open = function (opt) {
        // if null for dir or fn the default will
        // be whatever is set server side
        opt = opt || {};
        mess.clear();
        get({
            payload: {
                action: 'open',
                dir: opt.dir || null,
                fn: opt.fn || null
            },
            onDone: function (text, resObj) {
                get('text_edit').value = text;
                get('text_fn').value = resObj.fn;
                mess(resObj.mess);
            },
            onError: api.error
        });
    };

    api.Save = function (opt) {

        opt = opt || {};
        mess.clear();
        get({
            payload: {
                action: 'save',
                dir: opt.dir || null,
                fn: opt.fn || null,
                data: get('text_edit').value
            },
            onDone: function (text, resObj) {
                get('text_edit').value = text;
                mess(resObj.mess);
            },
            onError: api.error
        });

    };

    api.List = function (opt) {

        opt = opt || {};
        mess.clear();
        get({
            payload: {
                action: 'list'
            },
            onDone: function (files, resObj) {
                //get('text_edit').value = text;
                //mess(files);
            },
            onError: api.error
        });

    };

    return api;

}
    ());
