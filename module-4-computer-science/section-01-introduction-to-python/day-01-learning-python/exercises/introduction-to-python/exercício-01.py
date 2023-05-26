# Crie uma função que receba dois números e retorne o maior deles

def bigger(number, other):
    if other > number:
        return other
    return number


print(f"\nO maior numero é: {bigger(15, 9)}\n")
