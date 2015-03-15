window.onload = function () {
  var tumblrAPI = "http://api.tumblr.com/v2/blog/collegesforhillary.tumblr.com/posts/text";

  $.ajax({
    type: "GET",
    url: tumblrAPI,
    dataType: "jsonp",
    data: {
        api_key: "c6Wzo0YtgripBg8iVpaA414jDcouZbWsLBWFN3Lwh4sdXobESn"
    }
  }).done(function( data ) {
    if (data.response.total_posts == 0) {
      $('#news').append("<div id='nonews'>Keep checking in for news on Colleges for Hillary</div>");
    }
    for (var i=0; i<data.response.total_posts; i++) {
      var post = data.response.posts[i];
      
      var date = post.date.split(" ")[0];
      var title = post.title.toUpperCase();;
      var url = post.short_url;
      var body = post.body;
      
      var title = "<div class='posthd heading title'><a href='"+url+"'>"+title+"</a><span class='postdt title'>["+date+"]</span></div>";
      var body = "<div class='postbd'>"+body+"</div>";
      
      $('#news').append("<div class='post'>"+title+body+"</div>");
    }
  });
}

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
    $('.nav_item').css('font-size','24px');
    $('.dot').css('width','10px');
  }
});