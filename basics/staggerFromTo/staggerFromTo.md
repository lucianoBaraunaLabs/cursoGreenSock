# O método staggerFromTo
É o método utlizando em listas de elementos. Assim como o método fromTo ele
possui dos parâmetros o de inicio da animação e o de final além do parâmetro que
diz qual o tempo que vai iniciar a animação no próximo item.

```
TweenMax.staggerFromTo(items, .5, {
    scale: .3,
    rotation: 180,
},{
    scale: 1.1,
    rotation: 0,
}, .3)
```
