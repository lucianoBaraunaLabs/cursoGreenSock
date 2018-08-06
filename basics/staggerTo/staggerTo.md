# O método staggerTo
É o método utlizando em listas de elementos. Possui um terceiro parâmetro que é
um Number que diz quando que se iniciára a próxima animação.

Quando terminar a primeira que demora 1s ele esperará .3s já para iniciar ela
novamente.

```
TweenMax.staggerTo(items, 1, {
    scale: 0,
    opacity: 0,
    ease: Bounce.easeOut
}, .3)
```
