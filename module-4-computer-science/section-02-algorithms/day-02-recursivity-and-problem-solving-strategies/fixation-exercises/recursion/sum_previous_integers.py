# Some os inteiros anteriores de um número


def sum_to(number: int) -> int:
    if number == 0:
        return number

    return number + sum_to(number - 1)


if __name__ == "__main__":
    # 4 + 3 + 2 + 1 + 0 = 10
    # 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
    print(sum_to(6))
