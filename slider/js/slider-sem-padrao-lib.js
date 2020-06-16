const sliderItems = document.querySelectorAll('.slider__item');
const texts = sliderItems[0].querySelectorAll('p');
const timeline = new TimelineMax();

TweenMax.set(sliderItems[0], { scale: .9 });

timeline
  .to(sliderItems[0], .5, { left: 0, delay: 1 })
  .to(sliderItems[0], .5, { scale: 1 })
  .staggerFrom(texts, .5, { y: 100, autoAlpha: 0, ease: Back.easeOut}, 0.2);
