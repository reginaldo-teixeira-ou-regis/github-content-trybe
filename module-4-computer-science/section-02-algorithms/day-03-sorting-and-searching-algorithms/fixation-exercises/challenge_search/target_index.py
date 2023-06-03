# https://pythontutor.com/live.html#mode=edit

# Dado um array ordenado e um número alvo,
# retorne o índice caso o alvo seja encontrado,
# se não retorne o índice onde o alvo deve ser inserido.
# Você pode assumir que não teremos valores duplicados.

# USANDO BUSCA BINÁRIA
def search_insert(numbers, target):
    low_index = 0
    high_index = len(numbers)

    while low_index < high_index:
        middle_index = (low_index + high_index) // 2

        if numbers[middle_index] < target:
            low_index = middle_index + 1
        else:
            high_index = middle_index
    return low_index


if __name__ == "__main__":
    test1 = [1, 3, 5, 6, 7]
    target1 = 5
    # saída: 3
    print(f"Posição a ser inserido {search_insert(test1, target1)}")

    test2 = [1, 3, 5, 6]
    target2 = 2
    # saída: 1
    print(f"Posição a ser inserido {search_insert(test2, target2)}")

    test3 = [1, 3, 5, 6]
    target3 = 7
    # saída: 4
    print(f"Posição a ser inserido {search_insert(test3, target3)}")

    test4 = [1, 3, 5, 6]
    target4 = 0
    # saída: 0
    print(f"Posição a ser inserido {search_insert(test4, target4)}")
