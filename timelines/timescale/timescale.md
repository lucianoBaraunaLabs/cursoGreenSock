# Timescale

Podemos definir ações para controlar nossa timeline o tempo de execução da nossa
timeline.



```
fast.addEventListener('click', function() {
    tl.timeScale(5); // Adicionando + 5
    tl.play();
});
slow.addEventListener('click', function() {
    tl.timeScale(1/10); // Abaixo de 1 deixamos mais lento
    tl.play();
});
normal.addEventListener('click', function() {
    tl.timeScale(1); // Normal
    tl.play();
});
restart.addEventListener('click', function() {
    tl.restart(); // Reiniciamos
});
```
