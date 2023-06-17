"""is_in

Caso queiramos saber se um elemento faz parte ou não do conjunto usando o
operador in, precisamos que a nossa classe tenha um método chamado __contains__
e é o que faremos agora:

* Crie um método com a assinatura abaixo:

def __contains__(self, item):
# retorno: True, caso o elemento faça parte.
False, caso o elemento não faça parte.

* Exemplos de entrada e saída:

A = {1, 2, 3}

# entrada: 1
# saída: True

# entrada: 0
# saída: False"""


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


if __name__ == "__main__":
    conj = Group_Set()
    for i in [1, 2, 3]:
        conj.add(i)
    print("\nConjunto de elementos:", conj)
    print("\nO elemento 1 faz parte do conjunto:", 1 in conj)
    print("\nO elemento 0 faz parte do conjunto:", 0 in conj, "\n")
