"""
Dado um array de números inteiros que representam uma
avaliação a respeito de um ponto turístico.
E a distância entre seus índices representam a distância
entre os pontos turísticos

Calcule a máxima pontuação obtida a partir
de um par de pontos turísticos.
Para calcular a pontuação some as avaliações dos dois
pontos e em seguida subtraia a distância entre eles.
"""


def max_score_sightseeing_spot(array):
    answer = 0
    previous = 0

    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)

    return answer


if __name__ == "__main__":
    spots = [8, 1, 5, 2, 6]  # R: 11
    print("Score Ex.1=", max_score_sightseeing_spot(spots))
    # answer =  A[i] + i + A[j] - j
    # answer =  ?    + ? +  ?   - ?

    spots = [4, 1, 5, 2, 6]  # R: 9
    # answer =  A[i] + i + A[j] - j
    # answer =  ?    + ? +  ?   - ?
    print("Score Ex.2=", max_score_sightseeing_spot(spots))
