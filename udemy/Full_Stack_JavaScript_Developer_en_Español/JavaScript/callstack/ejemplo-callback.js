// setTimeout(()=>{
// 	console.log('me ejecute despues');
// }, 3000) // recibe el tiempo en milisegundos
// ___________________________________
// const ejecutarMasTarde = () => {
// 	console.log("me ejeucte despues");
// }
// setTimeout(ejecutarMasTarde, 3000);
// ______________________________
// const ejecutarMasTarde = () => {
//   setTimeout( () => {
//     
//   }, 3000)
// };
// ejecutarMasTarde();
// __________________________________

// const funcionDeCallback = () => {
//   console.log("me ejeucte despues");
// }

// const ejecutarMasTarde = () => {
//   setTimeout(funcionDeCallback, 3000);
// };

// ejecutarMasTarde();
// ___________________________________

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function multifuncion (num1, num2, callback) {
  const resultado = callback(num1, num2);
  console.log(resultado)
}
// forma 1 de hacer un callback
multifuncion(5,4, sumar)

// Forma 2 de hacer un calback

multifuncion(5,4, function (num1, num2) {
  return num1 + num2;
})
