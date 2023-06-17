"""União

União: Todos os elementos que estão em A OU em B

* Crie um método com a assinatura abaixo,
que recebe como parâmetro outro objeto da classe Conjunto:

def union(self, conjunto_b):
# retorno: outro objeto Conjunto com união do próprio objeto com o conjunto_b

* Na main, instancie dois objetos do tipo Conjunto. Preencha o primeiro
com os valores de 1 a 10, e o segundo, com valores de 10 a 20;

* Imprima na tela a união dos dois conjuntos."""


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


if __name__ == "__main__":
    conj1 = Group_Set()
    for i in range(1, 11):
        conj1.add(i)

    conj2 = Group_Set()
    for i in range(10, 21):
        conj2.add(i)

    conj3 = conj1.union(conj2)

    print("\nConjunto 1:", conj1)
    print("\nConjunto 2:", conj2)
    print("\nConjunto 1 e 2 unidos:", conj3, "\n")
