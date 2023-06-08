# Dada uma lista, unida individualmente
# com o nó principal, retorne o node do meio da lista.

# pip install rich
from rich import print


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def __str__(self):
        values = []
        current = self.head
        while current:
            values.append(str(current.data))
            current = current.next
        return " -> ".join(values)

    def insert_last(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def get_element_at(self, position):
        if position < 0:
            return None
        current = self.head
        for _ in range(position):
            if current is None:
                return None
            current = current.next
        if current is None:
            return None
        return current.data

    def __len__(self):
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
        return length


def mid_element(linked_list):
    position = len(linked_list) // 2
    return linked_list.get_element_at(position)


if __name__ == "__main__":
    lecture_list = LinkedList()
    print("\nLista Vazia:", lecture_list)
    print("Elemento do meio:", mid_element(lecture_list))  # None

    lecture_list.insert_last(13)
    print("\nDepois de Inserir 13:", lecture_list)
    print("Elemento do meio:", mid_element(lecture_list))  # 13

    lecture_list.insert_last(24)
    lecture_list.insert_last(37)
    print("\nDepois de Inserir 24 e 37:", lecture_list)
    print("Elemento do meio:", mid_element(lecture_list))  # 24

    lecture_list.insert_last(49)
    print("\nDepois de Inserir 49:", lecture_list)
    print("Elemento do meio:", mid_element(lecture_list))  # 37

    print("\nPosição 0:", lecture_list.get_element_at(0))
    print("Posição 1:", lecture_list.get_element_at(1))
    print("Posição 2:", lecture_list.get_element_at(2))
    print("Posição 3:", lecture_list.get_element_at(3))
    print("Posição 4:", lecture_list.get_element_at(4))
