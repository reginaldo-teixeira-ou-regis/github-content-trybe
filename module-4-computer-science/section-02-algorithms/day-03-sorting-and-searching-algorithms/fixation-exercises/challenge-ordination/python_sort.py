# Como Ordernar um list_1 ?
list_1 = [5, 3, 2, 1]
print(sorted(list_1))
list_1.sort()
print(list_1)

# O sorted, aceita para string?
string_1 = "Hoje considero um bom dia para estudar Python"
print(sorted(string_1))

# Da para ordernar por palavra?
string_2 = "Hoje considero um bom dia para estudar Python".split()

print(sorted(string_2, key=str.lower))
