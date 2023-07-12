class Product:
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price

    def price(self):
        pass

    def to_describe(self):
        pass


class Book(Product):
    def __init__(self, name: str, price: float, author: str) -> None:
        super().__init__(name, price)
        self.author = author

    def to_describe(self):
        return f"O Livro {self.name} foi escrito por {self.author}."

    def price(self):
        return self.price()


class DVD(Product):
    def __init__(self, name: str, price: float, director: str) -> None:
        super().__init__(name, price)
        self.director = director

    def to_describe(self):
        return f"O Filme {self.name} foi dirigido por {self.director}."

    def price(self):
        return self.price()


book = Book("O Senhor dos Anéis", 89.90, "J. R. R. Tolkien")
dvd = DVD("Vingadores: Ultimato", 101.39, "Irmãos Russo")

print("\n")
print(book.to_describe(), "\n")
print("Preço do livro R$", book.price, "\n")
print(dvd.to_describe(), "\n")
print("Preço do DVD R$", dvd.price, "\n")
