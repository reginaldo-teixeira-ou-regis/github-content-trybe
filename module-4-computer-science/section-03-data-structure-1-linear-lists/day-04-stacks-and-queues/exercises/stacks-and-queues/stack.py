class Stack:
    def __init__(self):
        self.__data = []

    def is_empty(self):
        return len(self.__data) == 0

    def push(self, value):
        self.__data.append(value)

    def pop(self):
        if self.is_empty():
            raise IndexError("Cannot pop from an empty stack")
        return self.__data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Cannot peek an empty stack")
        return self.__data[-1]

    def __str__(self):
        return "[" + ", ".join(str(item) for item in self.__data) + "]"
