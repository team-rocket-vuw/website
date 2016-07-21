$(function() {
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });
});

$('.smooth-scroll').click(function(event) {
  event.preventDefault();
  var link = this;
  $.smoothScroll({
    scrollTarget: link.hash
  });
});
