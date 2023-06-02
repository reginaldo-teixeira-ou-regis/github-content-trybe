# Modifique o exercício anterior para que as palavras sejam lidas de
# um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("\nAdivinhe a palavra: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"\nVocê ganhou: a palavra secreta é {secret_word}")
    else:
        print(f"\nVocê perdeu: a palavra secreta é {secret_word}")


if __name__ == "__main__":
    with open("words.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"\nA palavra embaralhada é {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)