from math import factorial


def map_factorial(numbers):
    result = []

    for num in numbers:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()
    # output = main()
    # print(output)

'''Se um dos elementos da input_list for um inteiro negativo,
a Exception has occurred: ValueError,
factorial() not defined for negative values

Se um dos elementos da input_list for uma string,
a Exception has occurred: TypeError,
'str' object cannot be interpreted as an integer'''
