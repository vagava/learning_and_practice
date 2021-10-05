import pickle

class Persona:

    def __init__(self, nombre, genero, edad):
        self.nombre = nombre
        self.genero = genero
        self.edad = edad
        print("se ha creado una persona con el nombre: ", self.nombre)

    def __str__(self):
        return "{} {} {}".format(self.nombre, self.genero, self.edad)

class ListaPersonas:

    personas = []

    def __init__(self):
        listaDePersonas=open("FicheroExterno", "ab+")
        listaDePersonas.seek(0)  # desplazamos el cursor al inicio del fichero

        try:
            self.personas = pickle.load(listaDePersonas)
            print("Se cargaron {} personas del fichero externo".format(len(self.personas)))
        except:
            print("el fichero esta vacio")

        finally:
            listaDePersonas.close()
            del(listaDePersonas)

    def agregarPersonas(self, persona):
        self.personas.append(persona)  # se agrerga persona a la lista
        self.guardarPersonasEnFicheroExterno()  # se guarta la persona en el fichero

    def mostrarPersonas(self):
        for persona in self.personas:
            print(persona)

    def guardarPersonasEnFicheroExterno(self):
        listaDePersonas = open("FicheroExterno", "wb")
        pickle.dump(self.personas, listaDePersonas)
        listaDePersonas.close()
        del(listaDePersonas)

    def mostrarInfoFicheroExterno(self):
        print("La informacion del fichero externo es:")
        for persona in self.personas:
            print(persona)



# miLista = ListaPersonas()
# p = Persona("Angelica", "Femenino", 25)
# miLista.agregarPersonas(p)
# miLista.mostrarInfoFicheroExterno()
p = Persona("Alejandras", "Femenino", 25)
# miLista.agregarPersonas(p)
# miLista.mostrarInfoFicheroExterno()
# p = Persona("Valentina", "Femenino", 22)
# miLista.agregarPersonas(p)

print(p.__str__)

