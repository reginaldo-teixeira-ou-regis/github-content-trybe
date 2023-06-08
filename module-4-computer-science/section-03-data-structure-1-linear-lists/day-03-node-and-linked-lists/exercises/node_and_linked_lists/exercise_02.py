"""Nova busca: até o momento nossa estrutura consulta elementos através
da posição. Nesta atividade será necessário criar uma função chamada def
index_of(self, value), onde ela será responsável por consultar na lista a
existência do valor informado e retornar a posição da primeira ocorrência.
Caso o valor não exista, considere retornar -1. Esta função deve respeitar
a complexidade O(n).

⚠️ Faça a análise de complexidade da sua solução."""

# from rich import print


# def index_of(self, value):
#     position = 1
#     current_value = self.head_value
#     while current_value:
#         if current_value.value == value:
#             return position
#         current_value = current_value.next
#         position += 1
#     return -1


from rich import print


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def __str__(self):
        values = []
        current = self.head
        while current:
            values.append(str(current.value))
            current = current.next
        return " -> ".join(values)

    def insert_last(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def index_of(self, value):
        position = 1
        current = self.head
        while current:
            if current.value == value:
                return position
            current = current.next
            position += 1
        return -1


linked_list = LinkedList()

linked_list.insert_last(15)
linked_list.insert_last(22)
linked_list.insert_last(34)
linked_list.insert_last(43)
linked_list.insert_last(88)

print("\nLinked list:", linked_list)

index = linked_list.index_of(43)
print("\nIndex of value 43:", index, "\n")


"""Resposta da análise de complexidade:
O método index_of percorre a lista toda,
e por isso sua Complexidade de tempo é O(n)."""
