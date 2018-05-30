
var model = {

    wp: 0, // write points
    money: 0,

    write: function () {

        this.wp += 1;

    }

};

// render method
var render = function () {

    // set word point count
    $('.wp').text(model.wp);
    $('.money').text(model.money);

};

render();

// buttons
$('#button_write').on('click', function (e) {

    model.write();
    render();

});
