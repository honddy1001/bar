// トップへ戻るボタン
$(".page-top a").hide();

$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
      $(".page-top a").fadeIn();
  } else {
    $(".page-top a").fadeOut();
  }
});

$(".page-top a").click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});
// タイトル下から上へ
function fadeAnime(){

  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top+100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
}
  $(window).scroll(function (){
    fadeAnime();
  });

   //フェードイン
function fadeAnime(){

  $('.fadeUpTrigger').each(function(){ 
    var elemPos = $(this).offset().top+250;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    // $(this).removeClass('fadeUp');
  
    }
    });
}
  $(window).scroll(function (){
    fadeAnime();
  });

    


