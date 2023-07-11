class Car:
    def __init__(self, model: str, year: int) -> None:
        self.model = model
        self.year = year
        self.speed = 0

    def accelerate(self, quantity: int) -> None:
        self.speed += quantity
        print(
            f"O carro {self.model} do ano {self.year} "
            f"acelera a {self.speed} km/h"
        )

    def decelerate(self, quantity: int) -> None:
        self.speed -= quantity
        print(
            f"O carro {self.model} do ano {self.year} "
            f"desacelera a {self.speed} km/h"
        )


car = Car("Fusca", 1980)
car.accelerate(20)
car.decelerate(10)
# O carro Fusca do ano 1980 acelera a 20 km/h
# O carro Fusca do ano 1980 desacelera a 10 km/h
