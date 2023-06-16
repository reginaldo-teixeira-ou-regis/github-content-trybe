from e3_compute_order import get_order
from timeit import timeit

from data.thousand_names import DATA as amostra_pequena
from data.hundred_thousand_names import DATA as amostra_grande

if __name__ == "__main__":
    print(
        "Tempo amostra pequena: ",
        str(timeit(lambda: get_order(amostra_pequena), number=1)),
    )

    print(
        "Tempo amostra grande: ",
        str(timeit(lambda: get_order(amostra_grande), number=1)),
    )
