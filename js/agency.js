(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.mobile-navbar').removeClass('show');
  });

  $('.navbar-toggler').click(function() {
    $('.mobile-navbar').toggleClass('show');
    $('.navbar-toggler').toggleClass('open');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($(window).scrollTop() > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  var titleCollapse = function() {
    if ($(window).scrollTop() > 0){
      $(".intro-heading").addClass("heading-shrink");
    } else {
      $(".intro-heading").removeClass("heading-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  titleCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse, titleCollapse);

})(jQuery); // End of use strict