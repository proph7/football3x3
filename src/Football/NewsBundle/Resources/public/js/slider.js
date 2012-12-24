$(function() {
    var $slider = $('.slider');
    var $big_slide = $('.big-slide', $slider);
    $('.slides ul li', $slider).each(function(i, slide) {
        $(slide).bind('click', function() {
            var img_src = $('img.small-img', this).attr('src');
            var caption = $('.small-caption', this).html();

            $('img.big-img', $big_slide).stop().animate({ opacity: '0.3' }, function(){
                $(this).attr('src', img_src).stop().animate({ opacity: '1' });
            });

            $('.big-caption', $big_slide).stop().animate({ opacity: '0.3' }, function(){
                $(this).html(caption).stop().animate({ opacity: '0.8' });
            });

            // set slide as active
            $('.slides ul li', $slider).removeClass('active');
            $(this).addClass('active');
        });
    });
    $('.slides ul li:first-child', $slider).click();
});