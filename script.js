$(window).scroll(function() {
  if ($(document).scrollTop() > 160) {
    $('header').addClass('shrink');
    $('#logo').attr("src","./images/H.png");
    $('#logo').attr('width','60px');
    $('#logo').css('margin-top', '6px');
    $('#logo').css('margin-bottom', '6px');
    $('#nav').css('padding-top','18px');
    $('#nav').css('padding-bottom','18px');
    $('.nav_item').css('font-size','16px');
    $('.dot').css('width','6px');
  } else {
    $('header').removeClass('shrink');
    $('#logo').attr("src","./images/collegesforhillary_white.png");
    $('#logo').attr('width','300px');
    $('#logo').removeClass('smallLogo');
    $('#logo').css('margin-top', '9px');
    $('#logo').css('margin-bottom', '9px');
    $('#nav').css('padding-top','68px');
    $('#nav').css('padding-top','68px');
    $('.nav_item').css('font-size','16px');
    $('.dot').css('width','6px');
  }
});