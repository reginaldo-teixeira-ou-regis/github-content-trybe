# Exercicios

1. Implemente uma classe que contenha os atributos e os métodos a seguir.

Atributos:

* `volume` - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
* `canal` - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
* `tamanho` - será inicializado com o valor do parâmetro;
* `ligada` - será inicializado com o valor de `False`, pois está inicialmente desligado.

Todos os atributos devem ser privados.

Métodos:

* `aumentar_volume` - aumenta o volume de 1 em 1 até o máximo de 99;
* `diminuir_volume` - diminui o volume de 1 em 1 até o mínimo de 0;
* `modificar_canal` - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites;
* `ligar_desligar` - alterna o estado da TV entre ligado e desligado (`True`/`False`).

2. Implemente uma classe `Estatistica`

Ela deve possuir um atributo `numbers` (uma lista de números) com três métodos: um que calcula a média, um que calcula a mediana mediana e outro que calcula a moda de uma lista de números.

* `🐦 Dica`: você pode utilizar `sorted` para te auxiliar no método `mediana`.
* `🐦 Dica`: você pode utilizar `collections.Counter` para te auxiliar no método da `moda``.

3. Implemente as classes das figuras geométricas

Você deverá implementar as seguintes classes:

* `FiguraGeometrica`, uma classe abstrata com os métodos abstratos `area` e `perimetro`.
* `Quadrado`, que herda de `FiguraGeometrica` e adiciona o atributo `lado`.
* `Retangulo`, que herda de `FiguraGeometrica` e adiciona os atributos `base` e `altura`.
* `Circulo`, que herda de `FiguraGeometrica` e adiciona o atributo `raio`.
