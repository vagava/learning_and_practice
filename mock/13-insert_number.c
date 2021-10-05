#include "lists.h"

listint_t *insert_node(listint_t **head, int number)
{
	listint_t *tmp = NULL, *new = NULL;

	tmp = head;

	while(tmp->n < number)
	{
		tmp = tmp->next;
	}

	new = malloc(sizeof(listint_t))

	new->n=number;
	new->next = tmp;
	
}