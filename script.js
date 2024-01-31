$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".menu").slideToggle();
  });
  $(".prd-item").mouseover(function () {
    $(this).parents(".parent").find(".icon-icon").addClass("action-hover ");
  });
  $(".prd-item").mouseout(function () {
    $(this).parents(".parent").find(".icon-icon").removeClass("action-hover ");
  });

  $("..prd-catan").mouseover(function () {
    $(this).parents(".parent").find(".icon-icon").addClass("action-hover ");
  });
  $("..prd-catan").mouseout(function () {
    $(this).parents(".parent").find(".icon-icon").removeClass("action-hover ");
  });
});
