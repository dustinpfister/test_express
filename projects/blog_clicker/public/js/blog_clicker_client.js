
var write = {

    wp: 0, // word points
    money: 0,
    post_demos: [],

    // what to do when the write button is clicked
    write: function () {

        // word points
        this.wp += 1;

    },

    // fetch post demos
    getPostDemos: function () {

        var self = this;

        self.post_demos = [];

        $.ajax({
            method: 'POST',
            data: {
                foo: 'bar'
            },
            url: '/posts/get-demos'

        }).done(function (res) {

            // pushing what should for now
            // be a single post object
            self.post_demos.push(res);

            console.log(self);

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
