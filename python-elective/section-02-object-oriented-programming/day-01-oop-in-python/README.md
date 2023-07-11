# Para Fixar

1. Modifique o código abaixo para que ele seja tipado corretamente.
```js
def add_two_numbers(num1, num2):
    return num1 + num2
```

2. Modifique o código abaixo para que ele seja tipado corretamente.
```js
class Pessoa:
    def __init__(self, nome, idade, altura):
        self.nome = nome
        self.idade = idade
        self.altura = altura
```

3. Crie a classe `Database`. Não precisa colocar nada dentro dela, somente a palavra reservada `pass`.

4. Crie dois objetos da classe `Database`, criada no exercício anterior, instanciando-os.

5. Cria uma classe `Carro` e, depois, atribua valores aos atributos `marca`, `modelo`, `ano` e `cor`.

6. Com base na classe `Carro` do exercício anterior, crie um método `identificar` que imprima “Meu carro é um `modelo`, da `marca`. Ele é do `ano` e tem a cor `cor`“.

7. Crie um método construtor para a classe `Database` criada no exercício 3. O método deve receber os seguintes parâmetros:

`dialect`
`user`
`host`
`password`
`database`
`port` (opcional)

O parâmetro `port` pode ser do tipo `str` ou `int`, devendo ser um valor numérico, levantando `ValueError` caso contrário. Os demais parâmetros devem ser do tipo `str`.

`De olho na dica 👀`: utilize a seguinte docstring, salve seu código em um arquivo `app.py` e valide sua implementação por meio do comando `python -m doctest app.py`, que não vai gerar nenhuma saída em caso de sucesso. Se você incluir algum `print` verá o valor impresso na tela.
```js
"""Creates a Database instance

Parameters
----------
dialect : str
user : str
host : str
password : str
database : str
port : str | int, optional, by default ""

>>> database = Database(
...     dialect = "",
...     user = "",
...     host = "",
...     password = "",
...     database = "",
...     port = "a",
... )
Traceback (most recent call last):
...
ValueError: `port` must have a numeric value
"""
```

8. O método construtor de `Database` deve criar um atributo chamado `connection_url`, no formato `dialect://username:password@host:port/database`.

Adote as portas padrão dos serviços do MySQL e PostgreSQL. Se o dialeto não for nenhum desses dois e a porta não for especificada, levante um `ValueError`.

`Dica`: Adicione à docstring do exercício anterior mais doctests:
```js
"""
>>> Database(
...     dialect = "",
...     user = "",
...     host = "",
...     password = "",
...     database = "",
... )
Traceback (most recent call last):
...
ValueError: invalid default `port` for unrecognized `dialect`

>>> print(Database(
...     dialect = "postgres",
...     user = "tryber",
...     host = "trybe",
...     password = "i_love_python",
...     database = "computer_science",
... ).connection_url)
postgres://tryber:i_love_python@trybe:5432/computer_science
"""
```

9. Crie as classes `Motocicleta` e `Caminhao` e inicialize as duas com o atributo `velocidade_maxima`.

10. Utilize as classes criadas no exercício anterior para criar uma função `print_velocidade_maxima` que recebe um objeto e imprime a velocidade máxima dele. Retorne uma mensagem de erro com um `TypeError` caso o veículo passado como argumento não seja uma motocicleta.
