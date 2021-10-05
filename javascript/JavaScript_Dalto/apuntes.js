// JavaScript:
// - es un lenguaje de programacion orientado a objetos
// - es un lenguaje interpretado
// - tiene Case Sensitive ( distingue de mayuysculas y minusculas)
// - tiene tipado dibil
// - y es un lenguaje dinamico
// - el contenido de la variable determina el tipo de la variable

// su funcion es darle dinamismo al sitio web de lado del cliente
// usa librerias y frameworks Reac, Angular, Vue.JS
// del lado del servidor se usa NodeJS

// COMO ENLAZAR JavaScript
// - Con eventos o linea: 
//	<h1 onclick="alert('hola')">TITULO DEL EVENTO</h1>
// - con la flag script:
//	<h1>TITULO DEL EVENTO</h1>
//	<script type="text/javascript">
//		alert('hola')
//	</script>
// - Enlazar en un archivo externo:
//	<h1>TITULO DEL EVENTO</h1>
//	<scrip src="codigo.js"></script>



// VARIABLES:
// se pueden declarar, inicializar y modificar
// Declarar:
// 		var nombre_variable;
//		let nombre_variable;
//		const nombre_variable = contenido_variable;
// Inicializar:
//		nombre_variable = "contenido de la variable"
//		(cuando no se inicializa una variable pero se usa, su contenido sera undefined)
// Modificar:
// 		nombre_variable= "nuevo contenido"

// CREAR MULTIPLES VARIABLES:
// se pueden crear varia variables e inicializarlas.
//	let variable1 = 'hola', variable2 = 'que', variable3 = 'mas'

// ALCANCE DEL SCOPE:
// var: le da un alcance general a la variable
// let: limita el alcance del a variable al espacio o condicion que la contiene
// const : las variables constantes no se les puede cambiar el valor, se les define su valor una vez y
// nunca mas se le puede volver a cambiar el valor, las variables tipo const, no se pueden declarar y
// luego inicializar, se deben declarar e inicializar en la misma liena.
//		const nombre_variable = contenido-variable;

// TIPOS DE DATOS: (Primitivos)
// string:pueden ir en '' o "" o ``
// number: enteros
// boleanos = 0 y 1 (true o false)
// casos especiales:
//	undefined: es un tipo de dato que esta definido en elprograma pero no esta inicializado
//		let numero;
// 		alert(numero)
//		(saldra un mensaje con la palaraba Undefined, por que la variable numero no tiene valor)
//	Null: vacio, nulo
//		let numero = null;
//		(significa que la variable tiene un valor vacio y esto tiene sentido para javascript)
//	Nan: (Not a Number), aparece cuanto intetamos hacer operaciones con datos que no son numeros


// recipiente = "Estoy aprendiendo javascript";
// alert(recipiente);

//fucnion prompt(): muestra un mensaje en pantalla y espera que el usuario responda ese mensaje,
// la respuesta del usiario es retornada y puede ser guardada en una variable.

// let nombre = prompt("Hola, dime tu nombre.");
// alert("Hola " + nombre)

// OPERADORES
// - Asignacion: =, +=, -=, *=, /=, %=, **=.
// - Aritmeticos: +, --, /, **, ++, *, -.

// CONCATENACION
// con el signo "+" cuando son dos strings
// saludo = "Hola Vane ";
// pregunta = "como estas?";
// frase = saludo + pregunta;
// document.write(frase);
// para numeros forzando el string ("" + 8 + 4)
// numero1 = 52;
// numero2= 6;
// concat_numeros = "" + numero1 + numero2;
// con el metodo .concat de los strings
// nuevo_nombre = Vanessa;
// Saludo_nombre = "Hola ".concat(nuevo_nombre);
// con ${}, solo cincionan con este tipo de comillas: ``
// frase_corchetes=`hola, soy ${nuevo_nombre}, y estoy aprendiendo javascript`;

// escape de comillas: ' "" ', " '' ".
// simples = " hola soy 'vane', bye";
// dobles = 'hola soy "vane", bye';


// OPERADORES DE COMPARACION : (retornan valores booleanos)
// (equiality) ==, (inequality) !=,(identity) ===, (Non-identity) !==, (greater than) >,
// (greater than or equal) >=, (less than) <, (less than or equal) <=

//OPERADORES LOGICOS: (retornan valores booleanos)
// (AND) &&, (OR) ||, (NOT) !

// CAMEL CASE: la primera palabra NO inicia con mayuscula.
// nombreVariable, funcionParaHallarElTamano

// CONDICIONALES: if, else if, else


// ---------------------- capitulo 2 ----------------------------

