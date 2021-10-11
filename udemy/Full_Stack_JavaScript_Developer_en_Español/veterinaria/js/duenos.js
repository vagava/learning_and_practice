const listaDuenos = document.getElementById('lista-duenos');
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const formModal = document.getElementById('form-modal');
const botonGuardar = document.getElementById('boton-guardar');
const indiceOculto = document.getElementById('indice-oculto');
//const botonesEditar = document.getElementsByClassName('editar');

let duenos =[
  {
    identificacion: '1234567890',
    pais: 'Colombia',
    nombre:"Angelica",
    apellido: "Mora"
  },
  {
    identificacion: '0987654321',
    pais: 'Peru',
    nombre:"Alejandra",
    apellido: "Sarmiento"
  }
];

  function listarDuenos() {
    const htmlDuenos = duenos.map((dueno,index)=>`
        <tr>
          <th scope="row">${index}</th>
          <td>${dueno.identificacion}</td>
          <td>${dueno.pais}</td>
          <td>${dueno.nombre}</td>
          <td>${dueno.apellido}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info edit"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>`).join("");
    listaDuenos.innerHTML = htmlDuenos;
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
        duenos[indiceOculto.value] = datos;
        break;
      default:
        duenos.push(datos);
        break;
    }
    listarDuenos();
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
    const dueno = duenos[index];
    identificacion.value = dueno.identificacion;
    nombre.value = dueno.nombre;
    apellido.value = dueno.apellido;
    indiceOculto.value = index;
  };
};

/* Eliminar */

function deleteObject(index) {
  return function clickDelete() {
  /*console.log("index", index);*/
  duenos = duenos.filter((dueno, indexDueno)=> indexDueno !== index);
  listarDuenos();

  }
};

/* llamados */
listarDuenos();
formModal.onsubmit = submitData;
botonGuardar.onclick = submitData;

