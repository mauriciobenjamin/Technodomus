#!/bin/zsh
#Actualización de la rama vigente
git add .
git commit -m "$1"
git push origin actualizacion

#Sincronización de los archivos de producción
gulp --production
rsync -rva ./build/ ../technodomus_produccion/respositorio

ORIGINALES=/data/Desarrollo/technodomus_produccion/respositorio

#Actualización del git de la página
git -C $ORIGINALES add .
git -C $ORIGINALES commit -m "$1"
git -C $ORIGINALES push -u origin master

