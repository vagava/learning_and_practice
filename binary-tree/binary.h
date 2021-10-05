#ifndef BINARY_H
#define BINARY_H
#include <stdio.h>
#include <stdlib.h>

/*estructura del nodo*/
typedef struct nodo{
	int valor;
	struct nodo* izq;
	struct nodo* der;
}Nodo;

/*Arbol*/

typedef Nodo Arbol;

Nodo* CrearNodo(int valor);

#endif /*BINARY_H*/
