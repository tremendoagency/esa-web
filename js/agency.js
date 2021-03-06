(function($) {
  "use strict"; // Start of use strict

  // NAVIGATION //////////////////////

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.mobile-navbar').removeClass('show');
  });

  $('.navbar-toggler').click(function() {
    $('.mobile-navbar').toggleClass('show');
    $('.navbar-toggler').toggleClass('open');
    $('#player').removeClass('show');
    $('body').removeClass('static');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    if ($(window).scrollTop() > 100) {
      $(".cover").addClass("cover-shrink");
    } else {
      $(".cover").removeClass("cover-shrink");
    }
  };

  navbarCollapse();
  $(window).scroll(navbarCollapse);

  // PLAYER //////////////////////

  $('.player-toggler').click(function() {
    $('#player').toggleClass('show');
    $('.mobile-navbar').removeClass('show');
    $('.navbar-toggler').removeClass('open');
    $('body').toggleClass('static');
  });

  $('.sc-remote-link').click(function(event) {
    var $link = $(this),
    $player = $('.sc-player');
    if ($player.hasClass('playing')) {
      $('a.sc-pause').click();
      $link.removeClass('fa-pause').addClass('fa-play');
    }
    else{
      $('a.sc-play').click();
      $link.removeClass('fa-play').addClass('fa-pause');
    }
    return false;
  });

  // SWIPER //////////////////////

  var bio = new Swiper('.swiper-container#bio-swiper', {
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    }
  });

})(jQuery); // End of use strict
