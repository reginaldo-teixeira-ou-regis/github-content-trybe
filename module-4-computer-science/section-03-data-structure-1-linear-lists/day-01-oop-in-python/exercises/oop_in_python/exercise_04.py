# Classe Log
# Atributos:

# * manipuladores:
# Será inicializado com um conjunto de subclasses de ManipuladorDeLog;

# Métodos:

# * adicionar_manipulador - adiciona um manipulador ao conjunto
# de manipuladores do gerenciamento de logs (Log);
# * info - dispara logs com nível de severidade "INFO";
# * alerta - dispara logs com nível de severidade "ALERTA";
# * erro - dispara logs com nível de severidade "ERRO";
# * debug - dispara logs com nível de severidade "DEBUG";
# * __log - dispara os logs formatados para todos os manipuladores
# (invocado para cada nível de severidade, para evitar duplicação de código);
# * __formatar - formata os logs de acordo com o padrão
# “[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero”;

# Classe ManipuladorDeLog:

# A classe ManipuladorDeLog é uma interface (e, por consequência,
# uma classe abstrata) e deve declarar um método de classe (classmethod)
# e abstrato (abstractmethod) log que recebe um parâmetro mensagem ou msg.

# Classes LogEmArquivo e LogEmTela:

# As classes LogEmArquivo e LogEmTela devem herdar de ManipuladorDeLog
# e sobrescrever o método de classe log, salvando a mensagem em um arquivo
# (data/log.txt) ou a exibindo na tela, respectivamente.

# bird Dica: Você pode utilizar a função print em tela ou em arquivo
# (que pode ter um nome padrão).

from abc import ABC, abstractmethod
from datetime import datetime


class Manipulator_Of_Log(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class Log_File(Manipulator_Of_Log):
    @classmethod
    def log(cls, msg):
        with open("log.txt", "a") as file:
            print(msg, file=file)


class Screen_Log(Manipulator_Of_Log):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipulators):
        self.__manipulators = set(manipulators)

    def add_manipulator(self, manipulator):
        self.__manipulators.add(manipulator)

    def info(self, msg):
        self.__log("INFO", msg)

    def alert(self, msg):
        self.__log("ALERTA", msg)

    def error(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, level, msg):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, msg))

    def __format(self, level, msg):
        date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{level} - {date}]: {msg}"


log_file = Log_File()
screen_log = Screen_Log()

log = Log([log_file, screen_log])

log.add_manipulator(screen_log)

print("Log:\n")
log.info("Esta é uma mensagem de informação.\n")
log.alert("Esta é uma mensagem de alerta.\n")
log.error("Esta é uma mensagem de erro.\n")
log.debug("Esta é uma mensagem de debug.\n")
