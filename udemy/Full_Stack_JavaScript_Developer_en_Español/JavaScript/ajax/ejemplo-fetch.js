const listaUsuarios = document.getElementById("body-usuarios");
const boton = document.getElementById("boton");
const limpiar = document.getElementById("limpiar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const indice = document.getElementById("indice");
let usuarios = [];
let botonesEliminar = null;
let botonesEditar = null;

function render() {
  /*Con operadores ternarios verificamos si si nos estan llegando esos campos*/
  const usuariosRender = usuarios
    .map((usuario, indice) => `<tr>
                      <td>${usuario.name ? usuario.name : "vacio"}</td>
                      <td>${usuario.status ? usuario.status : "vacio"}</td>
                      <td>${usuario.species ? usuario.species : "vacio"}</td>
                      <td><a class="ver" href="/JavaScript/ajax/index2.html?usuario=${indice}">Ver</a></td>
                      <td><button class="editar" data-indice=${indice}>Editar</button></td>
                      <td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
                    </tr>`)
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
  /* se deben llamar a los botones durante el render */
  botonesEliminar = document.getElementsByClassName('eliminar');
  /* COnbertimos el objetoq ue retona document enun array de botines
  para poder lo recorrer */
  Array.from(botonesEliminar).forEach(botonEliminar => {
    botonEliminar.onclick = eliminarUnUsuario;
  });
  botonesEditar = document.getElementsByClassName('editar');
  Array.from(botonesEditar).forEach(botonEditar => {
    botonEditar.onclick = editarUnUsuario;
  });
};

function enviarDatos(event) {
  event.preventDefault();
  let accion = event.target.innerText;
  console.log('accion', accion);
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    pais: pais.value};
  let url = null;
  let method = null;
  if(accion === 'Crear') {
    url = 'http://localhost:3001/users';
    method = "POST";
  } else if (accion === 'Editar') {
    if (indice.value) {
      url = `http://localhost:3001/users/${indice.value}`;
      method = "PUT";
    }
  } else {
    return;
  }
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
  .then(response => response.json()) // respuesta no se puede leer, se tranforma en json
  .then(respuestaJson=>{
    console.log('respuesta', respuestaJson);
    refrescar();
    restaurarBoton();
  }).catch(razon=>{
    console.log('enviar datos fallo, razon:', razon)
    restaurarBoton();
  })
};

function eliminarUnUsuario(event) {
  event.preventDefault();
  console.log('eliminando un usuario', event)
  fetch(`http://localhost:3001/users/${event.target.dataset.indice}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(respuestaJson=>{
    console.log('respuesta', respuestaJson);
    refrescar();
  })
}

function editarUnUsuario(event) {
  event.preventDefault();
  console.log('editando un usuario', event);
  if (event.target.dataset.indice) {
  const usuario = usuarios[event.target.dataset.indice];
  nombre.value = usuario.name ? usuario.name :'';
  apellido.value = usuario.status ? usuario.status :'';
  pais.value = usuario.species ? usuario.species :'';
  indice.value = event.target.dataset.indice;
  boton.innerText = 'Editar';
  } else {
    boton.innerText = 'Crear'
  }
};

function refrescar() {
  fetch('https://rickandmortyapi.com/api/character', {method:'GET'})
  .then(response=> response.json())
  .then(respuestausuarios=>{
    console.log('respuestausuarios', respuestausuarios.results)
    usuarios = respuestausuarios.results
    render();
  })
};

// crear un CRUD
// Create[x] (post)
// Read[]
// Update[x]
// Delete[x]
// Listar[x] (refrescar)

function restaurarBoton () {
  boton.innerText = 'Crear';
}
refrescar();
boton.onclick = enviarDatos;
limpiar.onclick = restaurarBoton;
