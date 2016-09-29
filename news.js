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
    nopost = true;
    for (var i=0; i<data.response.total_posts; i++) {
      var post = data.response.posts[i];
      console.log(post);
      
      var date = post.date.split(" ")[0];
      var url = post.short_url;
      var title="";
      var body="";

      // if (post.tags.includes("news")){
        nopost = false
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
      // }
      
      $('#news').append("<div class='post'>"+title+body+"</div>");
    }

    if (data.response.total_posts == 0 || nopost) {
      $('#news').append("<div class='post'><div class='posthd heading title'>Keep checking in for news on Colleges for Hillary</div><div class='empty'></div></div>");
    }
  });
}