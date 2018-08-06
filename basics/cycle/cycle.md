# O método cycle
Essa propriedaxe só funciona em stagger

0 método cria um ciclo de propriedades entre os elementos.

Podemos colocar de algumas maneiras (lembrando que essa forma será repetida até o último elemento):

```
opacity: [0, 1] = Onde 0 esconde e o 1 não esconde (alternados entre um sim e outro não).

opacity: [0, 1, 0, 0] = Onde o segundo não recebe (alternadas entre as linhas onde somente o segundo será visível)

opacity: [
    0, 0, 0,
    0, 1, 0,
    0, 0, 0,
] = Em forma de matriz, dessa forma nesse caso temos todos os elementos na tela e o que estiver com 1 vai aparecer.
```

```
TweenMax.staggerTo(items, .5, {
    cycle: {
        opacity: [
            0, 0, 0,
            0, 1, 0,
            0, 0, 0,
        ]
    }
}, .3)
```

## Passando funções
O método cycle também aceita funções nas propriedades. Nessa função temos dois argumentos:

- index: que é o valor atual do elemento.
- taget: que é o elemento atual.

```
TweenMax.staggerTo(items, .5, {
    cycle: {
        x: function (index, target) {
            return index * 30
        }
    }
}, .3)

