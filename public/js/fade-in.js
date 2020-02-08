$(function() {

	/**
  * classes
  */
  var fadeInModule = $('.mjs-fade-in');

  /**
  * functions
  */
  function fadeInFunction() {
    fadeInModule.each(function () {
      if( $(window).scrollTop() > $(this).offset().top - $(window).height() ) {
        $(this).addClass('is-loaded');
      }
    });

  }
  /**
  * default
  */
  fadeInFunction();

  /**
  * events
  */
  $(window).on('scroll resize', function() {
    fadeInFunction();
  });

})