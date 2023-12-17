$(function () {
  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });
});
// スクロールでヘッダーカラー変更
$(function () {
  $(window).on("scroll", function () {
    if ($(".mv,.sub-mv").height() < $(this).scrollTop()) {
      $(".js-header").addClass("change-color");
    } else {
      $(".js-header").removeClass("change-color");
    }
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".swiper-button-next, .swiper-button-prev").on("click", function () {
  if (swiper.animating) {
    return;
  }
  swiper.slideNext();
});
// クリック操作
$(function () {
  $(".service__tab").click(function () {
    // クリックされたタブにis-activeクラスを付与する
    $(".service__tab").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  // タブのクリックイベント
  $(".service__tab").click(function () {
    // クリックされたタブのインデックス番号を取得
    var index = $(this).index();

    // 表示する画像のインデックス番号を設定
    var start = index * 3;
    var end = start + 3;

    // 画像を表示
    $(".service__img").hide().slice(start, end).fadeIn();

    // タブのアクティブ状態を設定
    $(".service__tab").removeClass("is-active");
    $(this).addClass("is-active");
  });
});
$(document).ready(function () {
  // ページが読み込まれたら実行される処理
  // 3枚目までのカードを表示する
  $(".service__content:nth-child(1)").show();
  $(".service__content:nth-child(2)").hide();

  // その他のアイテムをクリックしたときの処理
  $(".service__tab:nth-child(2)").on("click", function () {
    $(".service__content:nth-child(1)").hide();
    $(".service__content:nth-child(2)").show();
  });
  $(".service__tab:nth-child(1)").on("click", function () {
    $(".service__content:nth-child(2)").hide();
    $(".service__content:nth-child(1)").show();
  });
});

$(".service__img").on("load", function () {
  var height = $(this).height();
  $(this)
    .closest(".service__body")
    .css("height", height + "px");
});

// モーダル
$(document).ready(function () {
  var $body = $("body");
  var $modal = $("#modal");
  var $openBtn = $("#open-modal");
  var $closeBtn = $("#close-modal");

  // モーダルを開くボタンをクリックした場合の処理
  $openBtn.on("click", function () {
    // モーダルを開く前に現在のスクロール位置を保存
    var scrollTop = $(window).scrollTop();

    // body要素にクラスを追加してスクロール固定
    $body.addClass("fixed").css("top", -scrollTop);

    // モーダルを表示
    $modal.fadeIn();
  });

  // モーダルを閉じるボタンをクリックした場合の処理
  $closeBtn.on("click", function () {
    // body要素からスクロール固定用クラスを削除し、スクロール位置を復元
    $body.removeClass("fixed").css("top", "");
    $(window).scrollTop(parseInt($body.css("top")) * -1);

    // モーダルを非表示
    $modal.fadeOut();
  });
});

$(function () {
  $(".is-modal-open").on("click", function () {
    $(".modal").addClass("is-open");
  });

  $(".js-modal-close").on("click", function () {
    $(".modal").removeClass("is-open");
  });
});
$(function () {
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    video.addEventListener("mouseover", () => video.play());
    video.addEventListener("mouseout", () => video.pause());
  });
});
