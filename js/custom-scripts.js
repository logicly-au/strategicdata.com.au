$(document).ready(function() {
  $(window).scroll(sticky_header);
  $("#primary-menu-trigger").click( trigger_mobile_menu );
  $(".tab-link").click( toggle_blog_sidebar );
  $(".owl-carousel").owlCarousel();
});

sticky_header = function() {
  if ($(document).scrollTop() > 40) {
    $("#header").addClass("sticky-header");
  } else {
    $("#header").removeClass("sticky-header");
  }
}

trigger_mobile_menu = function() {
  var $menu = $("#primary-menu ul");
  if ( $menu.hasClass("show") ) {
    $menu.removeClass("show");
  } else {
    $menu.addClass("show");
  }
}

toggle_blog_sidebar = function() {
  var tab_id  = $(this).attr('href').replace("/", "");
  $('.tab-link').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $(tab_id).addClass('current');
}

var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplaySpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

owl.owlCarousel();

// Go to the next item
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
