# #/usr/bin/python3
'''Use modulo urllib '''
# 
# import urllib.request
# 
# # simple form to use
# with urllib.request.urlopen('http://holbertonschool.com') as response:
#     html = response.read()
#     #print(html)
# 
# # HTTP se basa en peticiones y respuestas - el cliente hace peticiones y los servidores envían respuestas.
# # urllib.request refleja esto con un objeto Request que representa la petición HTTP que estás haciendo.
# # En su forma más simple se crea un objeto Request que especifica la URL que se quiere obtener.
# # Llamar a urlopen con este objeto Request devuelve un objeto respuesta para la URL solicitada.
# # Esta respuesta es un objeto tipo archivo, lo que significa que puedes por ejemplo llamar a .read() en la respuesta:
# 
# # creacion del objeto request
# req = urllib.request.Request('http://www.voidspace.org.uk')
# # Response es un objeto de respuesta, que es un objeto de tipo archivo
# with urllib.request.urlopen(req) as response:
#     #como es un objeto de tipo archivo, se puede usar el metodo .read()
#     the_page = response.read()
#     # print(the_page)
# 
# # peticion ftp: creacion del objeto request
# req_ftp = urllib.request.Request('ftp://example.com/')
# 
# # Peticion HTTP: ademas de obtener informacion, las peticiones http permiten:
# #   - Pasar datos para enviarlos al servidor
# #   - Pasar informacion adicional, metadatos.


#Ejemplos utiles:
import urllib.request

with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
    html = response

    print('Response:{}'.format(html))
    print('URL     :{}'.format(html.geturl()))
    headers = html.info()
    print("____________________________________________________")
    print("Headers: \n{}".format(headers))
    print("____________________________________________________")
    print('content :{}'.format(headers['content']))
    data = html.read().decode('utf-8')
    print("____________________________________________________")
    print("Data: \n{}".format(headers))
    print("____________________________________________________")
    print('LENGTH   :{}'.format(len(data)))
    print("DATA    :\n ***** \n{}".format(data))
    print("_______________________________Bytes________________")
    bites = html.info().as_bytes()
    print(type(bites))
