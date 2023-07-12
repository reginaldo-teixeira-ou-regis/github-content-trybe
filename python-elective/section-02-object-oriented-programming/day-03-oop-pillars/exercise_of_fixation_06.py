class Rectangle:
    def __init__(self, width: float, height: float) -> None:
        self.width = width
        self.height = height

    def calculate_area(self) -> float:
        return self.width * self.height

    def calculate_perimetro(self) -> float:
        return 2 * (self.width + self.height)


rectangle = Rectangle(5, 10)
print("\nÁrea:", rectangle.calculate_area(), "m²\n")  # Área: 50
print("Perímetro:", rectangle.calculate_perimetro(), "m\n")  # Perímetro: 30
