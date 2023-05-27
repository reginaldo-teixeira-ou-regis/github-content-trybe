# Crie uma função que receba dois números e retorne o maior deles.


def bigger(number, other):
    if other > number:
        return other
    return number


print(f"\nO maior numero é {bigger(number=28, other=23)}\n")
