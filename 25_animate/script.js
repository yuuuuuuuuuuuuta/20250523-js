$(function () {
  // jQueryを記述
  $("button").click(function() {
    // $("div").animate( {"left": "600px"}, 100 );
    // 相対指定によるアニメーション
    $("div").animate( {"left": "+=300px"}, 500 );
  });
});