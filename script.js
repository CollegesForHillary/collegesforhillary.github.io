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
      
      var date = post.date;
      var title = post.title.toUpperCase();;
      var url = post.short_url;
      var body = post.body;
      
      var title = "<a href='"+url+"'><div class='posthd heading title'>"+title+"</div></a>";
      var date = "<div class='postdt title'>"+date+"</div>";
      var body = "<div class='postbd'>"+body+"</div>";
      
      $('#news').append("<div class='post'>"+title+date+body+"</div>");
    }
  });
}