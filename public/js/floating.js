$(function () {

  /**
  * classes
  */
  //var header = $('.mjs-floating-header')

  /*
  * functions
  */
  function floatingHeaderFunction() {
    $(window).on('scroll', function() {
      if ( $(window).scrollTop() == start ) {
        header.css('position', 'relative');
      }
      else if ( $(window).scrollTop() > start ) {
        header.css('position', 'fixed');
      }
    });
  }

  /*
  * settings
  */
  start = 0;

  /**
  * events
  */

  var modal = $('.mjs-modal'),
      modalOpenButton = $('.mjs-modal-button');

  function getStartPosition() {
    modalOpenButton.on('click', function() {
      start = $(window).scrollTop();
    });
  }
  $.when( getStartPosition() ).then( floatingHeaderFunction() )
  
})