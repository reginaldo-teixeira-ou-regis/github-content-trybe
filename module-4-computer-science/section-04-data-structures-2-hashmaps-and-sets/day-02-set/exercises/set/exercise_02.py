"""Substring

Dada uma string, ache o tamanho da maior substring que não tenha
caracteres repetidos. Complexidade de tempo limite aceitável: O(n²).

string = "serdevemuitolegalmasehprecisoestudarbastante"

Faça a análise de complexidade da sua solução."""


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


print(
    "\nO tamanho da substring sem caracteres repetidos é:",
    longer_no_repeating_substring_len("abcabcbb"),
)  # Saída: 3
print(
    "\nO tamanho da substring sem caracteres repetidos é:",
    longer_no_repeating_substring_len("bbbbb"),
)  # Saída: 1
print(
    "\nO tamanho da substring sem caracteres repetidos é:",
    longer_no_repeating_substring_len("pwwkew"),
    "\n",
)  # Saída: 3


"""Resposta da análise de complexidade
* A função longer_no_repeating_substring_len realiza dois fors um dentro
do outro, e por isso sua Complexidade de Tempo é O(n²)."""
