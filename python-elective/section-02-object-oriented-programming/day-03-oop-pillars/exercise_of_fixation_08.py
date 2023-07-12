class MonthlyExpense:
    def __init__(
        self,
        internet: float,
        supermarket: float,
        light: float,
        water: float,
        rent: float,
    ) -> None:
        self.internet = internet
        self.supermarket = supermarket
        self._light = light
        self._water = water
        self.__rent = rent

    def __str__(self) -> str:
        return (
            f"internet: {self.internet}, supermarket: {self.supermarket}, "
            f"light: {self._light}, water: {self._water}, rent: {self.__rent}"
        )

    def get_light(self) -> float:
        return self._light

    def set_light(self, new_value: float) -> float:
        self._light = new_value

    def get_water(self) -> float:
        return self._water

    def set_water(self, new_value: float) -> float:
        self._water = new_value


expenses = MonthlyExpense(
    internet=50.0, supermarket=200.0, light=80.0, water=30.0, rent=1000.0
)

print(f"\nDespesas -> {expenses}\n")
