(function ($) {
  $(document).ready(function () {
    $('.color').each(function( index ) {
      var color = '--' + $(this).attr('data-color');
      var hex = getComputedStyle(this).getPropertyValue(color);
      $(this).text(hex);
    });
  });
}(jQuery));
(function ($) {
  $(document).ready(function () {

    $('.accordion-title').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.accordion-row').toggleClass('accordion-open');
    });

  });
}(jQuery));
