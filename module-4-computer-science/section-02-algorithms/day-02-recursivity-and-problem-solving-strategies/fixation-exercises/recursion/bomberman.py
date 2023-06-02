# Programe a bomba explodindo no Bomberman


def bomb(number: int):
    if number == 0:
        print("💥")
        return

    print(f"->> {number}")
    bomb(number - 1)


if __name__ == "__main__":
    bomb(3)
