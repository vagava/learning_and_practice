def suma_dos(lista, valor):
    pares=[]
    for i in lista:
        for j in lista:
            if i + j == valor:
                pares.append([i,j])
    return pares

cantidades =[12, 23, 41, 37, 28, 54, 35, 46, 52, 19, 27]
numero = 74

print("Resultado de suma_dos:")
print(suma_dos(cantidades, numero))

def suma_tres(lista, valor):
    trios=[]
    for i in lista:
        for j in lista:
            for k in lista:
                if i + j + k == valor:
                    trios.append([i,j,k])
                    print(i,j,k)
    return trios



print("El resultado de suma_trios")
print(suma_tres(cantidades, numero))
