class Motocicleta:
    def __init__(self, velocidade_maxima: int) -> None:
        self.velocidade_maxima = velocidade_maxima


class Caminhao:
    def __init__(self, velocidade_maxima: int) -> None:
        self.velocidade_maxima = velocidade_maxima


cg_150 = Motocicleta("120 km/h")
yamaha_R1 = Motocicleta("300 km/h")
ford_C_2042 = Caminhao("140 km/h")

print(cg_150.velocidade_maxima)
print(yamaha_R1.velocidade_maxima)
print(ford_C_2042.velocidade_maxima)
