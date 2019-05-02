
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
    div.className = 'menu_item';
    div.innerHTML = item.name;
    div.addEventListener('click', function () {

        console.log('foo');

    })
    el_menu.appendChild(div);

});
