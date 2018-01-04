var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3666
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})
