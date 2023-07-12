from collections import Counter


class Statistics:
    def __init__(self, numbers):
        self.numbers = numbers

    def average(self):
        return sum(self.numbers) / len(self.numbers)

    def median(self):
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index] + numbers[index - 1]) / 2.0

        return numbers[index]

    def mode(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number


numbers = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7]
statistics = Statistics(numbers)

print("Mean:", statistics.average())  # Mean: 4.5
print("Median:", statistics.median())  # Median: 5.5
print("Mode:", statistics.mode())  # Mode: 6
