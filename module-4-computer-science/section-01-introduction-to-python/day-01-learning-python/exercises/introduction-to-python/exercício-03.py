# Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda"

# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

array_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_biggest_name_redefined(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(
    "\nO nome com a maior quantidade de caracteres é:",
    f"{find_biggest_name_redefined(array_names)}\n",
)
