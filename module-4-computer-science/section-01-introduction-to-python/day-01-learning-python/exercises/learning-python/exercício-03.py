# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:

# n = 5

# *****
# *****
# *****
# *****
# *****

# 🦜Dica: Python sabe multiplicar sequências!
# Por exemplo, 3 * 'bla' resulta em blablabla.
# Isso se aplica a listas também, caso você precise.

# Sentiu aí um certo dejavu? 😁

def draw_square(n):
    for row in range(n):
        print(n * '*')


print(' ')
draw_square(n=5)
print(' ')
