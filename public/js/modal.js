$(function() {

  /**
  * classes
  */
  var body = $('.mjs-body');
	var modal = $('.mjs-modal'),
      modalOpenButton = $('.mjs-modal-button'),
      modalCloseButton = $('.mjs-modal-close'),
      modalPrev = $('.mjs-modal-prev'),
      modalNext = $('.mjs-modal-next');

  /**
  * functions
  */
  function modalShowFunction(id) {
    event.preventDefault();
    if ( id == undefined ) {
      modal.fadeIn();
      body.css('overflow', 'hidden');
    }
    else {
      $('.mjs-modal[data-modal-index="' + id + '"]').fadeIn();
      body.css('overflow', 'hidden');
    }
  }
  function modalHideFunction() {
    event.preventDefault();
    body.css('overflow', 'auto');
    modal.fadeOut();
  }
  function modalPrevFunction(id) {
    prev = id - 1;

    if ( prev > 0 && prev < modal.length ) {
      $('.mjs-modal[data-modal-index="' + prev + '"]').show();
    }
    else {
      max = modal.length;
      $('.mjs-modal[data-modal-index="' + max + '"]').show();
    }
  }
  function modalNextFunction(id) {
    next = id + 1;

    if ( next <= modal.length ) { 
      $('.mjs-modal[data-modal-index="' + next + '"]').show();
    }
    else {
      min = 1;
      $('.mjs-modal[data-modal-index="' + min + '"]').show();
    }
  }

  /**
  * settings
  */
  modal.each(function(i) {
    $(this).attr('data-modal-index', i + 1);
  })
  modalOpenButton.each(function(i) {
    $(this).attr('data-modal-button', i + 1);
  })

  /**
  * events
  */
  modalOpenButton.on('click', function(event) {
    var id = $(this).data('modal-button');
    modalShowFunction(id);
  });
  modalCloseButton.on('click', function(event) {
    modalHideFunction();
  });
  modalPrev.on('click', function() {
    $(this).closest(modal).hide();

    var id = $(this).closest(modal).data('modal-index');
    modalPrevFunction(id);

  });
  modalNext.on('click', function() {
    $(this).closest(modal).hide();

    var id = $(this).closest(modal).data('modal-index');
    modalNextFunction(id)

  });

});