import time

'''
Una empresa de autopistas tiene instalada una camara que cuenta el numero de vehiculos que pasa
por una autopista, y tiene instaladas unas gomas que cuentan el nuemro de ruedas de los vehiculos
que pasan por la autopista.

La empresa quiere contratar a un programador para que elabore un algoritmo que apartir del numero
de vehiculos y el numero de ruedas, exraiga la cantidad de coches y motos que pasan por la autopista
'''

#algotritmo de complejidad O(n**2)

def extraccion_1(vehiculos, ruedas):
    for coches in range(vehiculos+1):
        for motos in range(vehiculos+1):
            if((coches+motos == vehiculos)and(coches*4 + motos*2 == ruedas)):
                return coches, motos
    return None

# algoritmo de complejidad O(n)
def extraccion_2(vehiculos, ruedas):
    for coches in range(vehiculos+1):
        motos = vehiculos - coches
        if coches * 4 + motos * 2 == ruedas:
            return coches, motos
    return None

# algoritmo de complejidad O(1)
def extraccion_3(vehiculos,ruedas):
    ''' reemplazamos las variables para obtener un algoritmo mas eficiente:
        ***MOTOS = RUEDAS / 2 - VEHICULOS ***
        ruedas = coches * 4 + (vehiculos - coches) * 2
        coches * 2 + vehiculos - coches = ruedas / 2
        *** COCHES = RUEDAS / 2 - VEHICULOS ***
    '''
    coches = ruedas / 2 - vehiculos
    motos = vehiculos - coches
    if int(coches) + int(motos) == vehiculos:
        return int(coches), int(motos)
    else:
        return None

vehiculos = 6500
ruedas = 20600
time_0 = time.time()
O_n2= extraccion_1(vehiculos, ruedas)
time_1=time.time()
O_n= extraccion_2(vehiculos, ruedas)
time_2=time.time()
O_1= extraccion_3(vehiculos, ruedas)
time_3=time.time()
print("resultado algoritmo O(n**2): {}, tiempo {}".format(O_n2,(time_1 - time_0)))
print("resultado algoritmo O(n)   : {}, tiempo {}".format(O_n,(time_2 - time_1)))
print("resultado algoritmo O(1)   : {}, tiempo {}".format(O_1,(time_3 - time_2)))



