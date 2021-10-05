let cantidad = prompt('cuantos alumnos son?');
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt('Nombre del alumno ' + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
		alumnosTotales[p][1]++;
	}
}

for (let i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	________Presentes: ${alumnosTotales[alumno][1]} <br>
	________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
	if (30 - parseInt(alumnosTotales[alumno][1]) > 18) {
	resultado += ' <b>Reprobado por inasistencias</b> <br>'
	} else {
		resultado += '<br><br> '
	}
	document.write(resultado);
}

