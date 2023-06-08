# https://wiki.python.org/moin/TimeComplexity

import sys

# List Array em Python
example_a = []
type(example_a)
dir(example_a)
id(example_a)
sys.getsizeof(example_a)

example_a = [1]
print(sys.getsizeof(example_a))

example_a = [1, 2]
print(sys.getsizeof(example_a))


example_a = [1, 2, 3]
print(sys.getsizeof(example_a))

example_a = [1, 2, 3, 4]
print(sys.getsizeof(example_a))

example_a = [1, 2, 3, 4, 5]
print(sys.getsizeof(example_a))

example_a.append(6)
print(sys.getsizeof(example_a))

example_b = example_a

example_a[0] = 9

example_a
example_b

example_b = example_a.copy()

# examples

test = [3, 5, 6, 1]
test[0]
test[0] = 9
test.append(9)
test
del test[2]
test.remove(1)  # Remove o numero 1
test.pop()
test.pop(0)
# test.pop()

test.count(3)
test.append(3)
test.count(3)  # conta ocorrencias

test.sort()
test.reverse()

min(test)
max(test)
test.clear()
9 in test
