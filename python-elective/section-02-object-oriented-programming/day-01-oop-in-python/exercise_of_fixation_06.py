class Car:
    def identify(self, brand: str, model: str, year: int, color: str) -> None:
        print(
            f"Meu carro é um(a) {model}, da marca {brand}."
            + f" Ele é do ano {year} e tem a cor {color}."
        )


car = Car()

car.identify("Fiat", "Uno", 2010, "vermelha")
