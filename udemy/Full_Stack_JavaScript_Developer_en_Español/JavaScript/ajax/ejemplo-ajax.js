/*manipulando el DOM*/
const listCharacters = document.getElementById('lista-characters')
const boton = document.getElementById('boton')

/*Haciendo la consulta*/
function reqListener() {
  const characters = JSON.parse(this.responseText).results;
  console.log(characters);
  /*Crear item con la etiqueta <li></li> para cada mienbro de la lista
    el join sirve para unir un array con un separador determinado*/
  const charactersRender = characters.map(
    singleCharacter=>`<li>${singleCharacter.name}</li>`).join('');
  /* Inserta codigo html en el id='listCharacters' de <ul></ul>*/
  listCharacters.innerHTML= charactersRender;
}

var request = new XMLHttpRequest();
request.addEventListener('load', reqListener);
request.open('GET','http://localhost3001/users' );
request.send();

function enviarDatos() {
  request.open('POST', "http://localhost3001/users", true);
  request.setRequestHeader('Content-type', "aplication/x-www-form-urlencoded");
  request.send("nombre=jueves07");

}

boton.onclick = enviarDatos;
