$(function () {
  /**
  * chart bar
  */
  var chartBar = $('.mjs-chart-bar')
      chartBarItem = $('.mjs-chart-bar .mjs-chart-item');

  chartBarItem.each( function() {
    n = $(this).attr('data-value');
    $(this).css('width', n + '%');
  });

  /**
  * chart pie
  */
  var chartPie = $('.mjs-chart-pie'),
      chartPieItem = $('.mjs-chart-pie .mjs-chart-item');

  chartPieItem.each( function(i) {
    chartPieItem.eq(i).html(
      '<span class="mjs-chart-item-pseudo mui-chart__item-pseudo"></span>'
    );
    if ( chartPieItem.eq(i).hasClass('is-active') ) {
      chartPieItem.eq(i).append(
        '<span class="mjs-chart-item-half mui-chart__item-half"></span>'
      );
    }
  })
  chartPieItem.each( function(i) {
    n = $(this).attr('data-value');
    n = n * 3.6;
    $(this).find('.mjs-chart-item-pseudo').css({
      'transform': 'rotate(' + n + 'deg)'
    });
  });
  chartPie.each( function(i) {
    var item = $(this).children(chartPieItem);
    n = item.eq(0).attr('data-value');
    n = n * 3.6;
    item.eq(1).css({
      'transform': 'rotate(' + n + 'deg'
    })
  });
});