const miBoton = document.getElementById("miboton");

const ejecutarCuandoHagaClickEnElBoton = evento => {
  console.log(evento);
  alert('disteclick en el boton');
}
miBoton.addEventListener('click', ejecutarCuandoHagaClickEnElBoton);
