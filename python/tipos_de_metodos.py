#!/usr/bin/python3
# @staticmethod: pueden ser llamados sin tener una instancia de la clase,
# no tienen acceso al exterior.
# Un método estático puede ser utilizado cuando se tiene una clase pero
# no necesariamente se tiene una instancia para poder accesar al método.

# Por ejemplo si se tiene una clase Math y se tiene un método llamado
# factorial (calcula el factorial de un número dado). Probablemente no
# se necesite tener una instancia específica para llamar al método, debido
# a esto se podría decidir hacer este método estático.

# class Math():
#     @staticmethod
#     def factorial(number):
#         if number == 0:
#             return 1
#         else:
#             return number * Math.factorial(number - 1)
# 
# class HelloWorld_NoStatic(object):
# 
#     saludo = 'Hola mundo'
#     def __init__(self):
#         self.saludo = 'No hay saludo'
# 
#     def saludoStaticmethod(self):
#         return self.saludo
#     def saludoClassmethod(self):
#         return self.saludo
# 












class HelloWorld:

    otro_mensaje = "soy otra cosa" # atributo de clase
    id = 0

    def __init__(self, mensaje="como estas" ):
        self.__saludo = mensaje

    @property
    def saludo(self):
        return self.__saludo

    @saludo.setter
    def set(self, mensaje):
        self.__saludo = mensaje




print_saludo = HelloWorld()

print(print_saludo.saludo)

# print_saludo.saludo = "Que mas pues"

print(print_saludo.saludo)

print(HelloWorld.otro_mensaje)

print(print_saludo.__dir__())
print("{}".format(print_saludo.__class__.__name__))


# print("\nstaticmethod: ")
# factorial = Math.factorial(5)
# print(factorial)
# 
# ## otro ejemplo
# 
# print("\n------ No static ------\n")
# 
# instancia = HelloWorld_NoStatic() # Realizamos una instancia para poder llamar a los métodos
# print(instancia.saludoStaticmethod())
# print(instancia.saludoClassmethod())
# 
# print("\n------  static   ------\n")
# print(HelloWorld.saludoStaticmethod(HelloWorld))
# print(HelloWorld.saludoClassmethod())
# 
# 
