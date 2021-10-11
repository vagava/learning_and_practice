const listaVeterinarios = document.getElementById('lista-veterinarios');
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const formModal = document.getElementById('form-modal');
const botonGuardar = document.getElementById('boton-guardar');
const indiceOculto = document.getElementById('indice-oculto');
//const botonesEditar = document.getElementsByClassName('editar');

let veterinarios =[
  {
    identificacion: '1234567890',
    pais: 'Colombia',
    nombre:"Ana",
    apellido: "Mora"
  },
  {
    identificacion: '0987654321',
    pais: 'Peru',
    nombre:"Andrea",
    apellido: "Sarmiento"
  }
];

  function listarVeterinarios() {
    const htmlVeterinarios = veterinarios.map((veterinario,index)=>`
        <tr>
          <th scope="row">${index}</th>
          <td>${veterinario.identificacion}</td>
          <td>${veterinario.pais}</td>
          <td>${veterinario.nombre}</td>
          <td>${veterinario.apellido}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info edit"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>`).join("");
    listaVeterinarios.innerHTML = htmlVeterinarios;
    Array.from(document.getElementsByClassName('edit')).forEach((botonEdit,index)=>botonEdit.onclick = edit(index));
    Array.from(document.getElementsByClassName('delete')).forEach((botonDelete,index)=>botonDelete.onclick = deleteObject(index));
  };

/* crear*/
function submitData(event) {
    event.preventDefault();
    const datos = {
      identificacion: identificacion.value,
      pais: pais.value,
      nombre: nombre.value,
      apellido: apellido.value
    };
    const accion = botonGuardar.innerHTML;
    switch(accion) {
      case 'Editar':
        veterinarios[indiceOculto.value] = datos;
        break;
      default:
        veterinarios.push(datos);
        break;
    }
    listarVeterinarios();
    resetModal();
}

/* resetar datos y boton de modal */
function resetModal() {
  identificacion.value = '';
  pais.value = '';
  nombre.value = '';
  apellido.value = '';
  indiceOculto.value = '';
  botonGuardar.innerHTML = 'Crear'
}

/*Editar */
function edit(index) {
  return function cuandoHagoClick() {
    botonGuardar.innerHTML = 'Editar';
    $('#exampleModalCenter').modal('toggle');
    const veterinario = veterinarios[index];
    identificacion.value = veterinario.identificacion;
    nombre.value = veterinario.nombre;
    apellido.value = veterinario.apellido;
    indiceOculto.value = index;
  };
};

/* Eliminar */

function deleteObject(index) {
  return function clickDelete() {
  /*console.log("index", index);*/
  veterinarios = veterinarios.filter((veterinario, indexVeterinario)=> indexVeterinario !== index);
  listarVeterinarios();

  }
};

/* llamados */
listarVeterinarios();
formModal.onsubmit = submitData;
botonGuardar.onclick = submitData;

