class DoublyNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

    def __str__(self):
        return str(self.value)


class DoublyLinkedList:
    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.tail = DoublyNode("TAIL")
        self.head.next = self.tail
        self.tail.previous = self.head
        self.length = 0

    def __str__(self):
        current = self.head.next
        els = []
        while current != self.tail:
            els.append(str(current))
            current = current.next
        return f"DoublyLinkedList(len={self.length}) -> [{' <-> '.join(els)}]"

    def __len__(self):
        return self.length

    def insert_first(self, value):
        new_node = DoublyNode(value)
        new_node.next = self.head.next
        new_node.previous = self.head
        new_node.next.previous = new_node
        self.head.next = new_node
        self.length += 1

    def insert_last(self, value):
        new_node = DoublyNode(value)
        new_node.previous = self.tail.previous
        new_node.next = self.tail
        new_node.previous.next = new_node
        self.tail.previous = new_node
        self.length += 1

    def insert_at(self, value, position):
        if position < 0:
            position = 0
        if position > len(self):
            position = len(self)
        if position == 0:
            return self.insert_first(value)
        if position == len(self):
            return self.insert_last(value)
        new_node = DoublyNode(value)
        current = self.get_node_at(position)
        new_node.next = current
        new_node.previous = current.previous
        new_node.previous.next = new_node
        current.previous = new_node
        self.length += 1

    def remove_first(self):
        if self.is_empty():
            return None
        node_to_remove = self.head.next
        self.head.next = node_to_remove.next
        node_to_remove.next.previous = self.head
        node_to_remove.next = None
        node_to_remove.previous = None
        self.length -= 1
        return node_to_remove

    def remove_last(self):
        if self.is_empty():
            return None
        node_to_remove = self.tail.previous
        self.tail.previous = node_to_remove.previous
        node_to_remove.previous.next = self.tail
        node_to_remove.next = None
        node_to_remove.previous = None
        self.length -= 1
        return node_to_remove

    def remove_at(self, position):
        if position < 0 or position >= len(self):
            return None
        if position == 0:
            return self.remove_first()
        if position == len(self) - 1:
            return self.remove_last()
        node_to_remove = self.get_node_at(position)
        node_to_remove.previous.next = node_to_remove.next
        node_to_remove.next.previous = node_to_remove.previous
        node_to_remove.next = None
        node_to_remove.previous = None
        self.length -= 1
        return node_to_remove

    def get_element_at(self, position):
        if position < 0 or position >= len(self):
            return None
        node = self.get_node_at(position)
        return node.value

    def get_node_at(self, position):
        if position < 0 or position >= len(self):
            return None
        current = self.head.next
        for _ in range(position):
            current = current.next
        return current

    def is_empty(self):
        return self.length == 0


if __name__ == "__main__":
    doubly = DoublyLinkedList()
    print("A lista está vazia:", doubly.is_empty())
    print(doubly)

    doubly.insert_first(12)
    doubly.insert_first(10)
    doubly.insert_last(25)
    doubly.insert_last(31)
    doubly.insert_at(99, 2)
    doubly.insert_at(100, 5)

    print("\nInserção de elementos:")
    print(doubly)

    doubly.remove_first()
    doubly.remove_last()
    doubly.remove_at(2)
    print("\nDepois de remover na ordem:")
    print("o 1° elemento, o ultimo elemento e o elemento na posição 2:")
    print(doubly)

    print("\nAcessando elementos:")
    print("Elemento na posição 0:", doubly.get_element_at(0))
    print("Elemento na posição 1:", doubly.get_element_at(1))
    print("Elemento na posição 2:", doubly.get_element_at(2))
    print("Elemento na posição 3:", doubly.get_element_at(3))
    print("Elemento na posição 4:", doubly.get_element_at(4))
    print("Elemento na posição 5:", doubly.get_element_at(5))
