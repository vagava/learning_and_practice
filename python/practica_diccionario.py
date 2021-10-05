print("Este programa crea y valida un usuario")
nombre_usuario = input("por favor ingresa un nombre de usuairo (No se permiten puntos): ")
counter = 0
for i in nombre_usuario:
    if i == "@" or i==".":
        counter = counter + 1

while counter != 2:
    print ("No se permiten puntos, por favor intenta nuvemanete")
    nombre_usuario = input("por favor ingresa un nombre de usuairo valido: ")
    counter = 0
    for i in nombre_usuario:
        if i == "@" or i==".":
            counter = counter + 1

print("El usuario creado es: " + nombre_usuario)

contraseña = input("crea una contraseña de 8 caracteres: ")
while len(contraseña) != 8:
    print("la contraseña debe tener 8 caracteres.")
    print("por favor intenta de nuevo.")
    contraseña = input("crea una contraseña de 8 caracteres: ")

verificacion = input("verifica tu contraseña: ")

if verificacion in contraseña:
    print("usuario creado correctamente.")
else:
        print("Verificacion de contraseña incorrecta")
        print("debes iniciar de nuevo el programa, hasta pronto.")



