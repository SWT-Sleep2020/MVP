$(function () {

	// classes
	var accordion = $('.mjs-accordion'),
      accordionButton = $('.mjs-accordion-button'),
      accordionFlyout = $('.mjs-accordion-flyout');

  // settings
  accordion.each(function() {
  	if( $(this).hasClass('is-closed') ) {
	  	$(this).find(accordionFlyout).hide();
	  }
	  else if( $(this).hasClass('is-flyout') ) {
	  	$(this).find(accordionFlyout).show();
	  }
  });

  // event
  accordionButton.on('click', function() {
  	var parent = $(this).closest(accordion),
  	    sibling = $(this).siblings(accordionFlyout);

	  if( parent.hasClass('is-closed') ) {
	  	parent.addClass('is-flyout').removeClass('is-closed')
	  }
	  else if( parent.hasClass('is-flyout') ) {
	  	parent.removeClass('is-flyout').addClass('is-closed')
	  }
	  // else {
	  // 	parent.toggleClass('is-flyout')
	  // }

  	$(this).siblings(accordionFlyout).slideToggle(100);
  });
  
})