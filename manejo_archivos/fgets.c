#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	FILE *archivo;

	char caracteres[100];
	int j;
	char *token, *str;

	archivo = fopen("prueba.txt","r");

	if (archivo == NULL)
		exit(1);
	else
	{
		printf("\nEl contenido del archivo de prueba es \n\n");
		while (feof(archivo) == 0)
		{
			fgets(caracteres,100,archivo);
			printf("%s",caracteres);
			for (j = 0, str = caracteres; ;j++, str = NULL) {
				token = strtok(str, " ");
				if (token == NULL)
					break;
				printf("%d: %s\n", j, token);
			}
		}
	}
	fclose(archivo);
	return 0;
}
