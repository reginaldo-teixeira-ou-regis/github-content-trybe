# Implemente uma classe chamada Estatistica. Ela deve possuir um atributo
# numbers (uma lista de números) três métodos: um que calcula a média, um que
# calcula a mediana e outro que calcula a moda de uma lista de números.

# 🐦 Dica: Você pode utilizar sorted para te auxiliar no método mediana.
# 🐦 Dica: Você pode utilizar collections.
# Counter para te auxiliar no método da moda.

from collections import Counter


class Statistic:
    def __init__(self, numbers):
        self.numbers = numbers

    def average(self):
        return sum(self.numbers) / len(self.numbers)

    def median(self):
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def fashion(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number


numbers = [1, 2, 3, 4, 5, 6]
stats = Statistic(numbers)

avg = stats.average()
print("\nAverage:", avg)

med = stats.median()
print("\nMedian:", med)

mode = stats.fashion()
print("\nMode:", mode, "\n")
