class Celulares {
	constructor(color, peso, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionDePantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncendido(){
		if(this.encendido == false) {
			alert('Celualr Prendido');
			this.encendido = true;
		} else {
			alert('Celular apagado');
		}
	}
	 

}
