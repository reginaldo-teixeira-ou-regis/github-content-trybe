from tkinter import (
    Button,
    Canvas,
    Entry,
    Label,
    PhotoImage,
    Tk,
    END,
    messagebox
)
from get_phrase import get_phrase
import json
import os


json_path = os.path.join(os.path.dirname(__file__), "phrases.json")


def save():
    phrase = phrase_entry.get()
    author = author_entry.get()

    if len(phrase) == 0 or len(author) == 0:
        messagebox.showinfo(title="Oops", message="Não pode ter campos vazios")
    else:
        new_data = {"phrase": phrase, "author": author}

        try:
            with open(json_path, "r") as phrases_file:
                data = json.load(phrases_file)
        except FileNotFoundError:
            data = []

        data.append(new_data)

        with open(json_path, "w") as phrases_file:
            json.dump(data, phrases_file, indent=4)

        messagebox.showinfo(
            title="Sucesso", message="Frase salva com sucesso."
        )
        phrase_entry.delete(0, END)
        author_entry.delete(0, END)


window = Tk()
window.title("Frases Inspiradora")
window.config(padx=10, pady=10)

canvas = Canvas(width=600, height=400)
logo_png = PhotoImage(file="logo.png")
window.config(padx=30, pady=30)

canvas.grid(row=5, column=0, columnspan=2, pady=15)
canvas.create_image(360, 200, image=logo_png, anchor="center")

phrase_label = Label(text="Frase:", font=("Arial", 12, "bold"))
phrase_label.grid(row=0, column=0)
author_label = Label(text="Autor:", font=("Arial", 12, "bold"))
author_label.grid(row=1, column=0)

phrase_entry = Entry(width=30)
phrase_entry.grid(row=0, column=1)
phrase_entry.focus()

author_entry = Entry(width=30)
author_entry.grid(row=1, column=1)

save_button = Button(text="Salvar uma frase", command=save)
save_button.grid(row=2, column=1, ipadx=100)

get_button = Button(text="Retornar uma frase", command=get_phrase)
get_button.grid(row=6, column=1, ipadx=100)


window.mainloop()
