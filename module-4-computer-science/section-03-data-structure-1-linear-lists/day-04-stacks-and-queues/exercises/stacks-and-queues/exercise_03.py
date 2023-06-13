"""Estenda a classe Stack, que escrevemos durante as explicações do conteúdo,
adicionando uma nova função chamada min_value() que irá retornar o menor valor
inteiro presente na pilha. Por exemplo:

stack.py

# ...
content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
Fonte: Min Stack

Faça a análise de complexidade da sua solução."""


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

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__data.get_element_at(0)
        current = self.__data.head.next
        while current:
            if current.value < min_value:
                min_value = current.value
            current = current.next
        return min_value

    def clear(self):
        self.__data = LinkedList()


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print("\nOs elementos da pilha atual:", content_stack, "\n")

    # Output: 1
    print("O menor elemento da pilha atual:", content_stack.min_value(), "\n")

    # Output: -5
    content_stack.push(-5)
    print(
        "Pilha atualizada após adicionar o numero (-5):", content_stack, "\n"
    )

    print(
        "O menor elemento da pilha atualizada:",
        content_stack.min_value(),
        "\n",
    )


"""Resposta da análise de complexidade:
* O método min_value realiza uma iteração com for,
e por isso sua Complexidade de tempo é O(n)."""
