# Você deverá implementar as seguintes classes:

# * FiguraGeometrica, uma classe abstrata com os seguintes métodos abstratos
#   * area
#   * perimetro
# * Quadrado, que herda de FiguraGeometrica e adiciona o atributo lado
# * Retangulo, que herda de FiguraGeometrica
# e adiciona os atributos base e altura
# * Circulo, que herda de FiguraGeometrica e adiciona o atributo raio

from abc import ABC, abstractmethod
from math import pi as PI


class Geometric_Figure(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError


class Square(Geometric_Figure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return 4 * self.side


class Rectangle(Geometric_Figure):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return 2 * (self.base + self.height)


class Circle(Geometric_Figure):
    def __init__(self, ray):
        self.ray = ray

    def area(self):
        return PI * self.ray * self.ray

    def perimeter(self):
        return 2 * PI * self.ray


square = Square(side=5)
rectangle = Rectangle(base=4, height=6)
circle = Circle(ray=3)

print(
    "\nSquare:\n  Area:",
    square.area(),
    "\n  Perimeter:",
    square.perimeter(),
    "\n",
)

print(
    "Rectangle:\n  Area:",
    rectangle.area(),
    "\n  Perimeter:",
    rectangle.perimeter(),
    "\n",
)

print(
    "Circle:\n  Area:",
    circle.area(),
    "\n  Perimeter:",
    circle.perimeter(),
    "\n",
)
