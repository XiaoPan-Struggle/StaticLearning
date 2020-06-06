window.addEventListener("load", function() {
  // app下载
  $(".download").hover(function() {
    $(this)
      .children(".appcode_item")
      .fadeToggle(400);
  });
  $(".tool-bar-download-img").hover(function() {
    $(this)
      .children(".tool-bar-download")
      .fadeToggle(400);
  });
  // 小米logo动画
  $(".header-logo").on({
    mouseenter: function() {
      $(".logo").animate({
        left: 0
      });
    },
    mouseout: function() {
      $(".homepng").animate({
        left: -55
      });
    }
  });
  // 侧边栏
  // 轮播图上左tap栏
  $(".home_list_item").on({
    mouseenter: function() {
      $(this)
        .css("backgroundColor", "#ff6700")
        .siblings()
        .css("backgroundColor", "");
    },
    mouseout: function() {
      $(this).css("backgroundColor", "");
    }
  });
  //全局导航栏
  $(".globar_nav").hover(
    function() {
      $(this)
        .css("color", "#ff6700")
        .siblings()
        .css("backgroundColor", "");
    },
    function() {
      $(this).css("color", "");
    }
  );
  $(".topar-care").hover(function() {
    $(".care_goods").fadeToggle(400);
  });
});

// 返回顶部
$(window).scroll(function() {
  if ($(document).scrollTop() >= 810) {
    $(".nav_item_backTop").fadeIn();
    $(".nav_item_backTop").css("display", "block");
  } else {
    $(".nav_item_backTop").fadeOut();
  }
});
$(".nav_item_backTop").click(function() {
  $("body html")
    .stop()
    .animate({
      scrollTop: 0
    });
});
