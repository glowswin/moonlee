$(document).ready(function () {
  if ($(".header-menu").length) {
    navi();
  }
  if ($(".header-cont__button").length) {
    menu_list();
  }
  if ($(".main-content__faq").length) {
    faq_list();
  }
});
function menu_list() {
  $(".header-cont__momenu").hide();
  $(".header-cont__button").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".header-cont__momenu").hide();
    } else {
      $(this).addClass("on");
      $(".header-cont__momenu").show();
    }
  });
}
function faq_list() {
  $(".main-content__faq__list__qu__button i").removeClass("fa-chevron-up");
  $(".main-content__faq__list__qu__button i").addClass("fa-chevron-down");
  $(".faq_answer").removeClass("main-content__faq__list__an__on");
  $(".faq_answer").addClass("main-content__faq__list__an");
  $(".main-content__faq__list__qu__button").click(function () {
    if ($("i", this).hasClass("fa-chevron-up")) {
      $(".faq_answer").removeClass("main-content__faq__list__an__on");
      $(".faq_answer").addClass("main-content__faq__list__an");
      $(".main-content__faq__list__qu__button i").removeClass("fa-chevron-up");
      $(".main-content__faq__list__qu__button i").addClass("fa-chevron-down");
      $("i", this).removeClass("fa-chevron-up");
      $("i", this).addClass("fa-chevron-down");
      $(this)
        .parent()
        .parent()
        .find(".faq_answer")
        .removeClass("main-content__faq__list__an__on");
      $(this)
        .parent()
        .parent()
        .find(".faq_answer")
        .addClass("main-content__faq__list__an");
    } else {
      $(".faq_answer").removeClass("main-content__faq__list__an__on");
      $(".faq_answer").addClass("main-content__faq__list__an");
      $(".main-content__faq__list__qu__button i").removeClass("fa-chevron-up");
      $(".main-content__faq__list__qu__button i").addClass("fa-chevron-down");
      $("i", this).removeClass("fa-chevron-down");
      $("i", this).addClass("fa-chevron-up");
      $(this)
        .parent()
        .parent()
        .find(".faq_answer")
        .removeClass("main-content__faq__list__an");
      $(this)
        .parent()
        .parent()
        .find(".faq_answer")
        .addClass("main-content__faq__list__an__on");
    }
  });
}

//Nav
function navi() {
  var nav = $(".header-menu");
  var navTop = nav.offset().top + 50;
  var navTopCheck = false;
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop >= navTop) {
      if (navTopCheck == false) {
        navTopCheck = true;
        nav.css("top", "-100px");
        nav.addClass("fixed").stop().animate({ top: "0" }, 250);
      }
    } else if (winTop <= navTop) {
      if (navTopCheck == true) {
        navTopCheck = false;
        nav.removeClass("fixed");
      }
    }
  });
}
