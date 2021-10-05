class Coche():
    ''' un objeto tiene:
        - un estado
        - unas propiedades: establece las propiedades que los
            objetos de tipo cohe que en un futur pertenezcan a
            esta clase.
        - un comportamiento: comportamiento comun para todos
            los futuros objetos que pertenecen a esta clase.
    '''
    #propiedades
    def __init__(self):
        '''
        __init__ es la funcion constructor,es un metodo especial lo que hace es especificar
        claramente cual va a sar el estado inical de los objetos que pertenecen a la clase
        '''
        self.largoChasis = 250
        self.anchoChasis = 120
        self.ruedas = 4
        self.enmarcha = False

    #comportamiento == metodos
    def arrancar(self, arrancamos):
        '''
        Cuando llamemos a la funcoin "arrancar" necesitamos que
        la propuedad "enmarcha" del objeto creado pase de False
        a True, esto quiere decir que debe cambiar en sí mismo
        el vlaor de esa propiedad, para eso se usa el atributo *self*.
        '''
        self.enmarcha = arrancamos   #nombre_objeto.enmarcha = ' lo que contiene "arrancamos"

        if (self.enmarcha):
            return "El coche esta en marcha"
        else:
            return "El coche esta parado"

    def estado(self):
        print("El coche tiene", self.ruedas,"ruedas, un ancho de", self.anchoChasis, ", y un ancho de ",
        self.largoChasis)






# crear un objeto/instancia/ejemplar
# es lo mismo que instanciar una clase / instanciacion de clase

miCoche = Coche()

#ver las propiedades: Nomenclatura dle punto.
#       nombre_objeto.nombre_propiedad
#       nombre_objeto.metodo

print("El largo del coche es: ", miCoche.largoChasis)   # nombre_objeto.nombre_propiedad
print("El coche tiene: ", miCoche.ruedas, "ruedas")   # nombre_objeto.nombre_propiedad
print(miCoche.arrancar(True))   #nombre.objeto.metodo
miCoche.estado()

print("-------------> Segunda instancia / objeto <----------------")

miCoche2 = Coche()
print("El largo del coche es: ", miCoche2.largoChasis)
print("El coche tiene: ", miCoche2.ruedas, "ruedas")
print(miCoche2.arrancar(False))
miCoche2.ruedas = 2
miCoche2.estado()



