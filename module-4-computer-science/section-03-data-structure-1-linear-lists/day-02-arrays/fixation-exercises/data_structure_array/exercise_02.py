"""Listas(list), dicionários(dict) e conjuntos(set), que já vêm no Python,
são considerados tipos de dados? Caso negativo, justifique sua resposta.

Implementando o TAD Lista Linear com Arrays

Para seguirmos com o entendimento dessa estrutura, vamos apresentar uma
implementação do TAD Lista Linear usando Arrays. No caso, vamos utilizar
uma list do Python como nosso Array.

⚠️ Importante: O tipo list do Python não é um Array puro, pois um Array puro
somente armazena elementos de um mesmo tipo (e listas no Python não tem essa
limitação). Mas o tipo list utiliza parte da lógica de Arrays e isso será
suficiente para entendermos suas vantagens e desvantagens ☺️

Devemos implementar pelo menos um jeito de recuperar e armazenar um
dado através do índice. Para isso, vamos escrever o código abaixo:

Nota: Lembre-se de criar e ativar o ambiente isolado.

array_example.py"""


"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class ListArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = ListArray()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1


'''Relembrando o problema das notas, como arrays são estruturas eficientes para
consultas, podemos buscar um estudante, através de um índice, e percorrer suas
notas de uma maneira eficaz. Ainda temos o detalhe de que não ocorrem tantas
inserções de notas, somente quando um estudante entrar em recuperação.

🤔 Mas porque não ter inserções é uma coisa boa?

Vamos entender o que acontece quando inserimos elementos em um array.'''

'''R: Sim, as listas list, dicionários dict e conjuntos set são considerados
tipos de dados em Python. Na verdade, eles são considerados estruturas de
dados, que são implementações de tipos abstratos de dados (TADs) em Python.
Uma estrutura de dados é uma forma de organizar e armazenar dados em um
programa de computador. As listas, dicionários e conjuntos são exemplos comuns
de estruturas de dados em Python, que permitem armazenar e manipular dados de
maneiras diferentes. Por exemplo, uma lista é uma estrutura de dados que
permite armazenar uma sequência ordenada de valores, acessíveis por índices
numéricos. Já um dicionário é uma estrutura de dados que permite armazenar
pares chave-valor, onde cada valor é acessível por sua chave correspondente.
E um conjunto é uma estrutura de dados que permite armazenar uma coleção de
valores únicos, sem ordem específica.'''
