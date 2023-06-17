def list_friends(friends):
    person_to_friends = {}

    for person_1, person_2 in friends:
        if person_1 not in person_to_friends:
            person_to_friends[person_1] = set()

        if person_2 not in person_to_friends:
            person_to_friends[person_2] = set()

        person_to_friends[person_1].add(person_2)
        person_to_friends[person_2].add(person_1)

    return person_to_friends


if __name__ == "__main__":
    #  friends = []
    #  print(list_friends(friends))
    #  # saída: {}

    #  friends = [("a", "c")]
    #  print(list_friends(friends))
    #  # saída: {'a': {'c'}, 'c': {'a'}}

    friends = [("a", "c"), ("c", "d"), ("d", "e"), ("d", "a")]
    print("\n", list_friends(friends), "\n")

    # saída:
    # {
    #  'a': {'c', 'd'},
    #  'c': {'d', 'a'},
    #  'd': {'e', 'c', 'a'},
    #  'e': {'d'}
    # }
