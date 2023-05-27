# Percorra a lista do exercício 13 e imprima
# “Múltiplo de 3” se o elemento for divisível por 3.

ratings = [-15, 6, 8, 5, 9, 10, 11, 12, 21, 99]

for rating in ratings:
    # o sinal % representa a operação "resto".
    # se o resto é zero, é divisível
    if (rating % 3) == 0:
        print(f'\n{rating} é múltiplo de 3')

print(" ")
