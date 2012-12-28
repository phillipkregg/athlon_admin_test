
$(document).ready(function() {

    var thumbnails = $('.thumbnail');

    $(".btn-primary").bind('click', function() {
        var imageContainer = $(this).parent().siblings('div.thumbnail');

        imageContainer.removeClass('thumbnail').addClass('thumbnail_overlay');
        $(imageContainer).find('img').addClass('center_fluid');



        thumbnails.not(imageContainer).addClass('thumbnail').removeClass('thumbnail_overlay');
    })

});