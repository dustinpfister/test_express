
var write = {

    wp: 0, // word points for current post
    money: 0,
    text: '', // the current text
    post_demos: [],

    // what to do when the write button is clicked
    write: function () {

        // post_demos index
        let i = 0,

        // the full current demo text
        demoText = this.post_demos[i].text.split(' ');

        if (this.wp < demoText.length) {

            // add word point
            this.wp += 1;

            this.text = demoText.slice(0, this.wp).join(' ');

        }

        this.render();

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
            url: '/demos/get-demos'

        }).done(function (res) {

            // pushing what should for now
            // be a single post object
            self.post_demos.push(res);

            console.log(self);

        });

    },

    // render
    render: function () {

        // set word point count
        $('.wp').text(this.wp);
        $('.money').text(this.money);

        $('.text_write').text(this.text);

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
    //render();

});
