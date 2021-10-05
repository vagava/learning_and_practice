#herencia es la capacidad que tiene una clase de
# heredar los metodos y atributos de otra.
# esto permite reutilizar codigo.
# -Super clase-
# la super clase e sun clase base en donde se encuentran
#los atributos comunes de todos los objetos
# Ejmplos:
# Carro: chasis, 4 llantas, volante
# Productos super mercado: Referencia, nombre, precio, descripsion

class Producto:
    '''Super clase de un producto'''
    def __init__(self, referencia, nombre, pvp, descripcion):
        self.referencia = referencia
        self.nombre = nombre
        self.pvp = pvp
        self.descripcion = descripcion

    def __str__(self):
        '''string representacion'''
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"pvp\t\t {self.pvp}\n" \
               f"DESCRIPCION\t {self.descripcion}\n"

# Subclases- heredan los metodos y atributos de una super clase
# solo debe pasarse entre paretesis la super clase durante
# la definicion:
# clas subclase(SUPERCLASE):
# a la clase Adorno, no se le van a crear atributos nuevos
# solo usara los de la clase padre Producto
#

class Adorno(Producto):
    '''Suclase, hereda todos los atributos de la clase
    padre Producto
    '''
    pass

# para agregar atributos y metodos adicionales la
# la subclase se define de esta forma

class Alimento(Producto):
    '''Subclase, hereda los atributos y metodos de la super clase
    Producto:
    tendra atributos y metodos adicionales propios de
    la subclase
    '''
    productor = ""
    distribuidor = ""

    def __str__(self):
        '''string representation printable'''
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"PVP\t\t {self.pvp}\n" \
               f"DESCRIPCIÓN\t {self.descripcion}\n" \
               f"PRODUCTOR\t {self.productor}\n" \
               f"DISTRIBUIDOR\t {self.distribuidor}\n"

class Libro(Producto):
    '''Subclase, hereda de Producto
    tiene atributos y metodos propios
    '''
    isbn = ""
    autor = ""
    def __str__(self):
        '''sring representation printable'''
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"PVP\t\t {self.pvp}\n" \
               f"DESCRIPCIÓN\t {self.descripcion}\n" \
               f"ISBN\t\t {self.isbn}\n" \
               f"AUTOR\t\t {self.autor}\n"









#EJEMPLOS

adorno = Adorno(2034, "Vaso adornado", 15, "Vaso de porcelana")
print(adorno)
print('---')

alimento = Alimento(2035, "Botella de Aceite de oliva", 5, "250 ML")
alimento.productor = "La Aceitera"
alimento.distribuidor = "Dictribuciones S.A"
print(alimento)
print('---')

libro = Libro(2036, "Cosina Mediterranea", 9, "Recetas sanas y buenas")
libro.isbn = "0-123456-78-9"
libro.autor = "Doña Juana"
print(libro)
print('---')

# Trabajo en conjunto

productos = [adorno, alimento]
productos.append(libro)
print(productos) # imprime como objetos de maquina
print('---')

# para imprimir los productos de la lista

for producto in productos:
    print(producto, '\n')
print('---')

# acceder a los atributos compartidos de los objetos

for producto in productos:
    print(producto.referencia, producto.nombre)
print('---')

#comprobar si una instancia es de una determinada clase
#asi prodremos mostrar unos otributos u otros
print('-- COMPROBAR UNA INSTANCIA --')
for producto in productos:
    if isinstance(producto, Adorno):
        print(producto.referencia, producto.nombre)
    elif isinstance(producto, Alimento):
        print(producto.referencia, producto.nombre, producto.productor)
    elif isinstance(producto, Libro):
        print(producto.referencia, producto.nombre, producto.isbn)
print('---')


# Enumerar los atributos u metodos de una clase o instancia

print(dir(Alimento))
