$(function() {

  /*========================================
  Flyout
  ----------------------------------------*/

  var breakpoint = 768;
  var overlayHtml = '<div class="mjs-nav-overlay mui-layout__overlay"></div>',
      overlay = '.mjs-nav-overlay';

  /**
  * classes
  */
	var navButton = $('.mjs-nav-button'),
			navLayout = $('.mjs-nav-layout'),
      navFlyout = $('.mjs-nav-flyout');

  /**
  * functions
  */
  function toggleNavFunction() {
    navButton
      .toggleClass('is-active');
    navLayout
      .toggleClass('is-flyout');
    navFlyout
      .slideToggle(0);
  }
  function generateOverlayFunction() {
    navLayout
      .prepend(overlayHtml)
  }
  function toggleOverlayFunction() {
    $(overlay).toggle();
  }

  /**
  * default
  */
  generateOverlayFunction();
  toggleOverlayFunction();
	
  /**
  * events
  */
	navButton.on('click', function() {
    toggleNavFunction();
    toggleOverlayFunction();
	});
  $(overlay).on('load click resize', function() {
    toggleNavFunction();
    toggleOverlayFunction();
  });
	
  /*========================================
  Scrollspy
  ----------------------------------------*/

  /**
  * classes
  */
  var spyTarget = $('.mjs-spy-target'),
      spyTargetText = $('.mjs-spy-target-text'),
      spyNav = $('.mjs-spy-nav'),
      spyNavItem = $('.mjs-spy-nav-item'),
      spyNavLink = $('.mjs-spy-nav-link');

  /**
  * functions
  */
  function spyTargetFunction(current) {
    spyTarget.each( function(i) {

      var sectionTop = $(this).offset().top,
          sectionBotton = sectionTop + $(this).outerHeight();

      if( current >= sectionTop && current <= sectionBotton ) {
        spyNavLink.eq(i).addClass('is-active')
      }
      else {
        spyNavLink.eq(i).removeClass('is-active');
      }
    });
  }
  function generateSpyListFunction() {

    var n = spyTargetText.length - spyNavItem.length;
    var template = spyNav.html();

    for ( var i = 1; i <= n; i++ ) {
      spyNav.append(template);
    }
  
  }
  function generateLinkFunction(name) {

    // 1. from
    spyNavLink.each( function(i) {
      $(this).attr('href', '#' + name + '-' + i );
    });
    // 2. to
    spyTargetText.each( function(i) {
      $(this).attr('id', name + '-' + i );
    });
    
  }
  function generateTextFunction(name) {

    spyNavLink.each( function(i) {
      $(this).text( $('#' + name + '-' + i).text() )
    });

  }
  function animateScrollTopFunction(position) {
    $('.mjs-html, .mjs-body').animate({scrollTop: position}, 500, 'swing');
  }

  /**
  * default
  */
  var name = 'spy-index';
  $.when( generateSpyListFunction(), generateTextFunction(name) )
   .then( generateLinkFunction(name) )
   .then( generateTextFunction(name) )

  /**
  * event
  */
  $(window).on('load scroll resize', function() {

    var current = $(window).scrollTop();
    spyTargetFunction(current);

  });
  spyNavLink.on('click', function(e) {
    e.preventDefault();

    var name = 'spy-index';
    var id = $(this).attr('href').replace('#' + name + '-', ''),
        position = spyTargetText.eq(id).offset().top;

    animateScrollTopFunction(position);

    // close navigation function
    if ( $(window).width() < breakpoint ) {
      toggleNavFunction();// * dependency -> nav-flyout
      toggleOverlayFunction();// * dependency -> nav-flyout
    }

  });
  
});