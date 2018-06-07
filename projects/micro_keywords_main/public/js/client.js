$('#search_submit').on('click', function () {

    var keyword = $('#search_text').get(0).value;

    $.ajax({

        method: 'POST',
        url: '/',
        data: JSON.stringify({

            keyword: keyword

        }),
		contentType: 'application/json',

    }).done(function (res) {

        console.log(res);

    })

});
