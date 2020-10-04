$(function () {
  var flag = true;
  function toggleTool() {
    if ($(document).scrollTop() >= $(".recommend").offset().top) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }

  toggleTool();
  $(window).scroll(function () {
    toggleTool();
    if (flag) {
      $(".floor .w").each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          // console.log(i);
          $(".fixedtool li")
            .eq(i)
            .addClass("current")
            .siblings()
            .removeClass("current");
        }
      });
    }
  });

  $(".fixedtool li").click(function () {
    // console.log($(this).index());
    flag = false;
    var current = $(".floor .w").eq($(this).index()).offset().top;
    $("body, html")
      .stop()
      .animate(
        {
          scrollTop: current,
        },
        function () {
          flag = true;
        }
      );
    $(this).addClass("current").siblings().removeClass("current");
  });
});
