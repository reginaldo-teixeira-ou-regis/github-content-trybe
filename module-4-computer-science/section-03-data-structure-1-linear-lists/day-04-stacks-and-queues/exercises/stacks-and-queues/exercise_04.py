"""Estenda a classe Stack, que escrevemos durante as explicações do conteúdo,
para que ela suporte um limite de itens dentro da pilha. Se definirmos que a
pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

stack_limit.py

# ...
content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")

Dica: Para esse exercício, crie uma nova classe,
no mesmo diretório da classe Stack.

Faça a análise de complexidade da sua solução."""


class Stack:
    def __init__(self):
        self._data = []

    def is_empty(self):
        return len(self._data) == 0

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            raise IndexError("Cannot pop from an empty stack.")
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Cannot peek an empty stack.")
        return self._data[-1]


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if len(self._data) + 1 > self.limit:
            raise StackOverflow("A pilha está cheia.")
        super().push(value)


# Tamanho da pilha definido em 2.
stack = LimitStack(2)

print("\nA pilha esta vazia:", stack.is_empty(), "\n")

stack.push(1)
stack.push(-2)

print("Adicionando 2 elementos a pilha:", stack._data, "\n")

try:
    stack.push(5)
    print("Adicionando um terceiro elemento a pilha:", stack._data, "\n")
except StackOverflow:
    print("A pilha está cheia.\n")


"""Resposta da análise de complexidade
* O método push realiza inserção de itens,
que na Pilha possui Complexidade de tempo é O(1)."""
