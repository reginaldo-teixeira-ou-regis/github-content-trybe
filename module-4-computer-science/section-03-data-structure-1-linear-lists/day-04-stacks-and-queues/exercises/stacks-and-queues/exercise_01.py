"""Filas: crie uma classe Queue, onde deve conter as operações:
enqueue, dequeue, peek e is_empty.

Para este desafio, é necessário efetuar o import das classes LinkedList e
Node e utilizar seus métodos de acesso para simular uma fila, respeitando
o padrão FIFO."""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

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

    def remove_first(self):
        if self.is_empty():
            raise IndexError("Cannot remove from an empty linked list.")
        else:
            removed_value = self.head.value
            self.head = self.head.next
            return removed_value

    def get_element_at(self, index):
        if self.is_empty():
            raise IndexError("Cannot get element from an empty linked list.")
        else:
            current = self.head
            for _ in range(index):
                if current.next:
                    current = current.next
                else:
                    raise IndexError("Index out of range.")
            return current.value

    def size(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return self.__data.is_empty()

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)

    def size(self):
        return self.__data.size()

    def clear(self):
        self.__data = LinkedList()

    def __str__(self):
        current = self.__data.head
        elements = []
        while current:
            elements.append(str(current.value))
            current = current.next
        return "[" + ", ".join(elements) + "]"


# Criação de uma instância de Queue
queue = Queue()

# Verificação se a fila está vazia
is_empty = queue.is_empty()
print("\nA fila esta vazia:", is_empty, "\n")

print("Fila atualizada:", queue, "\n")

# Adição de elementos na fila
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print("Adicionando 3 elementos a fila:", queue, "\n")

# Remoção do primeiro elemento da fila
removed_item = queue.dequeue()
print(
    "Removendo o primeiro elemento da fila que nesse caso é o numero:",
    removed_item,
    "\n",
)

print(
    "Fila atualizada após a remoção do numero", removed_item, ":", queue, "\n"
)

# Obtenção do primeiro elemento da fila sem removê-lo
first_item = queue.peek()
print("Apenas visualizar o primeiro elemento:", first_item, "\n")

# Obtenção do tamanho da fila
size = queue.size()
print("Quantos elementos a fila tem:", size, "\n")

# Limpeza da fila
queue.clear()
print("Fila atualizada após limpar tudo:", queue, "\n")

# Verificação se a fila está vazia novamente
is_empty = queue.is_empty()
print("A fila esta vazia:", is_empty, "\n")