// ARRAYS: ya no son un tipo de datos primitivo, sino que ya es un objeto
// en el que sepuede guardar varios datos de cualquier tipo.

// Como crear un array: entre corchetes,se listan los elementos separadospor comas.
// 	arrayDeFrutas = ['manzana', 'Banano', 'pera'];

// Como acceder alos elementos del array.
// arrayDeFrutas[0] **'manzana'**
// arrayDeFrutas[1] **'Banano'**
// arrayDeFrutas[2] **'pera'**
// arrayDeFrutas[3] **undefined**
// las posiciones del array ya estan definidas, cuando accedemos a una posicion a la que no le hemos asignado nada saldra el mensjae 'undefined'
// cuantas posiciones estan definidas en un array?

// let frutas = ['manzana', 'Banano', 'pera'];
//document.write(frutas[0])

// ARRAYS ASOCIATIVOS: ***Funcionanan como diccionarios***
// se agrupan en {}, seria el formato Key:Value, separado por comas
//	arrayAsociativo = {Nombre : "Vanessa", procesador : "Intel Core 7", ram : "16GB", espacio : "1TB"}
//	arrayAsociativo[Nombre] **'Vanessa'**

// let pc1 = {
// 	nombre: 'VanessaPC',
// 	procesador: 'Intel Core I7',
// 	ram: '16GB',
// 	espacio: '1TB'
// };
// 
// let nombre = pc1['nombre'];
// let procesador = pc1['procesador'];
// let ram = pc1['ram'];
// let espacio = pc1['espacio'];
//
// frase =`el nombre de mi PC es: <b>${nombre} </b><br>
// 				el procesador es: <b>${procesador} </b> <br>
// 				la memoria ram es de: <b>${ram} </b> <br>
// 				el espacio en disco es de <b>${espacio}</b>`;
//
// document.write(frase);

// BUCLES E ITERACION
// Normales: Wile, Do Wile, For.
// for in: muestra la posicion de los elementos en el array para mostrarlos
// se debe usar array[posicion]

// let animales = ['gato','perro', 'tiranosaurio rex'];

// for (animal in animales) {
// 	document.write(animal + ' : ' + animales[animal] +'<br>');
// }
// document.write('<br>');
// for of: nos muestra el valor de esos elementos

// for (animal of animales) {
// 	document.write(animal + '<br>');
// }


// Sentencias
// break: cuando se ejecuta el break termina de ejecutar el bucle y continua en el programa
// continue: cuando llega a una condicion especifica no hacenada y continua en el bucle
// label: es una sentencia que da nombre a un bloque de codigo para que las sentencias beack y
// continue(que son las unicas que pueden saltar afuera de su bloque de codigo) puedan terminar
// un bucle externo. Label puede tener cualquier nombre.

//array1 = ['maria', ' josefa', 'roberta'];
//array2 = ['pedro', 'marcelo', array1, 'josefina'];
//
//label: //(tambien puede ser 'cicloFor:')
//for (let array in array2) {
//	if (array == 2) {
//		for (let array of array1) {
//			if (array == 'maria') {
//				continue label //('cicloFor');
//				break label //('cicloFor');
//			}
//			document.write(array + '<br>');
//		}
//	} else {
//		document.write(array2[array] + '<br>')
//	}
//}

// FUNCIONES: es una porcion de codigo que lo asignamos a un nombre o alias. para evitar reescribir
// todo el bloque de codigo cadavez que lo necesitamos y simpremente llamar a su nombre o alias y ejecutarlo.

// Definicion: para definir una funcion se usa la palabra reservada 'funcion' seguido del nombre y los argumentos que recibe,
// sino recibe ningun armuento se escribe parentesisi vacios.
// 			funcion suma('args'){
// 				codigo ...
// 			}
// Las funciones las podemos guardar en una variable:
// cosnt suma = funcion('args'){
//						codigo ...
//						}
// -------------------------------------------
// Fuciones flecha: estas funciones ayudan a simplificar el codigo y en caso de funciones simples que contienen una linea 
// se peuden escribir de varias formas:
// Forma 1:
// const suma = ('args')=>{
//							codigo ...
//							}
// Forma 2:
// const suma = args => codigo ...
// --------------------------------------------


// ------------------- Capitulo 3 ----------------------------
// Programacion orientada a objetos:
// CONCEPTOS BASICOS: clase, Objeto, atributo, Metodo, Constructor, instanciacion.
// las instancias siempre de deben hacer con CONST

