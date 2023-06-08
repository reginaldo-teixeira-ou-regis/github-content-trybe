# insert_last performático com Sentinela

# pip install rich
from rich import print


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedListWithTail:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.length = 0

    def __str__(self):
        values = []
        current = self.head.next
        while current:
            values.append(str(current.data))
            current = current.next
        return " -> ".join(values)

    def insert_first(self, value):
        new_node = Node(value)
        new_node.next = self.head.next

        if self.head.next is None:
            self.tail = new_node

        self.head.next = new_node
        self.length += 1

    def insert_last(self, value):
        new_node = Node(value)

        self.tail.next = new_node
        self.tail = new_node
        self.length += 1

    def get_sentinel_head_data(self):
        return self.head.next.data if self.head.next else None

    def get_sentinel_tail_data(self):
        return self.tail.data


if __name__ == "__main__":
    lecture_list = LinkedListWithTail()

    print("\nList Vazia:", lecture_list)
    print("[HEAD -> (TAIL)]")
    print("Cabeça Sentinela:", lecture_list.get_sentinel_head_data())
    print("Calda Sentinela:", lecture_list.get_sentinel_tail_data())

    lecture_list.insert_last("A")
    print("\nDepois de adicionar A:", lecture_list)
    print("Cabeça Sentinela:", lecture_list.get_sentinel_head_data())
    print("Calda Sentinela:", lecture_list.get_sentinel_tail_data())

    lecture_list.insert_last("B")
    print("\nDepois de adicionar B:", lecture_list)
    print("Cabeça Sentinela:", lecture_list.get_sentinel_head_data())
    print("Calda Sentinela:", lecture_list.get_sentinel_tail_data())

    lecture_list.insert_last("C")
    print("\nDepois de adicionar C:", lecture_list)
    print("Cabeça Sentinela:", lecture_list.get_sentinel_head_data())
    print("Calda Sentinela:", lecture_list.get_sentinel_tail_data())

    lecture_list.insert_first(23)
    print("\nDepois de adicionar  no início:", lecture_list)
    print("Cabeça Sentinela:", lecture_list.get_sentinel_head_data())
    print("Calda Sentinela:", lecture_list.get_sentinel_tail_data())

# # LinkedList(
# # len=4
# # value=Node(value=HEAD
# #            next=Node(value=0
# #                      next=Node(value=2
# #                                next=Node(value=1
# #                                          next=Node(value=3
# #                                                    next=None))))))
print("\nLista completa: ", lecture_list, "\n")
