let free = false;
const validarCliente = (time)=> {
	let edad=prompt('Cual es tu edad?');
	if (edad > 18) {
		if(time >= 2 && time < 7 & free == false) {
			alert(`son las ${time}:00HsPodes pasar gratis`);
			free = true;
		} else {
			alert(`son las ${time}:00Hs Podes pasar pero tenes que pagar la entrada`);
		}
	} else {
		alert('Eres menor, no puedes pasar');
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
