# Calcule a média aritmética dos valores contidos em uma lista.


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(f"\nA média é: {mean(numbers=(8, 7))}\n")
