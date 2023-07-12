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


def print_out_details(product: Product) -> None:
    print(f"Descrição: {product.to_describe()}")
    print(f"Preço: R$ {product.price:.2f}")


products = [
    Book("O Senhor dos Anéis", 29.99, "J.R.R. Tolkien"),
    DVD("O Poderoso Chefão", 19.99, "Francis Ford Coppola"),
]


for product in products:
    print_out_details(product)
    print()
