# Implemente as classes Secador, Batedeira e MaquinaDeLavar,
# sempre herdando da classe Eletrodomestico. Para testar,
# instancie as novas classes e realize alguns prints, como por exemplo,
# divulgando o preço do Eletrodoméstico.


class Home_Appliance:
    def __init__(self, color, potency, voltage, price):
        self.price = price
        self.color = color
        self._potency = potency
        self._voltage = voltage
        self.__connected = False
        self.__speed = 0
        self.__maximum_speed = 3
        self.__current_in_the_motor = 0

    def connect(self, speed):
        if speed > self.__maximum_speed or speed < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__maximum_speed}"
            )

        self.__speed = speed
        self.__current_in_the_motor = (
            (self._potency / self._voltage) / self.__maximum_speed
        ) * speed
        self.__connected = True

    def disconnect(self):
        self.__connected = False
        self.__speed = 0

    def it_is_connected(self):
        return self.__connected

    @property
    def color(self):
        return self.__color.upper()

    @color.setter
    def color(self, new_color):
        self.__color = new_color


class Hairdryer(Home_Appliance):
    pass


class Cake_Mixer(Home_Appliance):
    pass


class Washing_Machine(Home_Appliance):
    pass


hairdryer = Hairdryer("Branco", "450", "127", "400")
cake_mixer = Cake_Mixer("Prata", "200", "127", "290")
washing_machine = Washing_Machine("Preta", "6000", "127", "1300")

print(f"O secador {hairdryer.color} custa {hairdryer.price}.")
print(f"A batedeira {cake_mixer.color} custa {cake_mixer.price}.")
print(
    f"A máquina de lavar {washing_machine.color} "
    f"custa {washing_machine.price}."
)
# O secador BRANCO custa 400.
# A batedeira PRATA custa 290.
# A máquina de lavar PRETA custa 1300.
