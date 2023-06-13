"""Pilhas: crie uma classe Stack, onde deve conter as operações:
push, pop, peek e is_empty."""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self._size = 0

    def is_empty(self):
        return self.head is None

    def insert_last(self, value):
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self._size += 1

    def remove_last(self):
        if self.is_empty():
            raise IndexError("Cannot remove from an empty linked list.")
        elif self.head.next is None:
            removed_value = self.head.value
            self.head = None
        else:
            current = self.head
            while current.next.next:
                current = current.next
            removed_value = current.next.value
            current.next = None
        self._size -= 1
        return removed_value

    def get_element_at(self, index):
        if self.is_empty():
            raise IndexError("Cannot get element from an empty linked list.")
        elif index < 0 or index >= self._size:
            raise IndexError("Index out of range.")
        else:
            current = self.head
            for _ in range(index):
                current = current.next
            return current.value

    def size(self):
        return self._size


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return self.__data.is_empty()

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(self.__data.size() - 1)

    def __str__(self):
        current = self.__data.head
        elements = []
        while current:
            elements.append(str(current.value))
            current = current.next
        return "[" + ", ".join(elements) + "]"


stack = Stack()

print("\nA Pilha esta vazia:", stack.is_empty(), "\n")  # True

print("Pilha atualizada:", stack, "\n")

stack.push(10)
stack.push(20)
stack.push(30)
print("Adicionando 3 elementos a pilha:", stack, "\n")

removed_item = stack.pop()
print("Removendo o elemento:", removed_item, "do topo da pilha.\n")

print("Fila atualizada:", stack, "\n")

top_item = stack.peek()
print("Apenas visualizado o elemento do topo da pilha:", top_item, "\n")
