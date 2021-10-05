#include "binary.h"

Nodo* CrearNodo(int valor)
{
	Nodo *nuevoNodo = NULL;

	nuevoNodo = malloc(sizeof(Nodo));
	if(nuevoNodo = NULL)
		return NULL;
	
	nuevoNodo->valor = valor;
	nuevoNodo->izq = NULL;
	nuevoNodo->der = NULL;

	return (nuevoNodo);
}

void DestruirNodo(Nodo *nodo)
{
	nodo->izq = NULL;
	nodo->der = NULL;

	free(nodo);
}
