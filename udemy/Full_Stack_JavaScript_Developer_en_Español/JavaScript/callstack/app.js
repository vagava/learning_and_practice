// function obtenerNombre() {
//   return 'Vanessa'
// }
const obtenerNombre = () => "Vanessa"
// function obtenerApellido() {
//   return 'Garcia'
// }
const obtenerApellido = () => "Garcia"

function obtenerNombreCompleto() {
  const nombre = obtenerNombre();
  const apellido = obtenerApellido();
  return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();

console.log("Nombre completo ", nombreCompleto)
