document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = 45;
        const adjustMargin = 10;
        
        if(targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight - adjustMargin;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        const mvLogoPosition = $('.mv_logo').offset().top + $('.mv_logo').height();
        if ($(window).scrollTop() >= mvLogoPosition) {
            $('#header').show();
            $('#footer').show();
        } else {
            $('#header').hide();
            $('#footer').hide();
        }
    });
});
$('.site-title').on('click', function() {
    $('.mv').css('display', 'block')
    location.reload();
});