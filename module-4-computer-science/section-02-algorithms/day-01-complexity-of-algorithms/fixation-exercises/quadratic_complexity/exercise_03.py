# Faça um algoritmo qualquer com três loops aninhados um dentro do outro.
# Entenda como ele terá uma complexidade de O(n³)!

# Solução

# Podemos alterar o algoritmo do exercício anterior pra isso:


def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# Usar arrays de tamanho 1000 aqui pode ser muito lento!
meu_array = list(range(1, 100))
multiply_arrays(meu_array, meu_array, meu_array)

# A complexidade será O(n³). Em termos do número de iterações necessárias,
# para um array de 10 elementos iremos realizar 1000 iterações! 101010 == 1000.
# O tempo de execução pode variar entre uma máquina e outra, mas,
# se estiver no ambiente Linux ou MacOS, tente utilizar o comando time
# para aferir o tempo de execução para entradas variáveis em seu computador!
# Observe o padrão de crescimento.

# Dica: Tenha sempre o ctrl+c engatilhado em seu terminal para
# encerrar o processo caso este tome muito tempo para concluir.
