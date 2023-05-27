# Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

array_numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


print(
    f"\nO menor numero do array {array_numbers} é: {minimum(array_numbers)}\n"
)

# 🦜 Dica: a função min já existe nativamente no Python!
# Trabalhando em Python, sempre compensa pesquisar uma solução primeiro
# porque este brinquedo vem com todos os acessórios inclusos!


def minimum(numbers):
    return min(numbers)


print(f"O menor numero do array {array_numbers} é: {minimum(array_numbers)}\n")


# ou mesmo
# minimum2 = min
print(f"O menor numero do array {array_numbers} é: {min(array_numbers)}\n")
