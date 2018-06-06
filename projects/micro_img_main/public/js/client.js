//var imgReady = function (a, b) {
//    console.log(this.files[0]);
//};
//$('#imgInp').change(imgReady);


$('#imgSend').on('click', function (e) {

    // json
    /*
    $.ajax({
    type: 'POST',
    url: '/post',
    data: JSON.stringify({
    foo: 'bar'
    }),
    contentType: 'application/json',
    }).done(function (data) {
    console.log(data);
    });
     */

    var debug = {
        hello: "world"
    };
    var blob = new Blob([JSON.stringify(debug, null, 2)], {
            type: 'application/json'
        });

    console.log(blob.type);

    var files = $('#imgInp')[0].files;

    $.ajax({
        type: 'POST',
        url: '/post',
        data: blob,
        processData: false,
        contentType: false
    }).done(function (data) {
        console.log(data);
    });

    /*
    var files = $('#imgInp')[0].files;

    if (files.length > 0) {

    $.ajax({
    type: 'POST',
    url: '/post',
    data: files[0],
    processData: false,
    contentType: false
    }).done(function (data) {
    console.log(data);
    });

    } else {

    console.log('no file');

    }
     */

});
