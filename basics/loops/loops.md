# O método loops

A propriedade `repeat` aceita um numnber que diz quantas vezes irá repetir 
a animação. Quando colocamos o valor negativo `-1` o repeat passa a ser infinito

```
repeat: 2 // aqui ele vai repetir duas vezes
repeat: -1 // aqui ele vai repetir infinito
```

Quando colocamos o `yoyo: true`a animnação passa a ficar fluída (indo e voltando)

```
TweenMax.fromTo(title, 1, {
    x: -600,
},{
    x: 600,
    repeat: -1,
    yoyo: true
})
```
Usando `staggerFrom` os elementos ficam alterando entre si presos ao delay para
início de uma nova interação.
```
TweenMax.staggerFrom(items, .5, {
  scale: 0,
  repeat: -1,
  yoyo: true
}, .3)
```
Agora caso seja necessário que todos os elementos sumam e apareçam ao mesmo 
tempo, podemos utilizar: 
```
TweenMax.from(items, .5, {
    scale: 0,
    repeat: -1,
    yoyo: true
})
```