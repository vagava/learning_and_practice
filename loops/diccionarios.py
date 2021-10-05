sisben ={
		"123356":
			{
			"Nombre": "vanesa",
			"Edad": 15,
			"correo":"holaquemas@gmial.com",
			"Lista_telefonos":[None]
			},
		"0964566":
			{
			"Nombre": "Natalia",
			"Edad": 18,
			"correo":"nati_gafitas@gmial.com",
			"Lista_telefonos": [24124]
			},
}

davivienda= {
		"3463":
			{
			"Nombre": "Diana",
			"Edad": 12,
			"correo":"dianacolitas@gmial.com",
			"Lista_telefonos":[1324, 243565, 3456]
			},
		"0974657":
			{
			"Nombre": "Hugo",
			"Edad": 18,
			"correo":"hugo_capul@gmial.com",
			"Lista_telefonos":[3456345, 34643]
			},
		}

lista_de_bases_datos=[sisben, davivienda]
print ("El nombre es: {}".format(lista_de_bases_datos[0]['0964566']['Nombre']))
print("")
