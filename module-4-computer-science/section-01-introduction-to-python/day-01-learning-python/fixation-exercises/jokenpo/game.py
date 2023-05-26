import random

from paper import paper
from stone import stone
from scissors import scissors


def result(user, computer):
    if computer == user:
        return "\nEmpataram\n"

    if [computer, user] == [0, 2]:
        return "\nVocê perdeu, pedra quebra tesoura!\n"

    if [computer, user] == [1, 0]:
        return "\nVocê perdeu, papel enrola a pedra!\n"

    if [computer, user] == [2, 1]:
        return "\nVocê perdeu, tesoura corta papel!\n"

    return "\nVOCÊ VENCEU!\n"


def game(user):
    if not user.isdigit():
        return "\nDigito incorreto\n"
    user = int(user)
    if user not in range(0, 3):
        return "\nInforme um número entre 0 e 2.\n"

    dicionario_escolhas = {0: stone(), 1: paper(), 2: scissors()}

    computer = random.randint(0, 2)

    print(f"\nVocê escolheu: {user} \n {dicionario_escolhas[user]}")
    print(
        f"\nAdversário escolheu: {computer} \n {dicionario_escolhas[computer]}"
        )
    return result(user, computer)


user = input("\nQual sua escolha? [0: PEDRA, 1: PAPEL, 2: TESOURA]: ")
print(game(user))
