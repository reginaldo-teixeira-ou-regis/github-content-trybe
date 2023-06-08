# pip install rich
from typing import Optional


class Node:
    def __init__(self, value: int):
        self.value = value
        self.next: Optional[Node] = None
        self.previous: Optional[Node] = None


class CircularDoublyLinkedList:
    def __init__(self):
        self.head: Optional[Node] = None

    def is_empty(self) -> bool:
        return self.head is None

    def insert_last(self, value: int) -> None:
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
            new_node.next = new_node
            new_node.previous = new_node
        else:
            last_node = self.head.previous
            last_node.next = new_node
            new_node.previous = last_node
            new_node.next = self.head
            self.head.previous = new_node

    def insert_first(self, value: int) -> None:
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
            new_node.next = new_node
            new_node.previous = new_node
        else:
            last_node = self.head.previous
            new_node.next = self.head
            new_node.previous = last_node
            self.head.previous = new_node
            last_node.next = new_node
            self.head = new_node

    def remove_first(self) -> None:
        if self.is_empty():
            return
        if self.head.next == self.head:
            self.head = None
        else:
            last_node = self.head.previous
            self.head = self.head.next
            self.head.previous = last_node
            last_node.next = self.head

    def remove_last(self) -> None:
        if self.is_empty():
            return
        if self.head.next == self.head:
            self.head = None
        else:
            last_node = self.head.previous
            second_last_node = last_node.previous
            second_last_node.next = self.head
            self.head.previous = second_last_node

    def __str__(self) -> str:
        if self.is_empty():
            return ""
        current = self.head
        nodes = []
        while True:
            nodes.append(str(current.value))
            current = current.next
            if current == self.head:
                break
        return " -> ".join(nodes)


def test_circular_doubly_linked_list():
    doubly = CircularDoublyLinkedList()
    print("\nA lista está vazia?", doubly.is_empty())
    print("Conteúdo da Lista: [", doubly, "]")

    doubly.insert_last(1)
    doubly.insert_last(2)
    doubly.insert_last(3)
    doubly.insert_first(0)

    print("\nDepois de inserir 1, 2, 3 no final e 0 no início:")
    print("Conteúdo da Lista: [", doubly, "]")

    doubly.remove_first()
    print("\nDepois de remover o primeiro elemento:")
    print("Conteúdo da Lista: [", doubly, "]")

    doubly.remove_last()
    print("\nDepois de remover o último elemento:")
    print("Conteúdo da Lista: [", doubly, "]")

    # Prove that it is circular by printing the previous element of the first
    print("\nPrimeiro Elemento (head):", doubly.head.value)
    print(
        "\nElemento anterior do primeiro (head.previous):",
        doubly.head.previous.value,
        "\n"
    )


if __name__ == "__main__":
    test_circular_doubly_linked_list()
