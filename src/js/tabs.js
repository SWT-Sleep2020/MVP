$(function () {
  /**
  * classes
  */
	var tabs = $('.mjs-tabs'),
      tabsButton = $('.mjs-tabs-button'),
      tabsFlyout = $('.mjs-tabs-flyout');

  /**
  * functions
  */

  /**
  * settings
  */
  tabs.each( function() {

    var button = $(this).find(tabsButton),
        flyout = $(this).find(tabsFlyout);

    button.each( function(i) {
      $(this).attr('data-tab-index', i);
    })
    flyout.each( function(i) {
      $(this).attr('data-flyout-index', i);
    })

  });
  /**
  * event
  */
  tabsButton.on('click', function() {

    var parent = $(this).closest(tabs),
        tabIndex  = $(this).attr('data-tab-index');

    // 1. state of tabsButton
    if ( $(this).hasClass('is-active') == false ) {
      parent.find(tabsButton).removeClass('is-active')
      $(this).addClass('is-active');
    }

    // 2. state of tabsFlyout
    parent.find(tabsFlyout).attr('class', 'is-active').hide().removeClass('is-active');
    parent.find(tabsFlyout).eq(tabIndex).show().addClass('is-active');

  });
});