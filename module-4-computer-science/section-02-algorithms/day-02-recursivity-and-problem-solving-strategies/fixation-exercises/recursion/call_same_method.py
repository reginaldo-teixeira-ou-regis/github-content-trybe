def hello(x):
    # Condição ALVO, PARADA
    if x == 10:
        return
        # Aproximar desta condição
    x += 1
    print("Olá")
    # Chamada do próprio Método
    hello(x)
    print("Terminou")


hello(0)
