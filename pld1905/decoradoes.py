

def funcion_decoradora(funcion_parametro):
    print("hola voy a ejecutar una funcion acontinuacion:")
    funcion_parametro()
    print("ya ejecute la funcion")


def suma():
    print(5+6)

@funcion_decoradora
def resta():
    print(8-2)

