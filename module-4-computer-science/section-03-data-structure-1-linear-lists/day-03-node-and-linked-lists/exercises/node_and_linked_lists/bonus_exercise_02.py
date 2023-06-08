"""Remover duplicatas de uma DoublyLinkedList, atividade extraída e
adaptada do LeetCode. Nesta atividade será necessário implementar um
algoritmo que receba uma DoublyLinkedList como argumento e retorne uma
nova lista, sem elementos que possuem mais de uma ocorrência.

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2

⚠️ Faça a análise de complexidade da sua solução."""


from rich import print


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.length = 0

    def insert_last(self, value):
        new_node = Node(value)
        last_node = self.tail.prev

        last_node.next = new_node
        new_node.prev = last_node
        new_node.next = self.tail
        self.tail.prev = new_node

        self.length += 1

    def remove_first(self):
        if self.length == 0:
            return None

        first_node = self.head.next
        second_node = first_node.next

        self.head.next = second_node
        second_node.prev = self.head

        self.length -= 1

        return first_node.value

    def index_of(self, value):
        position = 0
        current = self.head.next
        while current != self.tail:
            if current.value == value:
                return position
            current = current.next
            position += 1
        return -1

    def print_list(self):
        current = self.head.next
        while current != self.tail:
            print(current.value, end=" -> ")
            current = current.next
        print("None")


def delete_duplicates(linked_list):
    list_with_unique_elements = DoublyLinkedList()

    while linked_list.length > 0:
        current_value = linked_list.remove_first()
        if linked_list.index_of(current_value) == -1:
            list_with_unique_elements.insert_last(current_value)

    return list_with_unique_elements


linked_list = DoublyLinkedList()
linked_list.insert_last(111)
linked_list.insert_last(111)
linked_list.insert_last(22)
linked_list.insert_last(343)
linked_list.insert_last(343)
linked_list.insert_last(343)
linked_list.insert_last(99)

print("\nlinked_list_with_duplicates:", end=" ")
linked_list.print_list()

new_list = delete_duplicates(linked_list)

print("\nlinked_list_without_duplicates:", end=" ")
new_list.print_list()

print(" ")

"""Resposta da análise de complexidade:

O método index_of percorre a lista toda,
e por isso sua Complexidade de tempo é O(n).

O método delete_duplicates percorre a lista toda para localizar
itens duplicados, e por isso sua Complexidade de tempo é O(n)."""
