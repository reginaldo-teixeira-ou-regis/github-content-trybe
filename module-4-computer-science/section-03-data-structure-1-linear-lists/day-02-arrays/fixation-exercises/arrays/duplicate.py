"""
Dado um array de números,
verifiquem se o array possui algum elemento duplicado.
Sua função deve retornar True
se algum valor aparece pelo menos duas vezes no array
e False caso todos os elementos sejam distintos.
"""

# def contains_duplicate(nums):
#     return len(nums) != len(set(nums))


def contains_duplicate(nums):
    nums.sort()
    # [1, 1, 2, 3] ???
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


# def contains_duplicate(nums):
#     nums_copied = nums.copy()
#     # nums = [1, 2, 3, 1]
#
#     NECESSITA DE UM FOR PARA O X o(nˆ2)
#     if len(nums_copied) > 0:
#         x = nums_copied.pop(0)
#     else:
#         return False

#     for num in nums_copied:
#         if x == num:
#             return True
#     return False

if __name__ == "__main__":
    test1 = [1, 2, 3, 1]  # True

    test2 = []  # False

    test3 = [1, 2, 3, 4]  # False

    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # True

    print(test1, contains_duplicate(test1))

    print(test2, contains_duplicate(test2))

    print(test3, contains_duplicate(test3))

    print(test4, contains_duplicate(test4))
