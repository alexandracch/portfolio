(function($) {
    $(".button-collapse").sideNav();

    // 
    let functionScroll = (start, end) => {
        $(start).on('click', function() {
          var posicion = $(end).offset().top;
          $('html, body').animate({
            scrollTop: posicion
          }, 1000); 
        });
      };
      functionScroll('#portfolio-a','#portfolio');
      functionScroll('#aboutme-start','#aboutme');
      functionScroll('#skills-start','#skills');
      functionScroll('#portfolio-start','#portfolio');
      functionScroll('#contact-start','#contact');
      functionScroll('#coverpage-start', '#coverpage');
      functionScroll('#icon1-contacts','#contacts');
      functionScroll('#icon2-contacts','#contacts');
})(jQuery);

$('.carousel.carousel-slider').carousel({fullWidth: true});
        