"""Sua trajetória no curso foi um sucesso e agora você está trabalhando
para a Trybe! Em um determinado módulo, os estudantes precisam entregar
dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue,
o nome da pessoa fica registrado. Precisamos saber como está o andamento da
entrega das listas. Para isso, você tem acesso aos nomes das pessoas da turma,
bem como ao log de quem já entregou qual lista. A partir das listas abaixo,
utilize a classe já criada e imprima os resultados das perguntas abaixo:

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

1. Quem ainda não entregou a lista1?
2. Quem já entregou as duas listas?
3. Quem já entregou qualquer uma das duas listas?
4. Quem ainda não entregou nenhuma das listas?"""


class Group_Set:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

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

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string


if __name__ == "__main__":
    conj_students = Group_Set()
    conj_list01 = Group_Set()
    conj_list02 = Group_Set()

    students = [1, 2, 3, 4, 5, 6, 7]
    list01_delivered = [1, 4, 7, 3]
    list02_delivered = [3, 1, 6]

    for elem in students:
        conj_students.add(elem)

    for elem in list01_delivered:
        conj_list01.add(elem)

    for elem in list02_delivered:
        conj_list02.add(elem)

    print("\nEstudantes:", students)
    print("\nLista 1 entregues:", list01_delivered)
    print("\nLista 2 entregues:", list02_delivered)

    print(
        "\nNão entregaram a lista 1:", conj_students.difference(conj_list01)
    )
    print(
        "\nJá entregaram as 2 listas:", conj_list01.intersection(conj_list02)
    )
    print(
        "\nQuem já entregou pelo menos uma lista:",
        conj_list01.union(conj_list02),
    )
    print(
        "\nQuem não entregou nenhuma:",
        conj_students.difference(conj_list01.union(conj_list02)),
        "\n",
    )
