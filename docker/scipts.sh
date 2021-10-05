# para limpiar los archivos bausura que pueda generar la imagen
if [[ $(docker images -f "dangling=true" -q | wc -l) -gt 0 ]]; then docker rmi $(docker images -f "dangling=true" -q); fi
