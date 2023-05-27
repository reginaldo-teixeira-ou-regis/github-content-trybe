from tkinter import messagebox
import json
import random
import os

json_path = os.path.join(os.path.dirname(__file__), "phrases.json")


def get_phrase():
    try:
        with open(json_path, "r") as phrase_file:
            data = json.load(phrase_file)
            if data:
                phrase_data = random.choice(data)
                phrase = phrase_data.get("phrase")
                author = phrase_data.get("author")
                messagebox.showinfo(
                    title="Frase aleatória", message=f'"{phrase}" - {author}'
                )
            else:
                messagebox.showinfo(
                    title="Sem Frases", message="Não temos frases"
                )
    except FileNotFoundError:
        messagebox.showinfo(title="Sem Frases", message="Não temos frases")
