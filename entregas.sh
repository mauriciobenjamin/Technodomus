#!/bin/zsh
#Actualización de la rama vigente
gulp --production
git add .
git commit -m "$1"
git push origin actualizacion

#Sincronización de los archivos de producción
rsync -rv ~/Desarrollo/Technodomus/segunda/src/ ~/Desarrollo/Technodomus/paginaweb/src/ 
rsync -rv ~/Desarrollo/Technodomus/segunda/build/ ~/Desarrollo/Technodomus/originales/

#Actualización del git maestro
../paginaweb
git add .
git commit -m "$1"
git push origin master

#Actualización del git de la página
../originales
git add .
git commit -m "$1"
git push origin master

