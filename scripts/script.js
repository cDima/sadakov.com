// script.js

(function() {

  function smoothScroll () {
    var navHeight = $('.navbar').height();

    $('.smooth').click(function(){
      var hash = $.attr(this, 'href');
      $('html, body').animate({
          scrollTop: ( $(hash).offset().top ) - (navHeight - 1)
      }, //{ duration: 1000, easing: 'easeInOutCubic' },
      1000, 
      'easeInOutCubic',
      function() { if (hash == '#page-top') hash = ''; window.location.hash = hash;}
      );
      return false;
    });

  }

  // Doc ready
  $(document).ready(function() {
    smoothScroll ()
    
    $('.beacon').click(function () {
      $('.color-toggle').toggleClass('clicked')
    })
    $('.tooltip-trigger').tooltip()    
  })


})();
