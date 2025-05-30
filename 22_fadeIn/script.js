$(function () {
  // jQueryを記述
  // デフォルト（引数なし）
  // $("p").fadeIn();

  // 速度指定（引数あり）
  // $("p").fadeIn(4000);

  // 終了後の処理を指定
  $("p").fadeIn(3000, function() {
    $(this).css("color", "#FF0000");
  });
});