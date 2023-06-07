"""Que tal adicionarmos um método update que atualiza o valor
a partir de um índice?

🐦 A assinatura deve ser def update(self, index, value):"""


"""Solução:
Para atualizar o valor de um elemento específico em uma instância
de Exemplo, podemos chamar o método update passando o índice e o
novo valor como argumentos. Por exemplo:"""


class Example:
    def __init__(self, value):
        self.value = value

    def update(self, index, value):
        self.value[index] = value


example = Example([1, 2, 3, 4, 5])
example.update(2, 10)
print(example.value)  # [1, 2, 10, 4, 5]
