"""Filas: crie uma classe Queue, onde deve conter as operações:
enqueue, dequeue, peek e is_empty.

* O método enqueue irá adicionar um elemento ao final da fila;

* O método dequeue deverá desenfileirar o primeiro elemento da fila
e retornar o elemento removido;

* O método peek deve retornar o elemento na cabeça da fila;

* O método is_empty deve retornar True caso a fila esteja vazia
e False caso contrário.

Para este desafio, é necessário efetuar o import das classes LinkedList
e Node disponíveis no arquivo src/linked_list.py, e utilizar seus métodos
de acesso para simular uma fila, respeitando o padrão FIFO."""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def is_empty(self):
        return self.length == 0

    def insert_last(self, value):
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

    def remove_first(self):
        if self.is_empty():
            raise IndexError("Cannot remove from an empty linked list")
        first_value = self.head.value
        self.head = self.head.next
        if self.head is None:
            self.tail = None
        self.length -= 1
        return first_value

    def get_element_at(self, index):
        current = self.head
        for _ in range(index):
            if current is None:
                raise IndexError("Index out of range")
            current = current.next
        if current is None:
            raise IndexError("Index out of range")
        return current.value


class Queue:
    def __init__(self):
        self._data = LinkedList()

    def is_empty(self):
        return self._data.is_empty()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        return self._data.remove_first()

    def peek(self):
        return self._data.get_element_at(0)

    def __str__(self):
        current = self._data.head
        elements = []
        while current:
            elements.append(str(current.value))
            current = current.next
        return "[" + ", ".join(elements) + "]"


queue = Queue()
print("\nA fila está vazia:", queue.is_empty(), "\n")  # Saída: True

print("Fila Atual:", queue, "\n")  # Saída: []

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print(
    "Atualizando a fila depois de adicionar 3 elementos:", queue, "\n"
)  # Saída: [10, 20, 30]

print("A fila está vazia:", queue.is_empty(), "\n")  # Saída: False

print("Primeiro elemento da fila:", queue.peek(), "\n")  # Saída: 10

print(
    "Removendo o primeiro elemento da fila:", queue.dequeue(), "\n"
)  # Saída: 10

print("Fila Atual:", queue, "\n")  # Saída: [20, 30]

print("Atual primeiro elemento da fila:", queue.peek(), "\n")  # Saída: 20

print(
    "Removendo o novo primeiro elemento da fila:", queue.dequeue(), "\n"
)  # Saída: 20

print(
    "Removendo o último elemento da fila:", queue.dequeue(), "\n"
)  # Saída: 30

print("A fila está vazia:", queue.is_empty(), "\n")  # Saída: True

print("Fila Atual:", queue, "\n")  # Saída: []
