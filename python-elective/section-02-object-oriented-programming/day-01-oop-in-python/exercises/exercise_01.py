from typing import List


def sum_list(values: List[int]) -> int:
    sum = 0
    for value in values:
        sum += value
    return sum


print(sum_list([1, 2, 3, 4, 5]))  # 15

print(sum_list([2, 4, 6, 8, 10, 20, 40, 80]))  # 170
