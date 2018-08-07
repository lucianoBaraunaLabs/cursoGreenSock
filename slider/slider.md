## Anatoções

Sobre a função call:
A timeline aceita uma função de callback que pode ser usada em qualquer momento, que tem os seguintes parâmetros:
- Primeiro: é uma função
- Segundo: recebe uma lista de parâmetros que a função do primeiro argumento aceita
- O terceiro: é o escopo
- O quarto: é o tempo que ele é executado depois do método anterior

```
.call(Slider.in, [nextIndex], this, '-=1.5').set(texts, { clearProps: 'all' })
```