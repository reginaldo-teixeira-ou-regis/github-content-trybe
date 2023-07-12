class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__power_on = False

    def increase_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        print("Aumentando volume para:", self.__volume)

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        print("Diminuindo volume para:", self.__volume)

    def change_channel(self, channel):
        if channel <= 1 or channel >= 99:
            raise ValueError("Canal indisponível")
        self.__channel = channel
        print("Trocando para o canal:", self.__channel)

    def power_on_off(self):
        self.__power_on = not self.__power_on
        if self.__power_on:
            print("TV Ligada")
        else:
            print("TV Desligada")


tv = TV(32)
tv.power_on_off()
tv.increase_volume()
tv.increase_volume()
tv.increase_volume()
tv.decrease_volume()
tv.change_channel(8)
tv.decrease_volume()
tv.decrease_volume()
tv.decrease_volume()
tv.decrease_volume()
tv.decrease_volume()
tv.change_channel(10)
tv.power_on_off()
