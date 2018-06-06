//var imgReady = function (a, b) {
//    console.log(this.files[0]);
//};
//$('#imgInp').change(imgReady);


$('#imgSend').on('click', function (e) {

    var files = $('#imgInp')[0].files;

    if (files.length > 0) {

        $.ajax({
            type: 'POST',
            url: '/',
            data: files[0],
            processData: false,
            contentType: false
        }).done(function (data) {
            console.log(data);
        });

    } else {

        console.log('no file');

    }

});
