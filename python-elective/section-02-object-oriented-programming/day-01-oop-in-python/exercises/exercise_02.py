from typing import List


def filter_strings(list: List[str], character: str) -> List[str]:
    result = []
    for text in list:
        if text.startswith(character):
            result.append(text)
    return result


print(filter_strings(["banana", "maçã", "melancia", "abacate"], "m"))
# ['maçã', 'melancia']

print(filter_strings(["cachorro", "gato", "elefante", "girafa"], "g"))
# ['gato', 'girafa']
