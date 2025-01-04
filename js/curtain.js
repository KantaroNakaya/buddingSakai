(function ($) {
    'use strict';
    $(window).on('load', function() {
        setTimeout(function() {
            $('.mv').addClass('appear');
            $('.pc-logo,.pc-link').addClass('d-flex');
        }, 4000);
    });
})(jQuery);