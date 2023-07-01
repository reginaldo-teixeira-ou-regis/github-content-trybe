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

3. Considere o exemplo de código a seguir:

```js
def insertion_sort(array):
    for i in range(1, len(array)):
        current_value = array[i]
        position = i

        while position > 0 and array[position - 1] > current_value:
            array[position] = array[position - 1]
            position -= 1

        array[position] = current_value

    return array


def main():

    array = [23, 423, 1, 54, 8, 980, 45, 768, 34, 55, 88, 99, 100, 234, 567]

    sorted_array = insertion_sort(array)

    print(f"Array ordenado: {sorted_array}")


if __name__ == "__main__":
    main()
```
* Descubra o valor de current_value na linha do while quando a soma de i e position for igual a 6 pela primeira vez.
