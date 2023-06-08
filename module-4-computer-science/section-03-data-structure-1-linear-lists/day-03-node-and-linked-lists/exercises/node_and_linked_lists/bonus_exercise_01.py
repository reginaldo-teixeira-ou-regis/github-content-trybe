"""Remover duplicatas de uma LinkedList, atividade extraída e adaptada
do LeetCode. Nesta atividade será necessário implementar um algoritmo
que receba uma LinkedList como argumento e retorne uma nova lista sem
elementos duplicados. Esta função deve respeitar a complexidade O(n).

Exemplo:

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3

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

    def insert_last(self, value):
        if self.head is None:
            self.head = Node(value)
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = Node(value)
        self.__length += 1

    def remove_first(self):
        if self.head is None:
            return None
        else:
            value = self.head.value
            self.head = self.head.next
            self.__length -= 1
            return value

    def index_of(self, value):
        position = 0
        current = self.head
        while current is not None:
            if current.value == value:
                return position
            current = current.next
            position += 1
        return -1

    def print_list(self):
        current = self.head
        while current is not None:
            print(current.value, end=" -> ")
            current = current.next
        print("None")


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list.head is not None:
        current_value = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_value) == -1:
            list_with_unique_elements.insert_last(current_value)

    return list_with_unique_elements


linked_list = LinkedList()

linked_list.insert_last(11)
linked_list.insert_last(13)
linked_list.insert_last(13)
linked_list.insert_last(32)
linked_list.insert_last(34)
linked_list.insert_last(34)
linked_list.insert_last(34)
linked_list.insert_last(44)
linked_list.insert_last(71)

print("\nlinked_list_with_duplicates:", end=" ")
linked_list.print_list()

new_list = delete_duplicates(linked_list)

print("\nlinked_list_without_duplicates:", end=" ")
new_list.print_list()

print(" ")

"""Nota: são sim realizadas iterações (for 1 a N) 2x, sendo uma vez
no index_of e uma vez no insert_last. Contudo, como visto na aula de
complexidade de algoritmo, o resultado de 2 x N é O(n),
pois a constante 2 é descartada."""
