# O método staggerFrom
É o método utlizando em listas de elementos. Possui um terceiro parâmetro que é
um Number que diz quando que se iniciára a próxima animação.

Quando inicia a primeira que demora .5s ele esperará .3s já para iniciar ela
novamente.

```
TweenMax.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0,
    ease: Bounce.easeOut
}, .3)
```
