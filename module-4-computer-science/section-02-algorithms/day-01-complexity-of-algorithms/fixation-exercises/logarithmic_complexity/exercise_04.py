# Imagine que você recebe dois arrays de tamanho igual, array1 e array2.
# Para cada elemento do array1, realize uma busca binária no array2.
# Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n),
# ou O(n log n).

# Solução

# A busca binária tem complexidade O(log n), uma vez que reduz pela metade
# o número de elementos que deverá percorrer a cada nova iteração. Todavia,
# ela só deve ser utilizada quando lidamos com arrays que já se encontram
# ordenados, este é o caso do nosso array2. Uma vez que a busca binária
# precisará ser executada n-vezes para cada elemento em array1, partimos da
# operação O(n) * O(log n), que resulta em O(n log n).
# Uma possível representação abstrata do problema é a seguinte:


# def do_something(array1, array2):
#     for number in array1:  # O (n)
#         binary_search(array2, number)  # O (log n)
