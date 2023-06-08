"""Aprimorando a classe Lista: nossa classe Lista atende as principais
operações que essa TAD nos oferece, mas que tal melhorarmos? Para isso,
você deve adicionar os seguintes métodos:

a. A operação clear nos permite remover todos os Nodes da lista;

b. A operação __get_node_at nos permite acessar o Node em qualquer
posição da lista.

Após criada as operações anteriores, refatore os seguintes métodos
para que utilizem a __get_node_at ante iterações:

insert_at;

insert_last;

remove_last;

remove_at;

get_element_at.

⚠️ Faça a análise de complexidade da sua solução."""


from rich import print


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.__length = 0

    def __str__(self):
        values = []
        current = self.head
        while current:
            values.append(str(current.value))
            current = current.next
        return " -> ".join(values)

    def insert_first(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            self.insert_first(value)
        elif position >= len(self):
            self.insert_last(value)
        else:
            current_value = self.__get_node_at(position - 1)
            next_value = Node(value)
            next_value.next = current_value.next
            current_value.next = next_value
            self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            self.insert_first(value)
        else:
            new_last_value = Node(value)
            actual_last_value = self.__get_node_at(len(self) - 1)
            actual_last_value.next = new_last_value
            self.__length += 1

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        elif position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def __get_node_at(self, position):
        if position < 0 or position >= len(self):
            return None

        current = self.head
        for _ in range(position):
            current = current.next

        return current

    def __len__(self):
        return self.__length

    def is_empty(self):
        return self.__length == 0

    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")


linked_list = LinkedList()

linked_list.insert_last(15)
print("\nFoi adicionado o numero 15 na linked_list = [", linked_list, "]")

linked_list.insert_last(99)
print("\nFoi adicionado o numero 99 na linked_list = [", linked_list, "]")

linked_list.insert_last(33)
print("\nFoi adicionado o numero 33 na linked_list = [", linked_list, "]")

linked_list.insert_at(10, 1)
print(
    "\nFoi adicionado o numero 10 na posição 1 da linked_list = [",
    linked_list,
    "]",
)

linked_list.insert_at(20, 3)
print(
    "\nFoi adicionado o numero 20 na posição 3 da linked_list = [",
    linked_list,
    "]\n",
)

linked_list.print_list()

removed_element = linked_list.remove_at(2)
print("\nElemento na posição 2 removido:", removed_element.value)

print("\nlinked_list = [", linked_list, "]")

element = linked_list.get_element_at(2)
print("\nBuscando o elemento na posição 2:", element.value, "\n")


"""Resposta da análise de complexidade:

O método __get_node_at realiza a busca de um item em qualquer local da lista,
portanto sua Complexidade de tempo é O(n).

O método insert_at realiza a inserção de um item em qualquer lugar da lista,
portanto sua Complexidade de tempo é O(n).

O método insert_last realiza a inserção de um item no final da lista,
portanto sua Complexidade de tempo é O(1).

O método remove_last realiza a remoção de um item do final da lista,
portanto sua Complexidade de tempo é O(1).

O método remove_at realiza a remoção de um item em qualquer lugar da lista,
portanto sua Complexidade de tempo é O(n).

O método get_element_at realiza a busca de um item em qualquer local da lista,
portanto sua Complexidade de tempo é O(n)."""
