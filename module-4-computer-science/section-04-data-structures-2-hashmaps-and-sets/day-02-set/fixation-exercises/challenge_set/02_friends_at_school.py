# Pedro é zelador de uma escola primária
# e todos os dias ele recebe as crianças no portão.
# Amanhã é dia de "Dia das Crianças" e ele quer dar um
# saquinho de doces para cada um. Ele não sabe quantas crianças
# estudam na escola, mas sabe quem é amigo de quem.
# Ajude Pedro a descobrir quantos saquinhos de doce ele precisa preparar.


def num_children(friends):
    unique_children = set()

    for x, y in friends:
        unique_children.add(x)
        unique_children.add(y)

    return len(unique_children)


if __name__ == "__main__":
    friends = []
    print("\nTuplas de amigos:", friends)
    print("Quantidade de amigos:", num_children(friends))
    #  0

    friends = [("a", "c"), ("c", "d"), ("d", "e"), ("d", "a")]
    # a , d , c , e -> 4
    print("\nTuplas de amigos:", friends)
    print("Quantidade de amigos:", num_children(friends))

    friends = [
        ("d", "a"),
        ("f", "z"),
        ("g", "i"),
        ("f", "r"),
        ("a", "f"),
        ("r", "l"),
        ("g", "h"),
        ("e", "h"),
        ("h", "d"),
        ("z", "g"),
        ("f", "g"),
    ]

    # d , a , f , z , g , i , r, l, h, e, 10

    print("\nTuplas de amigos:", friends)
    print("Quantidade de amigos:", num_children(friends), "\n")
