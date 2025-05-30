$(function () {
  // jQueryを記述
  $("dt").hover(function() {
    $("dd").stop().slideToggle(1000);
  });
});