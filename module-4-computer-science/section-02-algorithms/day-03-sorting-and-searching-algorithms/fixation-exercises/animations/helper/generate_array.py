import random


def generatearray(length):
    arr = []
    for i in range(0, length):
        arr.append(2 * i)

    random.shuffle(arr)
    return arr
