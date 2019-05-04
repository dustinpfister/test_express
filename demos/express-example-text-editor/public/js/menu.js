// Module to help work with the
// back end system for the editor
var Menu = (function () {

    var api = {};
    api.noop = function () {};
    api.done = function (text) {
        console.log(text)
    };
    api.error = function (e) {
        console.log(e.message)
    };

    // Open the file that is at the current
    // dir and fn app settings
    api.Open = function (opt) {

        // if null for dir or fn the default will
        // be whatever is set server side
        opt = opt || {};
        get({
            payload: {
                action: 'open',
                dir: opt.dir || null,
                fn: opt.fn || null

            }
            //action: 'open',
            //dir: opt.dir || null,
            //fn: opt.fn || null,
            //onDone: opt.onDone || api.done,
            //onError: opt.onError || api.error
        });

    }

    return api;

}
    ());
