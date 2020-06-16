
// ------ Código não refatorado ----- //

// Seletores
// const sliderItems = document.querySelectorAll('.slider__item');

// TweenMax.set(sliderItems[0], { scale: .9 }); // setando o primeiro item menor para aplicar o efeito


// const texts = sliderItems[0].querySelectorAll('p')
// const timeline = new TimelineMax();

// timeline
//   .to(sliderItems[0], .5, { left: 0, delay: 1 })
//   .to(sliderItems[0], .5, { scale: 1 })
//   .staggerFrom(texts, .5, { y:300, autoAlpha: 0, ease: Back.easeOut }, 0.2)


// Código refatorado

const sliderItems = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrows--right')
const btnPrev = document.querySelector('.slider__arrows--left')

const Slider = {
  currentItem: 0,

  // Iniciando a aplicação com o primeiro slide
  init: () => {
    Slider.in(Slider.currentItem)
  },

  in: (index) => {
    const item = sliderItems[index]
    const texts = item.querySelectorAll('p')
    const timeline = new TimelineMax();

    TweenMax.set(item, { scale: .9 });
    TweenMax.set(item, { left: '-100vw' }); // Garantindo que os itens sempre estarão na esquerda
    timeline
      .to(item, .5, { left: 0, delay: 1 })
      .to(item, .5, { scale: 1 })
      .staggerFrom(texts, .5, { y:300, autoAlpha: 0, ease: Back.easeOut }, 0.2)
  },

  out: (index, nextIndex) => {
    const item = sliderItems[index]
    const texts = item.querySelectorAll('p')
    const timeline = new TimelineMax();
    timeline
      .staggerTo(texts, .5, { y:300, autoAlpha: 0, ease: Back.easeOut }, '-0.5')
      .to(item, .5, { scale: .9 })
      .to(item, .5, { left: '100vw' })
      .call(Slider.in, [nextIndex], this, '-=1.5') // em anotações a explicação
      .set(texts, { clearProps: 'all' })

  },

  next: () => {
    const next = Slider.currentItem !== sliderItems.length - 1
      ? Slider.currentItem + 1 : 0
    Slider.out(Slider.currentItem, next)
    Slider.currentItem = next
  },

  prev: () => {
    const prev = Slider.currentItem > 0
      ? Slider.currentItem - 1 : sliderItems.length - 1
    Slider.out(Slider.currentItem, prev)
    Slider.currentItem = prev
  }
}

btnNext.addEventListener('click', Slider.next)
btnPrev.addEventListener('click', Slider.prev)
Slider.init()