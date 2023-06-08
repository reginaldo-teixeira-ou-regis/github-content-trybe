from rich import print


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"

    def reset(self):
        self.next = None


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_value = Node(value)
        current_value = self.head_value

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head_value

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_value

        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        if position < 0 or position >= len(self):
            return None

        current_value = self.head_value
        while position > 0:
            current_value = current_value.next
            position -= 1

        return current_value

    def is_empty(self):
        return not self.__length


if __name__ == "__main__":
    linked_list = LinkedList()

    print("\nInserindo Valores...")
    linked_list.insert_first("A")
    linked_list.insert_last("B")
    linked_list.insert_at("C", 2)
    linked_list.insert_at("D", 1)
    linked_list.insert_at("E", 3)
    """LinkedList(len=5, value=Node(value=A, next=Node(value=D,
    next=Node(value=B, next=Node(value=E, next=Node(value=C, next=None))))))"""
    print("\n", linked_list)

    print("\nRemovendo Valores...")
    linked_list.remove_first()
    linked_list.remove_last()
    linked_list.remove_at(2)

    # LinkedList(len=2, value=Node(value=D, next=Node(value=B, next=None)))
    print("\n", linked_list)

    # Node(value=D, next=Node(value=B, next=None))
    print("\nObtendo o elemento na posição 0:", linked_list.get_element_at(0))

    # Node(value=B, next=None)
    print("\nObtendo o elemento na posição 1:", linked_list.get_element_at(1))

    # None
    print("\nObtendo o elemento na posição 2:", linked_list.get_element_at(2))