// Definir una clase:
// **NOTA: *THIS* es lo mismo que el self en python, lo que hace es seleccionar el propio objeto y asignarle una caracteristica
// class nombreDeLaClase {
// 	constructor(caracteristicasDelConstructor) {
// 		this.caracteristicas = caracteristicaDelConstrucctor
// 	}
// }
// CREAR UN METODO: un metodoes una funcion destro una clase.
// las funciones flecha no se pueden usar para crear metodos,
// se debe hacer de la manera normal:
// metodo() {
//	codigo...
//  }
// EJEMPLO:
// class animal {
// 	constructor(especie, edad, color) {
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		this.informacion = `Soy ${this.especie}, tengo ${this.edad} años,
// 		y soy de color ${this.color}`;
// 	}
// 
// 	verInfo() {
// 		document.write(this.informacion + '<br>')
// 	}
// }

// const perro = new animal('perro', 5, 'Cafe');
// const gato = new animal('gato', 2, 'negro');
// const pajaro = new animal('Pajaro', 2, 'verde');

// document.write(perro.informacion + '<br>');
// document.write(gato.informacion + '<br>');
// document.write(pajaro.informacion + '<br>');

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// CARACTERISTICAS DE POO:
// Abstraccion: Aislar un objeto, Hacer que todo se resuma en sus caracteristicas principales, tomar las caracteristimas mas simples y comunes de todos los objetos de esa clase
// Modularidad: Dividir y solucionar elproblema por partes
// Encapsulamiento: intentar separar, guardar, o encapsular los datos para que no se tenga acceso desde otras partes.
// Polimorfismo: es como los objetos tienen un comportamiento distinto con el mismo metodo solo por que sus caracteristicas son distintas

// OTRAS CARACTERISTICAS DE POO: ** Herencia, Metodos estaticos, Metodos accesores (Getters, Setters)**
// Herencia: para crear una clase que hereda de otra se usa la palabra *extends*,
// para signar datos al constructor de la clase de la qye hereda se usa la funcion super()
// ****NO SE PUEDE TENER UN OBJETO CON ELMISMO NOMBRE DE LA CLASE!!!!***
// EJEMPLO HERENCIA:
// class Animal {
// 	constructor(especie, edad, color) {
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		this.informacion = `Soy ${this.especie}, tengo ${this.edad} años,
// 		y soy de color ${this.color}`;
// 	}
// 	verInfo() {
// 		document.write(this.informacion + '<br>')
// 	}
// }
// **herencia**
// class Perro extends Animal {
// 	constructor(especie, edad, color, raza){
// 		super(especie, edad,color);
// 		this.raza = raza;
// 	}
// 	ladrar(){
// 		alert('WAW!')
// 	}
// }
// const perro = new Perro('perro', 5, 'Cafe');
// const gato = new Animal('gato', 2, 'negro');
// const pajaro = new Animal('Pajaro', 2, 'verde');
// perro.ladrar();
// gato.verInfo();
// pajaro.verInfo();

// Metodos estaticos: es un metodo que no ne cesita que la clase se defina para poder ser creado.
// se usa la plabra *static* antes del metodo que se va a definir como estatico
// En el ejemplo anterior el metodo **ladrar** puede ser un metodo estaticopor que no usas las propiedades del objeto(por ej las definidas en el constructor)

// Metodos accesores:
// Getters: es para obtener un valor
// Setters: son para modificar o definir el valor, usa la palabra reservada *set*
// EJMPLO Metodo estatico y  Metodos accesores (Getters, Setters)

// class Animal {
// 	constructor(especie, edad, color) {
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		this.informacion = `Soy ${this.especie}, tengo ${this.edad} años,
// 		y soy de color ${this.color}`;
// 	}
// 	verInfo() {
// 		document.write(this.informacion + '<br>')
// 	}
// }
// // **herencia**
// class Perro extends Animal {
// 	constructor(especie, edad, color, raza){
// 		super(especie, edad,color);
// 		this.raza = raza;
// 	}
// 	// metodo estatico
// 	static ladrar(){
// 		alert('WAW!')
// 	}
// 	// Setter
// 	set modificarRaza(newRaza){
// 		this.raza = newRaza;
// 	}
// 	// Getter
// 	get obtenerRaza() {
// 		return this.raza;
// 	}
// }
// Perro.ladrar(); // no necesitouna instancia de la clase para poderusar el metodo estatico.
// const perro = new Perro('Perro', 5, 'Marron', 'Doberman');
// perro.modificarRaza = 'Pedro'; // los setter lo toma como propiedad y no como un metodo,por eso setiene que asignar con '='
// document.write(perro.obtenerRaza); // forma correcta de obtener informacion
