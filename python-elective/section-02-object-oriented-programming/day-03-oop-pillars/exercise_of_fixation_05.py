class Rectangle:
    def __init__(self, width: float, height: float) -> None:
        self.width = width
        self.height = height

    def calculate_area(self) -> float:
        return self.width * self.height

    def calculate_perimetro(self) -> float:
        return 2 * (self.width + self.height)


print(
    f"\nA area do retangulo é de {Rectangle(10, 20).calculate_area()} m²", "\n"
)
print(
    "O perimetro do retangulo é de"
    + f"{Rectangle(10, 20).calculate_perimetro()} m",
    "\n",
)
