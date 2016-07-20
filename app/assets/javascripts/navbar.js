$(function() {
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });
});

$('a').click(function(event) {
  event.preventDefault();
  var link = this;
  $.smoothScroll({
    scrollTarget: link.hash
  });
});
