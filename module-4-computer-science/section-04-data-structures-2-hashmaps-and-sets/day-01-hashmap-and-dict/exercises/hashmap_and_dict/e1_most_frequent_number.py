"""Dada uma lista de frutas,
retorne a fruta que possui mais quantidade e seu total."""


def find_most_common_fruit(fruits):
    fruits_counts = {fruit: 0 for fruit in fruits}
    print("\n", {fruit: 0 for fruit in fruits})

    most_common_fruit = ""
    max_occurrences = 0

    for fruit in fruits:
        fruits_counts[fruit] += 1

        if fruits_counts[fruit] > max_occurrences:
            most_common_fruit = fruit
            max_occurrences = fruits_counts[fruit]

    return (most_common_fruit, max_occurrences)


if __name__ == "__main__":
    fruits = [
        "🍌",
        "🍌",
        "🍓",
        "🍎",
        "🍎",
        "🍎",
        "🍇",
        "🍇",
        "🍇",
        "🍓",
        "🍓",
        "🍓",
        "🍓",
        "🍓",
    ]
    most_common, count = find_most_common_fruit(fruits)
    print("\nA fruta mais frequente é:", most_common)
    print("\nQuantidade:", count, "\n")
