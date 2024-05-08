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

//タブメニューの切り替え

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
  if (hashIDName) {
    //タブ設定
    $(".p-activity__tab li")
      .find("a")
      .each(function () {
        //タブ内のaタグ全てを取得
        var idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
        if (idName == hashIDName) {
          //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $(".p-activity__tab li").removeClass("is-active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("is-active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".p-activity__tab-content").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
        }
      });
  }
}

//タブをクリックしたら
$(".p-activity__tab a").on("click", function () {
  var idName = $(this).attr("href"); //タブ内のリンク名を取得
  GethashID(idName); //設定したタブの読み込みと
  return false; //aタグのリンクを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", function () {
  $(".p-activity__tab li:first-of-type").addClass("is-active"); //最初のliにactiveクラスを追加
  $(".p-activity__tab-content:first-of-type").addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  if (!hashName) {
    hashName = "#farm";
  }
  GethashID(hashName); //設定したタブの読み込み
});

//スライドショー複数の画像を流して表示
$(".p-activity__tab-content-slider").slick({
  arrows: false, //左右の矢印はなし
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900, //スライドのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: "linear", //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 3, //スライドを画面に4枚見せる
  slidesToScroll: 1, //1回のスライドで動かす要素数
  // responsive: [
  //   {
  //     breakpoint: 769, //モニターの横幅が769px以下の見せ方
  //     settings: {
  //       slidesToShow: 2, //スライドを画面に2枚見せる
  //     },
  //   },
  //   {
  //     breakpoint: 426, //モニターの横幅が426px以下の見せ方
  //     settings: {
  //       slidesToShow: 1.5, //スライドを画面に1.5枚見せる
  //     },
  //   },
  // ],
});

//ハンバーガーメニュー

$(".l-header__hamburger-menu").click(function () {
  $(this).toggleClass("is-active");
  $(".l-hamburger-content").toggleClass("is-active");
});
