# Calcule a média aritmética dos valores contidos em uma lista

arrayNumber = [1, 5, 12, 25, 39, 40, 55, 69, 71, 88, 91, 99, 111]

arrayNumber2 = [10, 8, 12]


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(f"\n{mean(arrayNumber)}\n")

print(f"{mean(arrayNumber2)}\n")
