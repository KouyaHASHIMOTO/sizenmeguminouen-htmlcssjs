//アコーディオンをクリックした時の動作

//質問要素をクリックしたら
$(".p-faq__question").on("click", function () {
  $(".p-faq__answer").slideUp(500); //クラス名.p-faq__answerがついたすべてのアコーディオンを閉じる

  var findAnswer = $(this).next(".p-faq__answer"); //直後のアコーディオンを行うエリアを取得し
  var findElement = $(this).closest(".p-faq__element"); //クリックしたタイトル要素に一番近い親要素の.p-faq__elementを取得

  //アコーディオンの開閉時の動作
  if ($(findElement).hasClass("scaleUp")) {
    //タイトル要素にクラス名scaleUpがあれば
    $(findElement).removeClass("scaleUp"); //クラス名を除去
  } else {
    //それ以外は
    $(".scaleUp").removeClass("scaleUp"); //クラス名scaleUpを全て除去した後
    $(findElement).addClass("scaleUp"); //クリックしたタイトルにクラス名scaleUpを付与し
    $(findElement).slideDown(500); //アコーディオンを開く
  }

  //アコーディオン＋－ボタン
  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去
  } else {
    //それ以外は
    $(".close").removeClass("close"); //クラス名closeを全て除去した後
    $(this).addClass("close"); //クリックしたタイトルにクラス名closeを付与し
    $(findAnswer).slideDown(500); //アコーディオンを開く
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作
$(window).on("load", function () {
  $(".p-faq__accordion li:first-of-type section").addClass("open"); //p-faq__accordionのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function (index, element) {
    //openクラスを取得
    var question = $(element).children(".p-faq__question"); //openクラスの子要素のp-faq__questionクラスを取得

    $(element).addClass("scaleUp"); //openクラスの親要素にクラス名scaleUpを付与

    $(question).addClass("close"); //質問にクラス名closeを付与し
    var answer = $(element).children(".p-faq__answer"); //openクラスの子要素p-faq__answerクラスを取得
    $(answer).slideDown(500); //アコーディオンを開く
  });
});
