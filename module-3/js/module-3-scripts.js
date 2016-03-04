$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 500);
    return false;
});

$('body').scrollspy({ target: '#navbar-menu' });