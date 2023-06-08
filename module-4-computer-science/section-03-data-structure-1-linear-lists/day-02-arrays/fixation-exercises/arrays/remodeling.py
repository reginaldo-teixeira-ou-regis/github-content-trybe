"""Implemente um Reshape de Matriz

Capaz de remodelar a matriz em uma nova dimensões diferentes,
porém mantendo os dados originais.

Se algum erro ocorrer na remodelagem, a matriz original deve ser retornada.

Como percorrer uma matriz?
Resposta: Através de índices de linha e coluna (for dentro de for)

Como verificar se uma nova matriz é possível de ser gerada?
Resposta: novo tamanho da linha * novo tamanho da coluna é diferente
da multiplicação do número de linhas e colunas anterior.

O que acontece com uma matriz vazia?
Resposta: retorna a matriz vazia"""


def matrix_reshape(matrix, rows, columns):
    if not matrix:
        return matrix

    original_rows = len(matrix)
    original_columns = len(matrix[0])

    if original_rows * original_columns != rows * columns:
        return matrix

    resheaped_matrix = [[]]

    row_index = 0
    column_index = 0

    for row in matrix:
        for value in row:
            if column_index > columns:
                resheaped_matrix.append([])  # nova Linha
                row_index += 1

            resheaped_matrix[row_index].append(value)
            column_index += 1
    return resheaped_matrix


if __name__ == "__main__":
    # test1 = [          col1    col2
    #             row 1 [ 1   ,   2 ],
    #             row 2 [  3,     4 ]
    #         ]  # formatação apenas para ajudar a visualização

    test1 = [[1, 2], [3, 4]]  # formatação apenas para ajudar a visualização

    rows_1 = 1
    columns_1 = 4
    # saída: ??? 2x2 = 4 .... 1x4 = 4
    # [[ 1 , 2 , 3 , 4 ]]

    print("Matriz 1", matrix_reshape(test1, rows_1, columns_1))

    # --------------
    test2 = [[1, 2], [3, 4]]
    rows_2 = 2
    columns_2 = 4
    # saída: Original
    # [[1, 2],
    # [3, 4]] 2x2 = 4 .... 2x4 = 8
    print("Matriz 2", matrix_reshape(test2, rows_2, columns_2))

    # --------------
    test3 = []
    rows_3 = 2
    columns_3 = 2
    # saída: []
    print("Matriz 3", matrix_reshape(test3, rows_3, columns_3))
