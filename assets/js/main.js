$('.imageGallery a').simpleLightbox();

const btn = $('#back__to__top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1800) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});