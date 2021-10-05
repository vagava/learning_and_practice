import math
def raizCuadrada(ListaNumeros):

    '''
    la funcion devuelve una lista de la
    raiz cuadrada de los elementos numericos
    pasados por parametros de otra lista

    >>> lista=[]
    >>> for i in [4, 9, 16]:
    ...     lista.append(i)
    >>> raizCuadrada(lista)
    [2.0, 3.0, 4.0]

    >>> lista=[]
    >>> for i in [4, 9, 16]:
    ...     lista.append(i)
    >>> raizCuadrada(lista)
    Traceback (most recent call last):
        ...
    ValueError: math domain error

    '''
    return [math.sqrt(n) for n in ListaNumeros]

#print(raizCuadrada([9, 16, 25 ,36]))

import doctest
doctest.testmod()
