#!/bin/bash

HERE=$PWD

function confirm() {
    read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 0
}

echo '=== 1. EMPAQUETANDO FRONT-END' && confirm
cd Angular-Frontend
ng build
cd $HERE

echo '=== 2. VACIANDO LA CARPETA ESTATICA DE SPRING-BOOT' && confirm
rm -rf "$HERE/juanmanuelgg/src/main/resources/static/*"
cd $HERE

echo '=== 3. MOVIENDO LA APLICACION DE ANGULAR DENTRO DE LA CARPETA ESTATICA DE SPRING-BOOT' && confirm
mv $HERE/Angular-Frontend/dist/Angular-Frontend/* "$HERE/juanmanuelgg/src/main/resources/static/"
cd $HERE