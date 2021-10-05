# lista_interna2 =['otra', 'lista']
# lista_interna = [1, 2, 3, lista_interna2]
# lista = ['cosa1', 'cosa2', 'cosa3', lista_interna]

# lista[3][3][1] = 'cosa'
# print(lista)

# lista1 = [1,1,2,3,4]
# lista2 = [5,4,3,6] 
# print(len(lista2))
# print("_________________")

# lista2 + [3,3,3,3,5]

# # print(lista1)
# print(lista2)
# # print(len(lista1))
# print(len(lista2))

# def f_lambda(text):
#     return lambda param: param + text

# resultado = f_lambda('hola')
# print(resultado(' que mas'))
# print(resultado('hello '))

# json

import json

json_persona = {'name':'Angelica', 'Apellido':'Fornaris', 'Edad': 28, 'ciudad': 'Medellin'}

json_persona_str = str(json_persona)

json_persona_dumps = json.dumps(json_persona)

json_perosna_fdic = json.loads(json_persona_dumps)

print("_______usando str()_________________\n")
print(json_persona_str)
print(type(json_persona_str))
print("_______Usando .dumps__________________\n")
print(json_persona_dumps)
print(type(json_persona_dumps))
print("_________________________")
print(json_perosna_fdic)
print(type(json_perosna_fdic))

