window.onload = function () {
  var tumblrAPI = "http://api.tumblr.com/v2/blog/collegesforhillary.tumblr.com/posts";

  $.ajax({
    type: "GET",
    url: tumblrAPI,
    dataType: "jsonp",
    data: {
        api_key: "c6Wzo0YtgripBg8iVpaA414jDcouZbWsLBWFN3Lwh4sdXobESn"
    }
  }).done(function( data ) {
    console.log(data);
    if (data.response.total_posts == 0) {
      $('#news').append("<div id='nonews'>Keep checking in for news on Colleges for Hillary</div>");
    }
    for (var i=0; i<data.response.total_posts; i++) {
      var post = data.response.posts[i];
      console.log(post);
      
      var date = post.date.split(" ")[0];
      var url = post.short_url;
      var title="";
      var body="";
      
      if (post.type == "text") {
        var posttitle = post.title
        var postbody = post.body;
        title = "<div class='posthd heading title'><a href='"+url+"'>"+posttitle.toUpperCase()+"</a><span class='postdt title'>["+date+"]</span></div>";
        body = "<div class='postbd'>"+postbody+"</div>";
      } else {
        var caption = post.caption;
        if (caption == "") { caption = "Colleges for Hillary"; }
        var photos = post.photos;
        title = "<div class='posthd heading title'><a href='"+url+"'>"+caption.toUpperCase()+"</a><span class='postdt title'>["+date+"]</span></div>";
        body = "<div class='postbd'>"
        for (var j=0; j<photos.length; j++) {
          body += "<img class='postphoto' src='"+photos[j].original_size.url+"'/>";
        }
        body += "</div>";
      }
      
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