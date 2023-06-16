# -*- coding: utf-8 -*-
"""ENUNCIADO: Dada uma lista de tuplas, que representa a relação de pessoas
numa fila, retorne uma lista com as pessoas na ordem correta:

Ex: [("Will", "Pedro"), ("Felps", "Will"), ("Pedro", "Bruno") ]

Resultado = ["Felps", "Will", "Pedro", "Bruno"]

"""
# person_key_value = {
#     "fernanda": "rafa",
#     "fran": "daniel",
#     "mirian": "gabriel",
#     "matheus": "yasmin",
#     "giovanni": "fernanda",
#     "rafa": "fran",
#     "daniel": "mirian",
#     "gabriel": "matheus",
# }


def get_order(list_tuple_person):
    person_key_value = dict(list_tuple_person)
    person_keys = person_key_value.keys()
    # person_values_reverse = person_key_value.values()
    person_values_reverse = {
        person[1]: person[0] for person in person_key_value
    }

    # person_values_reverse = set(person_key_value.values())

    next_person = ""
    for current_person in person_keys:
        if current_person not in person_values_reverse:
            next_person = current_person

    result = [next_person]

    while next_person in person_key_value:
        result.append(person_key_value[next_person])
        next_person = person_key_value[next_person]

    return result


if __name__ == "__main__":
    persons = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]

# [giovanni, fernanda, rafa, fran, daniel , mirian, gabriel, matheus, yasmin]

    print(get_order(persons))
