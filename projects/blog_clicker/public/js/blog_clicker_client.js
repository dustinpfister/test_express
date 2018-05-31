
var write = {

    wp: 0, // write points
    money: 0,
    post_demos: [],

    // what to do when the write button is clicked
    write: function () {

        this.wp += 1;

    },

    // fetch post demos
    getPostDemos: function () {

        $.ajax({
            method: 'POST',
            data: {
                foo: 'bar'
            },
            url: '/posts/get-demos'

        }).done(function (res) {

            console.log(res);

        });

    }

};

write.getPostDemos();

var login = function () {

    $.ajax({
        method: 'POST',
        url: '/login'

    }).done(function (res) {

        console.log(res);

    });

};

// render method
var render = function () {

    // set word point count
    $('.wp').text(write.wp);
    $('.money').text(write.money);

};

//login();
render();

// buttons
$('#button_write').on('click', function (e) {

    write.write();
    render();

});
