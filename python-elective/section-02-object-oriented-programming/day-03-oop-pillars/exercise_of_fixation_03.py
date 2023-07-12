class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self):
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self):
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def yap(self):
        print(f"{self.name} faz au au!")


dog = Dog("Rex")
dog.make_sound()  # Rex fazendo som
dog.breastfeed()  # Rex amamentando
dog.yap()  # Rex faz au au!
