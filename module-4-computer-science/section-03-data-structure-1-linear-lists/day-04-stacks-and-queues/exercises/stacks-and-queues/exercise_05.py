"""Um estacionamento comercial possui uma garagem em forma de linha, ou seja,
somente é possível parar os carros enfileirados. Para auxiliar as pessoas que
trabalham manobrando os veículos, iremos escrever um programa para que eles
consigam adicionar novos veículos na garagem e retirar os veículos conforme
a solicitação dos clientes. Escreva um programa que faça essas duas operações,
inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando
que os veículos que foram removidos para se chegar no veículo do cliente,
ficam parados na rua e depois são adicionados na mesma ordem que estavam no
estacionamento.

Faça a análise de complexidade da sua solução."""


from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print("Operações:")
    print("1. Adicionar Veículo")
    print("2. Remover Veículo")
    print("3. Veículos Estacionados")
    print("4. Fechar Programa")
    option = int(input("Opção: "))

    if option == 1:
        plate_number = input("Digite o número da placa do veículo: ")
        garage.push(plate_number)
        print("Veículo", plate_number, "estacionado")
    elif option == 2:
        vehicle_plate = input("Digite o número da placa do veículo: ")
        street = Stack()
        removed = False
        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print("Veículo", vehicle_plate, "removido")
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print("Não há veículo estacionado com esta placa.")
    elif option == 3:
        print("Veículos estacionados:", garage)
    else:
        print("Programa Garagem Vip 2023 Finalizado!")
        option = 4


"""Resposta da análise de complexidade:
* Este algoritmo realiza inserções de itens, que na Pilha possui Complexidade
de tempo é O(1), porém existem alguns whiles que percorrem listas, e por isso
sua Complexidade de tempo é O(n)."""
