"""Desafio

Otimizar o algoritmo do exercício 2 para ter uma complexidade
de tempo limite de O(n)."""


def longer_no_repeating_substring_len(string):
    n = len(string)
    substr = set()
    left = 0
    right = 0
    biggest = 0

    while right < n:
        if string[right] in substr:
            substr.remove(string[left])
            left += 1
        else:
            substr.add(string[right])
            right += 1
            biggest = max(biggest, right - left)

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
* O(n): A iteração principal percorre a string uma vez,
onde "n" é o tamanho da string de entrada.
Portanto, a complexidade de tempo é O(n)."""
