const fabricaDePromesas = (indice) =>
  new Promise((resolve, reject)=> {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
    // console.log('tiempo Reject', tiempoReject)
    // console.log('tiempo Resolved', tiempoResolved)

    setTimeout(()=> {
      reject(`la Promesa ${indice} fallo`);
    }, tiempoReject);

    setTimeout(()=> {
      resolve(`la promesa ${indice} esta satisfecha`);
    },tiempoResolved);
  });

let misPromesas = []
for(let i=0; i < 10; i++) {
  misPromesas = [...misPromesas,fabricaDePromesas(i)];
}

Promise.allSettled(misPromesas).then(respuesta => console.log(respuesta)).catch(razon =>
  console.log(razon));

// Promise.all(misPromesas).then(respuesta => console.log(respuesta))

/*misPromesas.forEach(promesaActual => {
  promesaActual.then(respuesta => console.log(respuesta)).catch(razon =>
    console.log(razon))
});*/

/*miPromesa.then(
  respuesta=>console.log(respuesta),
  razon => console.log(razon)
);*/
