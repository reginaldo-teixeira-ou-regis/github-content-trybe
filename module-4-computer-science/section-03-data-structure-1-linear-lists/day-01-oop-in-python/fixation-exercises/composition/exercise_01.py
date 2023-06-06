# Além do liquidificador, podemos modelar inúmeros eletrodomésticos,
# tais como: ventilador, batedeira, secador, máquina de lavar e etc.

# Para fixar crie uma objeto da classe Ventilador,
# semelhante ao exemplo do liquidificador.

# Em seguida faça com que a pessoa tenha um ventilador
# como atributo através da composição.

# Crie também um método comprar_ventilador.

# Faça com que o print (__str__) de Pessoa informe
# se sua instância possui ou não um ventilador.


class Ventilator:
    def __init__(self, color, potency, voltage, price):
        self.price = price
        self.__color = color
        self.__potency = potency
        self.__voltage = voltage
        self.__ligado = False

    def color(self):
        return self.__color


class Person:
    def __init__(self, name, account_balance):
        self.name = name
        self.account_balance = account_balance
        self.ventilator = None

    def buy_ventilator(self, ventilator):
        if ventilator.price <= self.account_balance:
            self.account_balance -= ventilator.price
            self.ventilator = ventilator

    def __str__(self):
        if self.ventilator:
            return f"{self.name} - possui um ventilador."
        return f"{self.name} - não possui um ventilador."


ventilator_white = Ventilator("white", potency=250, voltage=220, price=100)
person = Person("Maria", account_balance=2000)
person.buy_ventilator(ventilator_white)

print(person)
