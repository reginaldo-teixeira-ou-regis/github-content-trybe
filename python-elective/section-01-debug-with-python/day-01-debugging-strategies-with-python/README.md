# Para Fixar

1. Responda as seguintes perguntas:

* Qual a importância de debugar o código?
* Quais são as formas mais comuns de debugar código em Python?
* Quais as vantagens de usar debugger do VS Code?

2. Considere o exemplo de código a seguir:

```js
from math import factorial


def map_factorial(numbers):
    result = []

    for num in numbers:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()
Sem alterar o código, descubra qual exceção é levantada se:
```

* Um dos elementos da input_list for um inteiro negativo.
* Um dos elementos da input_list for uma string.
