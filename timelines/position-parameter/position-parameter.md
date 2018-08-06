# Position parameter

Assim como no Tween na Timeline nós também temos delay.

Podemos fazer de algumas formas:

- Delay - Position relative, adiciona mais um tempo a animação em relação a anterior
```
.from(subtitle, .5, {
    x: -500,
    opacity: 0
}, '+=1') // sintaxe
```

- Overlap - Negative relative (remove menos um em relação ao anterior)
```
.from(code, .5, {
    scale: 0,
    opacity: 0
}, '-=1')  // sintaxe
```

- Position absolute. Após a contagem do item anterior (.5) após 2s nós iniciamos a animação total
Como esse tempo é absoluto ele conta até dois e vai iniciar um segundo antes do título aparecer

```
.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0
}, .3, 2);  // Primeiro argumento é o tempo do staggerFrom para iniciar a próxima e o segundo parâmetro é o tempo absolute
```

Seguindo essa linha os itens são mostrados primeiro, depois o título, depois code e por último o subtítulo
```
 tl
.from(title, 3, {
    x: 500,
    opacity: 0
})
.from(subtitle, .5, {
    x: -500,
    opacity: 0
}, '+=1')
.from(code, .5, {
    scale: 0,
    opacity: 0
}, '-=1')
.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0
}, .3, 2);
```

## Definindo label
A layer ajuda a manter um padrão de tempo.

O método `.add('titleAppear', '+=1')` adiciona um nome como primeiro argumento e
o segundo o tempo que ele recebe. Agora podemos adicionar esse nome e tabém aumentar o delay
ou fazer overlap em cima desses 1s a mais que foi criado

```
 tl
.from(title, 3, {
    x: 500,
    opacity: 0
})
.add('titleAppear', '+=1') // definindo label
.from(subtitle, .5, {
    x: -500,
    opacity: 0
}, 'titleAppear') // usando valor padrão
.from(code, .5, {
    scale: 0,
    opacity: 0
}, 'titleAppear') // usando valor padrão
.staggerFrom(items, .5, {
    scale: 0,
    opacity: 0
}, .3, 'titleAppear+=3'); // usando valor padrão e adicionando + 3
```
