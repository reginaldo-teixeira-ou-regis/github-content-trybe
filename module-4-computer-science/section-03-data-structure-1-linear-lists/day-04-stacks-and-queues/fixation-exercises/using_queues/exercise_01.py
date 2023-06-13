class Queue:
    def __init__(self):
        self._data = list()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.pop(0)

    def __str__(self):
        str_items = ""
        for i in range(len(self._data)):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "

        return "[" + str_items + "]"


if __name__ == "__main__":
    elements = ["Milkshake", "Batata Frita", "Refrigerante"]
    content_queue = Queue()

    print("\nFila atual:", content_queue, "\n")  # Saída: []

    for elem in elements:
        content_queue.enqueue(elem)

    # Saída: Queue(Milkshake, Batata Frita, Refrigerante)
    print(
        "Atualização: Fila depois de adicionar um array de elementos:",
        content_queue,
    )

    # Saída: Queue(Batata Frita, Refrigerante)
    print("\nExcluindo o head da fila:", content_queue.dequeue(), "\n")

    print("Fila atual:", content_queue, "\n")

    # Saída: Batata Frita
    """porque "Milkshake" já foi removido e "Batata Frita"
    se tornou o primeiro elemento da fila"""
    print("Excluindo o head da fila:", content_queue.dequeue(), "\n")

    print("Fila atual:", content_queue, "\n")
