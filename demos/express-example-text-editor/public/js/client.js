
// Menu Items
var menuItems = [

    // File Munu
    {
        name: 'file',
        options: [
            // open file
            {
                name: 'open',
                onActive: function () {
                    // Just using get
                    get({
                        action: 'open'
                    }, function (err, res) {

                        if (err) {

                            get('text_edit').value = err;

                        } else {

                            get('text_edit').value = res.data;

                        }
                    });

                }

            }
        ]

    }
];

// HTML for menu
var el_menu = get('menu');
menuItems.forEach(function (item) {

    var div = document.createElement('div');
    div.id = 'menu_' + item.name;
    //div.className = 'menu_item menu_text';
    div.innerHTML = item.name;

    // when a menu item is clicked make the ooptions
    // visible or hidden
    div.addEventListener('click', function (e) {

        var div = e.target,
        div_opt = div.children[0];

        if (div_opt) {
            if (div_opt.style.visibility === 'hidden') {
                div_opt.style.visibility = 'visible';
            } else {
                div_opt.style.visibility = 'hidden';
            }
        }

    });

    // options menu for the menu item
    var div_options = document.createElement('div');
    div_options.style.visibility = 'hidden';
    //div_options.className = 'menu_options'

    // for each option
    item.options.forEach(function (opt) {

        var div_opt = document.createElement('div');
        //div_opt.className = 'menu_text';
        div_opt.innerHTML = opt.name;

        div_opt.addEventListener('click', function (e) {
            // call the active function for that option
            opt.onActive();
        });

        div_options.appendChild(div_opt);

    });

    div.appendChild(div_options);

    el_menu.appendChild(div);

});
