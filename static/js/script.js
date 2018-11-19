$(document).ready(function(){
  
  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Hack for navbar
  $(".navbar-toggler").click(function(e){
    if($("nav").hasClass('navbar-light')){
      if($(window).scrollTop() < 30){
        $("nav").addClass('navbar-dark').removeClass('navbar-light');
      }
      
    } else {
      $("nav").removeClass('navbar-dark').addClass('navbar-light');
    }
  });

  //Check scroll location of page
  //If more than 30 add white bg in nav
  if($(window).scrollTop() >= 30){
    $("nav").addClass('navbar-dark').removeClass('navbar-light');
  }
  
  /*
    Work portfolio
  */
  var overlay = $(".overlay, .cross");
  var workImage = $(".workImage");
  var body = $("body");
  var hoverImageHolder = $(".hoverImage");
  var hoverImage = $(".hoverImage > img");
  var hoverTitle = $(".hoverImage > .textHolder > .title");
  var hoverDescription = $(".hoverImage > .textHolder > .description");

  workImage.click(function(){
    //Get tite and description
    var title = $(this).data('title');
    var description = $(this).data('description');

    hoverTitle.text(title);
    // hoverDescription.text(description);

    overlay.addClass("active");
    body.addClass("zoomOut");
    var imageURL = $(this).data('url');
    hoverImage.attr('src', imageURL);
    hoverImageHolder.addClass('active');
  });

  overlay.click(function(){
    $(overlay).removeClass("active");
    hoverImageHolder.removeClass('active');
    hoverImage.attr('src', '');
    body.removeClass("zoomOut");
  });

  //Smooth scroll
  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
  });



  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 30) {
        //clearHeader, not clearheader - caps H
        $(".nav-transparent").removeClass("navbar-dark").addClass("navbar-light");
    } else {
      $(".nav-transparent").removeClass("navbar-light").addClass("navbar-dark");
    }
});


});