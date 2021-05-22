(function($) {
  // ハンバーガーメニュー
  $('.mobile-menu-icon').click(function() {
    $('body').toggleClass('menu-open');
  });

  // テキストアニメーション
  $(function() {
    $('.main-top__title').textFx({
      type: 'rotate',
      iChar: 100,
      iAnim: '1000'
    });
  })

  // テキストアニメーション
  $(function() {
    $('.main-top__sub-title').textFx({
      type: 'rotate',
      iChar: 100,
      iAnim: '1000'
    });
  });

  // スクロール (wow.js)
  $(function() {
    new WOW().init();
  });

  // スムーススクロール
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

})(jQuery);