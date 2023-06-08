# remover o enésimo nó do final de lista

# pip install rich
from rich import print


# Node class for doubly linked list
class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


# Doubly linked list class
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def is_empty(self):
        return self.length == 0

    def __len__(self):
        return self.length

    def __str__(self):
        values = []
        current = self.head
        while current:
            values.append(str(current.data))
            current = current.next
        return " -> ".join(values)

    def insert_last(self, value):
        new_node = DoublyNode(value)
        if self.is_empty():
            self.head = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
        self.tail = new_node
        self.length += 1

    def remove_nth_from_end(self, position):
        if self.is_empty():
            return

        if not (1 <= position <= self.length):
            return

        node_to_remove = self.head
        steps_to_move = self.length - position

        for _ in range(steps_to_move):
            node_to_remove = node_to_remove.next

        if node_to_remove.prev:
            node_to_remove.prev.next = node_to_remove.next
        else:
            self.head = node_to_remove.next

        if node_to_remove.next:
            node_to_remove.next.prev = node_to_remove.prev
        else:
            self.tail = node_to_remove.prev

        self.length -= 1


if __name__ == "__main__":
    doubly = DoublyLinkedList()
    print("\nLista Vazia: [", doubly, "]")

    doubly.insert_last(10)
    doubly.insert_last(20)
    print("\nApós Inserir 10 e 20: [", doubly, "]")

    doubly.remove_nth_from_end(1)
    print("\nApós Remover a posição 1 iniciando do final: [", doubly, "]")

    doubly.insert_last(20)
    doubly.insert_last(30)
    doubly.insert_last(40)
    doubly.insert_last(50)
    print("\nApós Inserir 20, 30, 40, 50: [", doubly, "]")

    doubly.remove_nth_from_end(2)
    print("\nApós Remover a posição 2 iniciando do final: [", doubly, "]")

    doubly.remove_nth_from_end(100)
    print("\nApós Remover 100: [", doubly, "]\n")
