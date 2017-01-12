$('.btn-get-app, .btn-get-popup').on('click', function (){
    $('.wrap-popup').fadeIn('fast',function(){
        $('.block-popup').animate({'top':'50%'},600).css({
            'transform': 'translateY(-50%)'
        });
    });
});

$('.btn-close').on('click', function (){
    $('.block-popup').animate({'top':'-100%'},500,function(){
        $('.wrap-popup').fadeOut('fast');
    });
});

$('.list-popup a').on('click', function (e){
    e.preventDefault();
    $('.list-popup li').removeClass('active');
    $(this).parent().addClass('active');
});

$('.counter-app a').on('click', function (e){
    $(this).siblings().removeClass('active');
    $(this).siblings().addClass('active');

    var currentItem = $(this).parent().index();
    var currentContent = $('.list-popup-content .item');

    currentContent.removeClass('active-popup-content');
    currentContent.eq(currentItem).addClass('active-popup-content');
});

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

$('.toggle-menu').on('click', function(){
    $('.popup-menu').slideToggle('slideDown');
    $('.nav-menu').animate({'top':'25%'},600);
    $('.popup-menu').on('click',function(){
        $('.popup-menu').fadeOut('fast');
    });
});