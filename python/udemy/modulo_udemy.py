import herencia_udemy
from herencia_udemy import __defend

amorfo = Amorfo("caracol", 1, 5, True)
amorfo.defend()

mamifero = Mamifero("Oso",356,45,True, 80)
print(mamifero.milk)
mamifero.amamantar()

animal= Animal("Perro", 45, 40, True)

animal.defend()
