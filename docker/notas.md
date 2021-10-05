# Docker

Es una herramiente de creacion y administracion de contenedores (un motor de cotenerizacion)

Sirve para en capsular una aplicacion con todo lo que necesita para que funcione en cualquier entorno.

Se utiliza tipicamente en el despliegue de aplicaciones.

Cuando trabajamos con aplicacionescon en un equipo de trabajo necesitamos que todos los que esten desarrollando el codigo tangan las mismas especificaciones para correr la aplicacion,por ejemplo la misma version delsistema operativo, la misma version de la base de datos, las mismas acutalizaciones, etc. Docker permite crear un contenedor que tenga todas las caracteristicas que neceitamos y que ademas sean iguales para todos sin importar cual es el software o el hardware desde el cual esten accediendo

la idea ejecutar cualquier software en cualquier hardware.

Loq ue ofrece docker es poder ejecutar multiple aplicaciones, que tienen requerimientos distintos en un mismo computador, ayuda a utilizar los recursos de forma mas eficiente.

La alternativa a docker eran las maquinas virtuales, pero el problema es que cada maquina virtual necesita levantar supropio sistema operativo, sus propias bibliotecas y librerias etc,lo que al final se traduce en usar los mismos recursos una y otra vez de forma separada.

Docker frece la posibilidad de usar el mismo sistema operativo en varias aplicaciones al mismo tiempo.

Docker se usa en desarrollo para hacer test de la aplicacion, y en produccion para desplegar la aplicacion.

## Docker image

Es una plantilla (template), en la que se ponene las configuraciones de algunos programas para volver a ejecutarlos luego.

Es como un instalador, docker provee imagenes de programas como python, php, mysql, mongodb, etc.

Una imagen es el prunto de inicio para poder crear contenedores.

es comolo que hace gis, pero no solo para el codigo sino para todo el entorno que necesita la aplicacion para ejecutarse.

Las imagenes son inmutables, osea que las imagenes no se puedenmodificar, pero pueden ser clonadas o compartidas, cuando hacemos un cambio debemos volver a generar o contruir de nuevo la imagen.

Las imagenes tienen un id.

### Dokerfile
las imagenes son creadas usando una archivo que se llama Dockerfile, este archivo lo usa docker para leer una configuracion. en este archivo se le dice que programa necesita, que interprete, que base de datos, cuales librerias, tambien se le dice que comandos necesitamos que ejecute, cuales archivos copiar, etc. una vez termine generas una imagen de la aplicacion.

### Como instalar una imagen

- **Docker hub** (*hub.docker.com*):
Esta pagina es una lista de imagenes que podemos descargar (MySQL, python, lunux, windows, etc).Cada imagen tiene sus propias instrucciones y su propia documentacion.

ejemplo: descargar imagen "Hello-world"
commando: `docker pull hello-world`

ejemplo: descargar imagen "Ubuntu"
Comando: `docker pull ubuntu`

ejemplo: descargar imagen "nginx"
Comando: `docker pull nginx`

## Contenedor
"procesosque se crean a partir de imagenes"
Es un espciondonde ira la apliacion con todos los programas que necesita e ira de manera aislada o separada de otras aplicaciones.
Es una instancia de una imagen o la ejecucion de la instancia de una imagen.

El comando `run` ejecuta procesos apartir de una imagen, estos procesos se les conoce como contenedores.

Cada contenedor tiene un id unico, quepermite diferenciarlos,amedas su rendimiento es muy altoy se parece mucho al rendimiento de un programa nativo.


## Comandos de docker

- `docker images`: provee unalista delas imagenes que tengo instaladas en este momento.
    - REPOSITORY: Nombre del repositorio
    - TAG: version de la imagen (latest: por defecto, es la ultima version)
    - IMAGE ID: identificador unido de la imagen dentro del computador
    - CREATED: fehca de creacion
    - SIZE: peso.

- `docker serch <imagen que quiero buscar>`: Busca y trae una lista de las imagenes disponibles con el nombre de la imagen que quiero buscar

- `docker pull <nombre imagen>`: descarga la imagen

- `docker run <imagen>`: Ejecuta procesos a partir de una imagen. Estos procesos se conocen como contenedores. Si la imagen existe y no la tenemos descargada, la descargay la ejecuta.
    - flag `-it` ejecutamos un programa de manera interactiva.Por ejemplo: `docker run -it ubuntu bash`
    - Flag `-p`: toma el puerto interno del contenedor y lo va hacer accesible a travez de otro puerto en este mismo computador, ej: `-p 3000:80`: le estoy diciendo que internamente fucione en el puerto 80 pero que sea accesible a traves del puerto 3000 en este computador. para problarlo escribimos "localhost:3000" en el navegador y debe traer el contenido que estamos ejecutanto en el contenedor. (`docker run -p 5000:80 nginx`)
    - Flag `-d`: Sirve para ejecutar un contenedor en segundo plano.
    - Flag `-e`: Para asignar variables de entorno, para saber que variables de entorno se puede pasar ver la documentacionde la imagen ejemplo: `docker run -d -p 3307:3306 --name myDataBase -e MYSQL_ROOT_PASSWORD=secret-passwd mysql`

- `docker ps`: Muestra unalista delos contenedores que estamos ejecutando.
    - flaf `-a`, muesta un historial de los contenedores que ya no se estan ejecutando.
    - flag `-q`: muestra los id de los contenedores
    - Flag `--format=`: para formatear el string delcomando ps, ejemplo: `docker ps --format="ID\t{{.ID}}\Nombre:\t{{.Names}}"` (la informacion esta en la documentacionde docker, en formatting)

- `docker rm <name/id contenedor>`: Eliminar un contenedor.
    - Flag `-f`: fuerza la elimunacion del contenedor
    (para eliminar varios contenedores al tiempo: `docker rm $(docker ps  -aq)`)

- `docker stop|start <name/id contenedor>`: inicia o para un contenerdor
    -(para stop|star varios contenedores al tiempo: `docker stop $(docker ps -aq`)

- `docker build --rm=true --force-rm=true -t <nombre_imagen>:latest`: para crear una imagen.
debe tener un docker file ya creado.

- `docker exec -it CONTAINER_ID bash` : Acceder al contenedor.

- `docker start <contenedor cerrado/suspendido>`: reinica un contenedor que se cerro.

## Formatear el string de salida de docker

podemos usar la flag `--format=` y describir como queremos que nos imprima por pantalla es estado de los contenedores. ejemplo: `docker ps --format="ID\t{{.ID}}\Nombre:\t{{.Names}}"`

Tambien podemos crear una variable de entorno en el archivo .bashrc:
```
#docker format
export DOCKER_FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nPORT\t{{.Ports}}\nStatus\t{{.Status}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSize\t{{.Size}}\n"
```
Para usar esta variable de entorno debemos cargar el archivo con `source ~/.bashrc`.

Luego para suarla con


## Resources
- [nginx-inside-docker-ubuntu](https://www.novixys.com/blog/nginx-inside-docker-ubuntu-howto/)
- [How To Create Custom 404 Page in NGINX](https://ubiq.co/tech-blog/how-to-create-custom-404-page-in-nginx/)
- [Imagenes de Docker: hub.docker.com](hub.docker.com)
- [desinstalar nginx](https://qastack.mx/ubuntu/235347/what-is-the-best-way-to-uninstall-nginx)


## errors:
- [nginx- duplicate default server error](https://stackoverflow.com/questions/30973774/nginx-duplicate-default-server-error)


