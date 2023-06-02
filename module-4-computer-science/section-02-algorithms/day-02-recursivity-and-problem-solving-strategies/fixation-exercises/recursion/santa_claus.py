def deliver_christmas_gifts(houses):
    if len(houses) == 1:
        print("Entregando o presente para a", houses[0])
    else:
        half = len(houses) // 2
        first_half = houses[:half]
        second_half = houses[half:]

        deliver_christmas_gifts(first_half)
        deliver_christmas_gifts(second_half)


houses = [
    "Casa do Eduardo",
    "Casa do Rita",
    "Casa do Michelle",
    "Casa do Arthur",
    "Casa do Douglas",
    "Casa do Isaac",
]

deliver_christmas_gifts(houses)
