# Implemente uma classe que contenha os seguintes atributos e métodos:

# Atributos:

# * volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
# * canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
# * tamanho - será inicializado com o valor do parâmetro;
# * ligada - será inicializado com o valor de False,
# pois está inicialmente desligado.

# Todos os atributos devem ser privados.

# Métodos:

# * aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
# * diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
# * modificar_canal - altera o canal de acordo com o parâmetro recebido e
# deve lançar uma exceção (ValueError) caso o valor esteja fora dos limites;
# * ligar_desligar - alterna o estado da TV entre ligado e desligado
# (True/False).


class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__connected = False

    def volume_up(self):
        if self.__volume < 99:
            self.__volume += 1

    def volume_down(self):
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel):
        if channel <= 1 or channel >= 99:
            raise ValueError("Canal indisponível")

        self.__channel = channel

    def connect_desconnect(self):
        self.__connected = not self.__connected


tv = TV(size=42)

tv.volume_up()
print("\nVolume:", tv._TV__volume)

tv.volume_down()
print("\nVolume:", tv._TV__volume)

tv.change_channel(5)
print("\nCanal:", tv._TV__channel)

tv.connect_desconnect()
print("\nTV Ligada:", tv._TV__connected, "\n")
