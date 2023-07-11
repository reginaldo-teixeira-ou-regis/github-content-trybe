from typing import List


def soma_lista(valores: List[int]) -> int:
    soma = 0
    for valor in valores:
        soma += valor
    return soma
