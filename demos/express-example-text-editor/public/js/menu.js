// Module to help work with the
// back end system for the editor
var Menu = (function () {

    // set / clear messages
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

    // set the dir and fn input elements values to
    // what is in the given reply object
    var setInputs = function (reply) {
        get('text_dir').value = reply.dir;
        get('text_fn').value = reply.fn;
    };

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
                //get('text_fn').value = resObj.fn;
                mess(resObj.mess);
                setInputs(resObj);
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

    var emptyList = function () {
        var list = get('list_files').contentWindow.document.body;
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    };

    api.List = function (opt) {
        opt = opt || {};
        mess.clear();
        get({
            payload: {
                action: 'list',
                dir: opt.dir || null,
            },
            onDone: function (files, resObj) {

                emptyList();

                console.log('files:');

                var list = get('list_files');
                files.forEach(function (fStat) {
                    var item = document.createElement('div');
                    item.innerHTML = '<span style=\"' + (fStat.dir ? 'color:red;' : 'color:green;') + '\">' + fStat.fn + '<\/span>';
                    item.addEventListener('click', function (e) {
                        // open the file clicked
                        if (fStat.dir) {
                            Menu.List({
                                dir: e.target.innerText
                            });

                        } else {
                            api.Open({
                                fn: e.target.innerText
                            });
                        }
                    })
                    list.contentWindow.document.body.appendChild(item);

                });
            },
            onError: api.error
        });

    };

    return api;

}
    ());
