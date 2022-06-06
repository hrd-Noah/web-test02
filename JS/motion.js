// ハンバーガーメニュー
$('.icon').click(function(){
    $(".icon").toggleClass("is-active");
    $(".header-nav-sm").toggleClass("is-active");
})


// フッター変更
$(window).on('load resize',function(){
    var x = $(window).width();
    var y = 767;
    if (x <= y) {
        $('.footer-bg-pc').css("display","none");
        $('.footer-bg-sm').css("display","block")
    }else{
        $('.footer-bg-sm').css("display","none")
        $('.footer-bg-pc').css("display","block");
    }
})

// ふわっと
$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});

// fadein 
jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 100) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });