# Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.

# 🦜 Dica:
#   * Três lados formam um triângulo quando a soma
# de quaisquer dois lados for maior que o terceiro;
#   * Triângulo Equilátero: três lados iguais;
#   * Triângulo Isósceles: quaisquer dois lados iguais;
#   * Triângulo Escaleno: três lados diferentes.

def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(f"\n{type_of_triangle(14, 20, 36)}\n")

print(f"{type_of_triangle(20, 20, 20)}\n")

print(f"{type_of_triangle(14, 20, 14)}\n")

print(f"{type_of_triangle(14, 20, 16)}\n")
