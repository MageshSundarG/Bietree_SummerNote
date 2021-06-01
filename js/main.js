$(function () {
    $("#summernote").summernote();

    $("#submit-post").click(function (e) {
        e.preventDefault();
        var form = $("#postForm");
        console.log(form);

        $.ajax({
            url: "db_request.php",
            data: $(form).serialize(),
            method: "POST"
        }).done(function (response) {
            var data = JSON.parse(response);
            
        })
    })
})