"""
Dado um array de doces candies e um valor inteiro
extra_candies,onde o candies[i] representa o
número de doces que a enésima criança possui.

Para cada criança, verifique se caso ela ganhe
todos os extra candies, ela tem a possibilidade
de ser a crianças com o maior número de doces.
"""


def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    print(max_candies)

    result = []

    for value in candies:
        result.append(value + extra_candies >= max_candies)

    return result


if __name__ == "__main__":
    print(kids_with_candies([2, 3, 5, 1, 3], 3))
    # saída: [True, True, True, False, True]

    # kids = [2, 3, 5, 1, 3]

    # kids[0] = 2 # doces
    # kids[1] = 3 # doces
    # kids[2] = 5 # doces
    # ...
