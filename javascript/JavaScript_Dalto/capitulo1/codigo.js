dienroCofla = prompt('Cuantodinero tienes, Cofla?');
// dienroRoberto = prompt('Cuantodinero tienes, Roberto?');
// dienroPedro = prompt('Cuantodinero tienes, Pedro?');

if (dienroCofla >= 0.6 && dienroCofla < 1) {
	alert('Comprate el helado de agua')
} else if (dienroCofla >= 1 && dienroCofla < 1.6) {
	alert('Comprate el helado de crema')
} else if (dienroCofla >= 1.6 && dienroCofla < 1.7) {
	alert('Comprate el helado de heladix')
} else if (dienroCofla >= 1.7 && dienroCofla < 1.8) {
	alert('Comprate el helado de heladovich')
} else if (dienroCofla >= 1.8 && dienroCofla < 2.9) {
	alert('Comprate el helado de helardo')
} else if (dienroCofla >= 2.9) {
	alert('helado con confites o el pote de 1/4kg')
} else {
	alert('lo siento, no te alcanza.')
}


