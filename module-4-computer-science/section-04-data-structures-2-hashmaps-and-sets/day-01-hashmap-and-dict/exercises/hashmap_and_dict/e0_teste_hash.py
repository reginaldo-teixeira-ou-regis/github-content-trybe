# Lista comum, nada de Hash aqui
list1 = [["a", 1], ["b", 2], ["c", 3], ["d", 4]]
print("\n", list1)

# Dicionario, com Hash
dict1 = {"a": 1, "b": 2, "c": 3, "d": 4}
print("\n", dict1)

# Outra forma de declarar o dicionario
dict2 = dict([("a", 1), ("b", 2), ("c", 3), ("d", 4)])
print("\n", dict2)


print("\ndict2.keys()", dict2.keys())
print("\ndict2.values()", dict2.values())
print("\ndict2.items()", dict2.items())

# Dict o(1) vs List o(N)
list2 = ["a", "b", "c", "d"]  # o(N)
"c" in list2

dict1 = {"a": 1, "b": 2, "c": 3, "d": 4}  # o(1)


letters = [["a", 1], ["b", 2], ["c", 3], ["d", 4]]
dict3 = {letter[0]: letter[1] for letter in letters}

# letters.each( |letter| {letters[0]: letters[1]})

print("\ndict3", dict3)
print("\ntype dict3", type(dict3))


set1 = {1, 2}
print("\n", type(set1), "\n")
