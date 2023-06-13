from stack import Stack


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print("\nPilha atualizada:", content_stack, "\n")

    # saída: 10
    print("A pilha tem", content_stack.size(), "elementos\n")

    # saída: 10
    print(
        "Apenas visualizar o elemento do topo da pilha:",
        content_stack.peek(),
        "\n",
    )

    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print("Excluir o elemento do topo da pilha:", content_stack.pop(), "\n")

    """saída: 9, pois, após o 10 ter sido removido,
    o 9 se tornou o elemento do topo da pilha"""
    print(
        "Apenas visualizar o novo elemento do topo da pilha:",
        content_stack.peek(),
        "\n",
    )

    # saída: 9
    print("Atualizando: A pilha tem", content_stack.size(), "elementos\n")

    # saída: None, pois a função não retorna nada!
    content_stack.clear()
    print(
        "Pilha atualizada após limpar tudo com o comando 'clear':",
        content_stack,
        "\n",
    )

    # saída: 0
    print("Atualizando: A pilha tem", content_stack.size(), "elementos\n")
