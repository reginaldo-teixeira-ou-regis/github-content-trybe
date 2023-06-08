from typing import Any
from rich import print


class Node:
    def __init__(self, value: Any) -> None:
        self.value = value
        self.next = None
        self.previous = None


class CircularDoublyLinkedList:
    def __init__(self) -> None:
        self.head = Node("HEAD")
        self.head.next = self.head
        self.head.previous = self.head
        self.length = 0

    def __str__(self) -> str:
        values = []
        current = self.head.next
        while current != self.head:
            values.append(str(current.value))
            current = current.next
        return f"[HEAD -> {' -> '.join(values)} -> HEAD]"

    def __len__(self) -> int:
        return self.length

    def is_empty(self) -> bool:
        return self.length == 0

    def insert_first(self, value: Any) -> None:
        new_node = Node(value)
        new_node.next = self.head.next
        new_node.previous = self.head
        new_node.next.previous = new_node
        self.head.next = new_node
        self.length += 1

    def insert_last(self, value: Any) -> None:
        new_node = Node(value)
        new_node.previous = self.head.previous
        new_node.next = self.head
        new_node.previous.next = new_node
        self.head.previous = new_node
        self.length += 1

    def remove_first(self) -> Any:
        if self.is_empty():
            return None

        value_to_remove = self.head.next
        self.head.next = value_to_remove.next
        value_to_remove.next.previous = self.head
        value_to_remove.next = None
        value_to_remove.previous = None
        self.length -= 1

        return value_to_remove.value

    def remove_last(self) -> Any:
        if self.is_empty():
            return None

        value_to_remove = self.head.previous
        self.head.previous = value_to_remove.previous
        value_to_remove.previous.next = self.head
        value_to_remove.next = None
        value_to_remove.previous = None
        self.length -= 1

        return value_to_remove.value


if __name__ == "__main__":
    linked_list = CircularDoublyLinkedList()
    print("\nLista vazia:", linked_list)

    linked_list.insert_last(1)
    linked_list.insert_last(2)
    linked_list.insert_last(3)
    linked_list.insert_first(0)
    print("\nApós inserir 1, 2, 3 no fim e 0 no início:", linked_list)

    linked_list.remove_first()
    print("\nApós remover o primeiro elemento:", linked_list)

    linked_list.remove_last()
    print("\nApós remover o último elemento:", linked_list, "\n")
