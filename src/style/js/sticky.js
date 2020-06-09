 $(window).scroll(function() 
 {
    if ($(window).scrollTop() > 90) {
        $('.sticky-top').addClass('fixed-top');
     } else {
        $('.sticky-top').removeClass('fixed-top');
    }
});

 $(document).ready(function() {
 	$("style").hide();
 });