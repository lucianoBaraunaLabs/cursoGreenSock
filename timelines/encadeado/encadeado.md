# Encadeamento de animações

Quando queremos encadear as animações podemos fazer dessa forma:

```
TweenMax.from(title, .5, {
    x: 500,
    opacity: 0,
});

TweenMax.from(subtitle, .5, {
    x: -500,
    opacity: 0,
    delay: 1,
})

TweenMax.from(code, .5, {
    scale: 0,
    opacity: 0,
    delay: 2,
})

TweenMax.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0,
    delay: 2.5,
}, .3)
```

mas isso acaba sendo um transtorno para manutenção e também para sincronização.
O tweeen tem o módulo timeline que realiza um chain de funções que ajuda na sincronização
automática, facilitando nossa vida e deixando somente a preocupação do tempo de 
execução da animação como nossa responsabilidade.

```
const tl = new TimelineMax();
tl
.from(title, .5, {
    x: 500,
    opacity: 0
})
.from(subtitle, .5, {
    x: -500,
    opacity: 0
})
.from(code, .5, {
    scale: 0,
    opacity: 0
})
.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0
}, .3);
```

