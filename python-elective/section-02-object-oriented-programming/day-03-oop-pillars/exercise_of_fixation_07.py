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
