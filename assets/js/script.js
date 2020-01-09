jQuery(document).ready(function() {
  function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr("href").replace("#", ".");
    var scroll_to = 0;
    if(element_class != ".home") {
      element_class += ".-container";
      scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
      $("html, body").stop().animate({scrollTop: scroll_to}, 1000);
    }
  }

  // toggle "navbar-no-bg" class
  $('.top-content .text').waypoint(function() {
    $('nav').toggleClass('navbar-no-bg');
  });

  //navigation
  $("a.scroll-link").on("click", function(e) {
    e.preventDefault();
    scroll_to($(this), $("nav").outerHeight());
  });


  ////HOME PAGE 
  //set background
  $(".top-content").backstretch("assets/images/homeBG.jpeg");
  //personal info
  $("#personal").on("click", function() {
    $("#p").toggle();
    $("#d").hide();
  })
  $("#decagon").on("click", function() {
    $("#d").toggle();
    $("#p").hide();
  })
});

///WORK/PORTFOLIO
//set background
//$("#portfolio").backstretch("assets/images/portfolioBG.jpeg");
