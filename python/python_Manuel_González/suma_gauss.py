import  time

def suma_lineal (n):
    suma = 0
    for elemento in range (1, n+1):
        suma += elemento
    return suma

def suma_constante(n):
    return (n / 2) * (n + 1)


cantidad = 10000

for i in range (6):
    t0 = time.time()

    suma1 = suma_lineal(cantidad)

    t1 = time.time()

    suma2 = suma_constante(cantidad)

    t2 = time.time()

    print("ciclo #: {}  cantidad de elemtos : {}".format(i, cantidad))
    print("lineal:     {}      tiempo  {}".format(suma1, t1-t0))
    print("constante:  {}      tiempo  {}".format(suma2, t2-t1))

    cantidad *=10