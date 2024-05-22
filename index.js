$('#offer-portrait').hover(
    function() {
        $('#img-portrait').stop(true, true).animate({opacity: 0.25});
        $('#offer-text').text('');
    }, function() {
        $('#img-portrait').stop(true, true).animate({opacity: 0});
        $('#offer-text').text('');
    }
);

$('#offer-event').hover(
    function() {
        $('#img-event').stop(true, true).animate({opacity: 0.25});
    }, function() {
        $('#img-event').stop(true, true).animate({opacity: 0});
    }
);

$('#offer-wedding').hover(
    function() {
        $('#img-wedding').stop(true, true).animate({opacity: 0.25});
    }, function() {
        $('#img-wedding').stop(true, true).animate({opacity: 0});
    }
);

$('#offer-commercial').hover(
    function() {
        $('#img-commercial').stop(true, true).animate({opacity: 0.25});
    }, function() {
        $('#img-commercial').stop(true, true).animate({opacity: 0});
    }
);


