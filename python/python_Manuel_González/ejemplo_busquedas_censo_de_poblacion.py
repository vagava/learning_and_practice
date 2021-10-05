import random

censo =[]
alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZAEIOU"
numero = 0

print ("Creando censo ...")

for i in range(50000):
    aumento = random.randint(1,3)
    numero += aumento

    letras = random.sample(alfabeto, 5)
    nombre = "".join(letras)

    edad = random.randint(18, 99)

    impuestos = random.choice((True, True, True, False))

    censo.append([numero, nombre, edad, impuestos])

    if len(censo) % 10000 == 0:
        print("Creados", len(censo), "registros...")

print("------Censo creado------")
print("Ultimo registro: ",censo[-1])

def busqueda_numero(lista, elemento):
    ''' Buscar registros por numero. busqued binaria '''
    inicio = 0
    final = len(lista)-1

    while inicio <= final:
        medio = (inicio + final)//2
        if lista[medio][0] == elemento:
            return lista[medio]
        elif lista[medio][0] < elemento:
            inicio = medio + 1
        elif lista[medio][0] > elemento:
            final = medio - 1
    return None

def busqueda_nombre(lista, elemento):
    ''' Busca registros por nombre. Busqueda lineal '''
    encontrados = [] #por si hay mas de un registro con el mismo nombre

    for registro in lista:
        if registro[1] == elemento:
            encontrados.append(registro)
    if len(encontrados) == 0:
        return None
    else:
        return encontrados

def muestra_registro(registro):
    ''' Mustra los registros encontrados o si no se encontro nunguno '''
    if registro == None:
        print("No existe registro con ese dato")
    else:
        print("------------------------------")
        print("Numero:", registro[0])
        print("Nombre:", registro[1])
        print("Edad:", registro[2])
        print("Impuestos:", registro[3])


def menu():
    print("------------------------------")
    print("----  CENSO DE POBLACION  ----")
    print("------------------------------")
    print("1.   Buscar por numero")
    print("2.   Buscar por Nombre")
    print("3.   Salir")

    opcion = ""

    while opcion  not in ("1", "2", "3"):
        opcion = input("---> ")
    return opcion


while True:
    op = menu()
    if op == "1":
        try:
            numero = int(input("Introduce un numero: "))
        except ValueError:
            print("Introduce un numero entero.")
        else:
            registro = busqueda_numero(censo, numero)
            muestra_registro(registro)

    elif op == "2":
        nombre = input("Introduce nombre: ").upper()
        registros =  busqueda_nombre(censo, nombre)
        if registros == None:
            print("No existe un registro con ese dato.")
        else:
            for registro in registros:
                muestra_registro(registro)
    elif op == "3":
        break
