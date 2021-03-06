$(document).ready(function(){
  var conn = new FirebaseConn();

  var addVideo = function(key,data){
    console.info(data);
    var $a = $("<a>"); // need the video page link
    $a.attr('href', 'player.html?key='+key);
    $a.data("src-vid",data.src);
    $a.attr("id",key);
    $a.append('<div class="card-image">' + 
                              '<img src="http://placehold.it/300x300">'+
                              '<span class="card-title">'+data.title+'</span>'+
                              '</div>')

    // $(".gallery").append($a);
    $(".gallery").append('<div class="col m4 s12">'+
                            '<div class="card small">' + 
                             $a.prop('outerHTML') +
                            '<div class="card-content">' +
                              '<p>Some description about the vid.</p>' +
                            '</div></div></div>');
  }
              

  conn.getVideos(addVideo);

  $("body").on("click","a",function(e){

    // e.preventDefault();

    conn.getVideo($(this).data("id"),loadVideo);

  });


  var loadVideo = function(data){
    console.log(data);
    var src = data.src;

    var $source = $("<source>");
    $source.attr("type","video/mp4");
    $source.attr("src",src);
    $("video").append($source);
  };


});