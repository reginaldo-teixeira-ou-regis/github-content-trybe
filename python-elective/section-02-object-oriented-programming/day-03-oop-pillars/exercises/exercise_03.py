from abc import ABC, abstractmethod
from math import pi as PI


class GeometricFigure(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError


class Square(GeometricFigure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return 4 * self.side


class Rectangle(GeometricFigure):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


class Circle(GeometricFigure):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return PI * self.radius * self.radius

    def perimeter(self):
        return 2 * PI * self.radius


square = Square(5)
print("\nA area do quadrado é: ", square.area(), "m²")  # 25
print("O perimetro do quadrado é :", square.perimeter(), "m\n")  # 20

rectangle = Rectangle(4, 6)
print("A area do retangulo é: ", rectangle.area(), "m²")  # 24
print("O perimetro do retangulo é :", rectangle.perimeter(), "m\n")  # 20

circle = Circle(3)
print("A area do circulo é: ", circle.area(), "m²")  # 28.274333882308138
print("O perimetro do circulo é :", circle.perimeter(), "m\n")
# 18.84955592153876
