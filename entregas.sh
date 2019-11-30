#!/bin/zsh
#Actualización de la rama vigente
git add .
git commit -m "$1"
git push origin actualizacion

#Sincronización de los archivos de producción
gulp --production
rsync -rv ~/Desarrollo/Technodomus/segunda/src/ ~/Desarrollo/Technodomus/paginaweb/src/ 
rsync -rv ~/Desarrollo/Technodomus/segunda/build/ ~/Desarrollo/Technodomus/originales/

ORIGINALES=/home/mauricio/Desarrollo/Technodomus/originales/

#Actualización del git de la página
git -C $ORIGINALES add .
git -C $$ORIGINALES commit -m "$1"
git push -C ORIGINALES -u origin master

