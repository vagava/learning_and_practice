let usuario = [];
const bodyUsuario = document.getElementById('body-usuario')

function tomarIndiceUsuario () {
  let indice = Number(location.search.replace('?', '').split('=')[1]) + 1
  return indice.toString()
}

function obtenerUsuario() {
  fetch(`https://rickandmortyapi.com/api/character/${tomarIndiceUsuario()}`, {method:'GET'})
  .then(response=> response.json())
  .then(respuestausuario=>{
    console.log('respuestausuario', respuestausuario)
    usuario = respuestausuario
    render();
  })
};

function render() {
  const usuarioRender =`
  <tr><td class="campo-usuario" >Nombre</td><td>${usuario.name ? usuario.name : "vacio"}</td></tr>
  <tr><td class="campo-usuario" >Status</td><td>${usuario.status ? usuario.status : "vacio"}</td></tr>
  <tr><td class="campo-usuario" >Specie</td><td>${usuario.species ? usuario.species : "vacio"}</td></tr>`
  console.log(usuarioRender);
  bodyUsuario.innerHTML = usuarioRender;
}

obtenerUsuario();
