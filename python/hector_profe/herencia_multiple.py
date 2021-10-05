
#la Herencia multiple es la capacidad de  una subclase
#heredar de multiples super clases
#Problema: si varias uper clases tienen los mismos
#atributos o metodos la subclase solo podra heredar
#de una de ellas
#Solucion: Python dara prioridad a la clase mas a la
#izquierda en el momento de la declaracion de la subclase

class A:
    '''super clase A'''
    def __init__(self):
        '''esto se ejecuta cuando instaciamos A'''
        print("Soy de clase A")
    def a(self):
        '''Metodode la clase a'''
        print("Este metodo lo heredo de a")

class B:
    def __init__(self):
        '''esto se ejecuta cuando instaciamos B'''
        print("Soy de clase B")

    def b(self):
        '''Metodode la clase b'''
        print("este metodo lo heredo de B")

class C(B,A):
    '''suc clase que herada primero de B y luego de A'''
    def c(self):
        print("Este metodo es de C")


c = C()
c.a()
c.b()
c.c()
print("\n--la vuelta de la herencia multiple--")
print(C.__mro__)
