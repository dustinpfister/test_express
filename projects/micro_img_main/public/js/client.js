//var imgReady = function (a, b) {
//    console.log(this.files[0]);
//};
//$('#imgInp').change(imgReady);


$('#imgSend').on('click', function (e) {

    var files = $('#imgInp')[0].files;

    if (files.length > 0) {

        console.log(files[0]);

    } else {

        console.log('no file');

    }

});
