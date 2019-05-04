// open the current file
Menu.Open();

get('text_open').addEventListener('click', function (e) {
    Menu.Open({
        fn: get('text_fn').value
    });

});
