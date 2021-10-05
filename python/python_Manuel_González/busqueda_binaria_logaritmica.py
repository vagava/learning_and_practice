def busqueda_binaria (lista, elemento):
    pasos = 0
    inicio = 0
    final = len(lista)-1
    while inicio <= final:
        pasos += 1
        medio = (inicio + final)//2
        if lista[medio] == elemento:
            return True, pasos
        elif lista[medio] < elemento:
            inicio = medio + 1
        elif lista[medio] > elemento:
            final = medio - 1
    return False, pasos

datos =[]

for i in range (10000000):
    datos.append(i)

print(busqueda_binaria(datos, 9813))

