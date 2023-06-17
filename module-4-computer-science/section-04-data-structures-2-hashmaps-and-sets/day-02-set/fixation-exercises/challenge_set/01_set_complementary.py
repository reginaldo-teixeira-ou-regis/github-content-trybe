def necessary_buy(cards):
    cards_unique = set(cards)

    all_the_cards = set(range(1, 21))
    return all_the_cards - cards_unique


if __name__ == "__main__":
    my_cards = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
    print("\nMinhas figurinhas:", my_cards)
    print("Preciso comprar:", necessary_buy(my_cards))

    my_cards = [1, 2, 3, 3, 3, 3]
    print("\nMinhas figurinhas:", my_cards)
    print("Preciso comprar:", necessary_buy(my_cards))

    my_cards = [1002, 1004, 1009]
    print("\nMinhas figurinhas:", my_cards)
    print("Preciso comprar:", necessary_buy(my_cards))

    my_cards = []
    print("\nMinhas figurinhas:", my_cards)
    print("Preciso comprar:", necessary_buy(my_cards), "\n")
