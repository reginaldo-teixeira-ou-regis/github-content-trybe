x = ["a"] + ["b"] + [1, 2, 3]

# Como saber onde esta o 'b' ?
print(x)
print(x.index("b"))

# E se não existir, exemplo 'z'?
print(x)
try:
    print(x.index("z"))
except ValueError as e:
    print(f"Não achei, {e}")
