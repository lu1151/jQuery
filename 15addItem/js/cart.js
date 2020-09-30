$(function () {
  $(".checkall").change(function () {
    $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
  });
  $(".j-checkbox").change(function () {
    if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }
  });
  $(".increment").click(function () {
    var n = $(this).siblings(".itxt").val();
    n++;
    $(this).siblings(".itxt").val(n);
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);
    $(this)
      .parents(".p-num")
      .siblings(".p-sum")
      .html("￥" + price);
  });
  $(".decrement").click(function () {
    var n = $(this).siblings(".itxt").val();
    if (n == 1) {
      return false;
    }
    n--;
    $(this).siblings(".itxt").val(n);
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);
    $(this)
      .parents(".p-num")
      .siblings(".p-sum")
      .html("￥" + price);
  });
  $(".itxt").change(function(){
    var n = $(this).val();
    if (n<1){
      $(this).val("1");
    } else{
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);
    $(this)
      .parents(".p-num")
      .siblings(".p-sum")
      .html("￥" + price);
  }})
});
