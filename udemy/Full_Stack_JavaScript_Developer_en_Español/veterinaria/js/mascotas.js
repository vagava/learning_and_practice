const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const formModal = document.getElementById('form-modal');
const botonGuardar = document.getElementById('boton-guardar');
const indiceOculto = document.getElementById('indice-oculto');
//const botonesEditar = document.getElementsByClassName('editar');

let mascotas =[
  {
    tipo: 'Gato',
    nombre:"Mishy",
    dueno: "Angelica"
  },
  {
    tipo: 'Perro',
    nombre:"Mondongo",
    dueno: "Vanessa"
  },
  {
    tipo: 'Gato',
    nombre:"Tarja",
    dueno: "Alejandra"
  }
];

  function listarMascotas() {
    /*Listar las mascotas:
    1) recorrer el array de mascotas con map
    2) darle fromato html para insertrlo en el documentHTML
    3) como map retorna un array, debemos con catenar el array con .join("")
    4) identificar en que elemento del documento se debe insertar el
    array que acabamos de crear (osea ponerle un id a la flag donde
    debe ir el contenido, en este caso <tbody id="lista-mascotas">)
    4.1) ya debe estar creara la variable global que hace referencia a la flag:
      const listaMascotas = document.getElementById('lista-mascotas');
    5) con la propuedad innerhtml agregar el contenido creado.
    */
    const htmlMascotas = mascotas.map((mascota,index)=>`
        <tr>
          <th scope="row">${index}</th>
          <td>${mascota.tipo}</td>
          <td>${mascota.nombre}</td>
          <td>${mascota.dueno}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info edit"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    /* Editar
    1) al boton edicar crearle una clase 'editar'
    2) tomar todos los botones con la clase editar (document.getElementsByClassName('editar'))
    esto retorna un objeto HTMLCollection que no se comporta comoun array
    3) convertir el objeto HTMLCollection en array con Array.from(objeto)
    4) como no necesito guardar el resultado uso un .foreach(function)
    parainyectarle la funcion editar.
    */
    Array.from(document.getElementsByClassName('edit')).forEach((botonEdit,index)=>botonEdit.onclick = edit(index));
    /*Mucho cuidado con los parentesis cundose iguala el
    botonEditar.onclick = edit,
    por que es muy diferente a botonEditar.onclick = edit() */
    Array.from(document.getElementsByClassName('delete')).forEach((botonDelete,index)=>botonDelete.onclick = deleteObject(index));

    /*console.log(htmlMascotas);*/
  };

/* crear*/
function submitData(event) {
  /*Agregrar una mascota:
  1) Ponerle id a los elementos del formulario modal
  2) atraparlos elementos creando varables globales
  3) como es un formulario envia por defecto los datos en la url, para evitar esto
  tambien se le debe crear un id y una variable global
  3.1) can la variable del fomulario y .onsubmit activamos la funcion enviar datos
  (submitData)
  4) creamos la variable datos, donde se van a capturar los datos del formulario
  en formato json y sus respectivas variablesglobales
  5) agregamos los datos capturados a la lista global de mascotas con .push(data)
  6) activamos al funcion guardar cen el boton guardar.
  */
    event.preventDefault();
    const datos = {
      tipo: tipo.value,
      nombre: nombre.value,
      dueno: dueno.value
    };
    const accion = botonGuardar.innerHTML;
    switch(accion) {
      case 'Editar':
        mascotas[indiceOculto.value] = datos;
        break;
      default:
        mascotas.push(datos);
        break;
    }
    listarMascotas();
    resetModal();
}

/* resetar datos y boton de modal */
function resetModal() {
  tipo.value = '';
  nombre.value = '';
  dueno.value = '';
  indiceOculto.value = '';
  botonGuardar.innerHTML = 'Crear'
}

/*Editar */
function edit(index) {
  return function cuandoHagoClick() {
    /*Cambiar el texto del boton a editar y abrir y cerrar la modal*/
    botonGuardar.innerHTML = 'Editar';
    $('#exampleModalCenter').modal('toggle');
    /*Agregar valores a los campos del formulario para editar */
    const mascota = mascotas[index];
    tipo.value = mascota.tipo;
    nombre.value = mascota.nombre;
    dueno.value = mascota.dueno;
    indiceOculto.value = index;
  };
};

/* Eliminar */

function deleteObject(index) {
  /* 1) la funcion debe recibir el index del objeto que se va a eliminar
    2) se debe hacer una function clousure para poder tomar el index correctamente
    3) verificar si recibe el index correctamente.
    4)

  */
  return function clickDelete() {
  /*console.log("index", index);*/
  /*delete mascotas[index]; no se puede usar por que deja un espacio vacio en el array*/
  /* vamos a filtrar la lista de mascotas, pasamos todos los objetos exepto el
  que se va a eiliminar*/
  mascotas = mascotas.filter((mascota, indexMascota)=> indexMascota !== index);
  listarMascotas();

  }
};

/* llamados */
listarMascotas();
formModal.onsubmit = submitData;
botonGuardar.onclick = submitData;
