# Para Fixar

1. Crie uma classe chamada `Vehicle`, que possui um atributo `name` do tipo string, `capacity` do tipo inteiro e um método `move`, que recebe um parâmetro `distance` do tipo inteiro e que retorna a mensagem `'{self.name} carried {self.capacity} people across {distance} kilometers.'`. Crie uma classe `Car` que herda de `Vehicle` e modifica o método `move` para indicar, no começo da frase já existente, que foi especificamente um carro que levou as pessoas. Crie uma classe `Motorcycle` que herda de `Vehicle` e que tem capacidade fixada em 2.

* Faça um print das mensagens de um carro e de uma moto se movendo.

2. Crie uma classe chamada `Contact` (contato), que deverá ter os atributos `name` e `email`. Crie uma classe chamada `ContactList` que deverá ter os atributos do tipo lista `contacts` e `favorites`. Esta classe deverá ter os métodos:

* `add_contact`: recebe um contato e o adiciona na lista
* `remove_contact`: recebe um nome e o remove da lista, retornando-o
* `add_to_favorites`: recebe um nome e o move da lista de contatos para a de favoritos
* `remove_from_favorites`: recebe um nome e o move da lista de favoritos para a de contatos

Os três últimos métodos devem levantar um `LookupError` no caso do contato não ser encontrado.

3. Crie uma classe `Animal` com um atributo `nome` e um método `fazer_som` que imprime “Animal fazendo som”. Depois, crie uma classe `Mamifero` que herda de `Animal` e tenha um método `amamentar`. Por fim, crie uma classe `Cachorro` que herda de `Mamifero` e tenha um método `latir` e imprima “Au au!”.

4. Utilize a sua solução do exercício anterior e faça um mixin que conterá um método para mostrar a velocidade que o cachorro está correndo.

5. Crie uma classe chamada `Retangulo` que represente um retângulo com os atributos `base` e `altura`. A classe deve ter métodos para calcular a área e o perímetro do retângulo.

6. Com base no exercício anterior, instancie um objeto da classe `Retangulo` com os valores `base = 5` e `altura = 10` e chame os métodos `calcular_area` e `calcular_perimetro`. Observe como quem usa a classe não precisa entender como o calculo é feito.

7. Crie uma classe `GastoMensal` que contenha os seguintes atributos:

* `internet`: público
* `supermercado`: público
* `luz`: protegido
* `agua`:protegido
* `aluguel`: privado

8. Utilize o código que você criou no exercício anterior e crie os métodos `get` e `set` para os atributos `luz` e `agua`.

9. Crie a seguinte estrutura:

* 1. Uma classe `Produto` com os atributos `nome` e `preco` e os métodos `descrever` e `preco`;
* 2. Uma classe `Livro` que herda de `Produto` e tem os mesmos atributos da superclasse mais o atributo `autor` e os métodos `descrever` e `preco`;
* 3. Uma classe `DVD` que herda de `Produto` e tem os mesmos atributos da superclasse mais o atributo `diretor` e os métodos `descrever` e `preco`.

10. Agora, crie uma função `imprimir_detalhes` para mostrar na tela informações sobre os seguintes produtos:
```js
Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
```
