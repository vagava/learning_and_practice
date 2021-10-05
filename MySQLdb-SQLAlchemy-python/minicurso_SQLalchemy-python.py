
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import sessionmaker

#importo el mensaje de error
from sqlalchemy.exc import NoResultFound

# establecer la conexione entre la aplicacion y el gestor
# url= dialect+driver://username:password@host:port/database
engine = create_engine('mysql://root:root@localhost/Orm')

# clase principal de la se hereda todo con SQLalchemy
Base = declarative_base()

# para que una clase sea considerada un modelo debe OBLIGATRORIAMENTE heredar de otra clase.
class User(Base):
	# establecer nombre para la tabla
	__tablename__ = 'users'

	# atributos de la clase = columnas de la tabla
	# para asignar el tipo de dato debemos trabajar con objetos de tipo colum (que debemos importar previamente)
	id = Column(Integer(), primary_key=True)
	user_name = Column(String(50), nullable=False, unique=True)
	email = Column(String(50), nullable=False, unique=True)
	create_at = Column(DateTime(), default=datetime.now())

	def __str__(self):
		return self.user_name

#creamos la relacion entre la conexion y los modelos atravez de sesiones
# a traves de sessiones creamos, consultamos, y modificamos los registros de la BD
# esto es similar a lo que hicimos con Base, una funcion que retorna una clase 'Session'
# a partir de esta clase se pueden crear muchas sesiones

Session = sessionmaker(engine)

#creamosla instancia de la case Session
session = Session()

if __name__ == '__main__':
	# permite eliminar todo de la base de datos
	Base.metadata.drop_all(engine)
	#crear las tablas
	Base.metadata.create_all(engine)

	#datos que deseamos que persistan y agregar a la base de datos
	user2 = User(user_name='User2', email='user2@hola.com')
	user3 = User(user_name='User3', email='user3@hola.com')
	user4 = User(user_name='User4', email='user4@hola.com')
	user1 = User(user_name='User1', email='user1@hola.com')

# pare crear los registros en la tabla usamos el objeto session
# 1. con ssesion.add, agregamoslos datos a un stack, (como una sala de espera como 'git add')
session.add(user1)
session.add(user2)
session.add(user3)
session.add(user4)

# 2. con session.commit() loque hace es ejecutar los cambios en la base de datos y van a persistir
session.commit()

# obtener registros mediante consultas
# listar en consola todos los usuarios que estan en la tabla users 'Select * From users;'
# session.query(Clase)= recibe como parametro la clase que creo la tabla sobre la que vamos a consultar
# esto retorna un objeto iretable
# users = session.query(User).all()

# vamos a iterar el objeto
#for user in users:
#	print(user)

# obtener registros a partir deuna condicion
# se usa el metodo .filter(condicion) = el metodo filter recibe como parametro la condicion para seleccionar
#los datos, amedas tambien permuite la concatenacion => .filter(condicin1).filter(consicion2)...

# obtener todos losusuario cuyo ID >= 2 y el user_mane == 'User3'
# SELECT * FROM users WHERE id >=2 and user_name = 'User3';
# users = session.query(User).filter(
# 	User.id >= 2
# ).filter(
# 	User.user_name == 'User3'
# )
# for user in users:
# 	print(user)

# para indicar explicitamente con que columnas queremos trabajar las especificamos con .quiery(Clase.TablaName)
# con esto ya no tenemos objetos de tipo user, sino tuplas, los valores que contienen las tuplas
# son el contenido de las columnas seleccionadas
# users = session.query(User.id, User.user_name, User.email).filter(
# 	User.id >= 2
# )
# for user in users:
# 	print(user)

# Cuando a .quiery() le pasamos como argumento una clase, nos retorna instancias de esa clase
# Cuando a .quiery() le pasamos como argumento los atributos de la clase, nos retorna tuplas

# Cuando son instancias de la clase puedo acceder a sus atributos

# users = session.query(User).filter(
# 	User.id >=2
# )
# 
# for user in users:
# 	print(user.create_at)

# cuando vamos hacer una consulta que sabemos que solo va a retornar un registro, sea por que es una
# llave primaria o por que esa columna solo almacena valores unicos, esa consulta se puede hacer con
# los metodos .first o .one

# .first = no retorna un objeto iterable, solo retorna el primer objeto que encuentra con la condicion
# en caso de que no exitat un registro con la conticion retorna None.
# user = session.query(User).filter(
# 	User.id == 1
# ).first()
# if user:
# 	print(user)
# else:
# 	print('El usuarion no existe en la Base de Datos')

#.one = es lo mismo que filter, la diferencia es que cuando el registro no existe lanza una Excepcion : NoResultFound

#try:
#	user = session.query(User).filter(
#			User.id == 1
#		).one()
#	print(user)
#except NoResultFound as err:
#	print('El usuarion no existe en la Base de Datos')

# ACTUALIZAR REGISTROS
# froma 1.
# user = session.query(User).filter(User.id == 1).first()
# print(user)

# Accedemos a los atributos del objeto y los reasignamos
# user.user_name = 'Nuevo username'
# user.email = 'nuevouser@hola.com'

# los agregamos a la sala de espera
# session.add(user)

# Realizamos o confirmamos los cambios en la base de datos
# session.commit()


#forma 2. usando el metodo .update(), los cambios que se realizan se suben a la sala de espera
# session.query(User).filter(
# 	User.id == 2
# ).update(
# 	{
# 		User.user_name: 'Nuevo valor 2',
# 		User.email: 'nuevouser2@hola.com'
# 	}
# )
# confirmamos los cambios y los aplicamos a la Base de datos
# session.commit()

# ELIMINAR REGISTROS

session.query(User).filter(
	User.id == 53
).delete()

session.commit()
