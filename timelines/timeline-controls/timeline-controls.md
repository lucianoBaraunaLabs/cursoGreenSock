# timeline-controls

Podemos definir ações para controlar nossa timeline.

Caso queira iniciar a animação pausada. Podemos passar a seguinte configuração no
construtor.

```
const tl = new TimelineMax({ paused: true });
```
E agora selecionamos os botões e aplicamos as funções.

```
play.addEventListener('click', function() {
    tl.play();
});
pause.addEventListener('click', function() {
    tl.pause();
});
resume.addEventListener('click', function() {
    tl.resume();
});
reverse.addEventListener('click', function() {
    tl.reverse();
});
restart.addEventListener('click', function() {
    tl.restart();
});
```
