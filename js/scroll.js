$(function() {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        $('#scroll-1').css('top', parseFloat(30 - scroll * 100 / 4 / window.innerHeight) + 'vh');
        $('#scroll-2').css('top', parseFloat(65 - scroll * 100 / 2.5 / window.innerHeight) + 'vh');
    });
});