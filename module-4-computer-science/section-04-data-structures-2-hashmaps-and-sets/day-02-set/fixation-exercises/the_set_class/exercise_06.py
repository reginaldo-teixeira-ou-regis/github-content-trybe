"""Continue os exercícios de fixação para terminar
de implementaras operações de conjuntos:

* difference;
* issubset;
* issuperset."""


class Group_Set:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, group_set_b):
        new_group_set = Group_Set()

        for index in range(1001):
            if self.set[index] or group_set_b.set[index]:
                new_group_set.add(index)

        return new_group_set

    def intersection(self, group_set_b):
        new_group_set = Group_Set()

        for index in range(1001):
            if self.set[index] and group_set_b.set[index]:
                new_group_set.add(index)

        return new_group_set

    def difference(self, group_set_b):
        new_group_set = Group_Set()

        for index in range(1001):
            if self.set[index] and not group_set_b.set[index]:
                new_group_set.add(index)

        return new_group_set

    def issubset(self, group_set_b):
        for index in range(1001):
            if self.set[index] and not group_set_b.set[index]:
                return False

        return True

    def issuperset(self, group_set_b):
        for index in range(1001):
            if group_set_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj1 = Group_Set()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Group_Set()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = Group_Set()
    conj4 = conj1.union(conj2)

    print("\nConjunto 1:", conj1)
    print("\nConjunto 2:", conj2)
    print("\nConjunto 3:", conj3)
    print("\nConjunto 4:", conj4)

    print("\nO conjunto 1 é um subset do 4:", conj1.issubset(conj4))
    print("\nO conjunto 4 é um superset do 1:", conj4.issuperset(conj1))
    print("\nO conjunto 3 é um subset do 4:", conj3.issubset(conj4), "\n")
