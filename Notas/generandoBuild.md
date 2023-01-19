# Generando Build de produccion y despliegues.

Se recomienda ejecutar el comando `yarn` para ver si estan los **node_modules**
Antes de hacer el build se debe ver que la app funcione bien y sobre todo haber echo todas las pruebas.

Para hacer el Build se ejecuta el comando `yarn build`. vite genera una carpeta con el nombre de **dist** refiriendose a distribución. Precisamente esa carpeta es la que vamos a **desplegar**.

# Desplegar en netlify (deploy).

solo se tiene que arrastra la carpeta dist

# desplegar en git hub pages

## Preparando proyecto para subirlo a git hub pages.

- Inicializamos git en nuestro proyecto `git init` nos vamos a dar cuenta que ya se reconoce git por que los archivos que no ignora a parecen de las letras de color, mientras que los archivos que ignora las letras estan gris.

Tomamos lo que se conoce como fotografia, mas bien agregamos un commit para eso:

- hacemos `git add .` para que tome todos los commits (los cambios) que se han echo, puede que se el primer.
- hacemos `git commit -m "Primer commit"`
- Asi ya lo tenemos respaldo y si se quiere volver al ultimo commit solo se hace: `git checkout -- .` y se vuelve a restructurar como estaba.

## Subiendo a github.

Muchos de los comandos que aparecen en la pagina de git hub ya lo hicimos asi que nos pasamos a ala opcion de abajo copiamos lors 3 y ejecutamos los comandos en vscode.

Despues solo recargamos la página y ya veremos nuestro repositorio.

## git pages

Una forma es cambiar de nombre la carpeta **dist** a **docs**

HAcemos:
`git add.`
`git commit -m "Docs agregado"`
`git push`

Despues en github nos vamos a settings, luego a pages y ahi va a estar nuestro proyecto. Vamos a elegir **docs** para que este en pages.

Tenemos que esperar hasta que la pagina ya nos indique que podemos visitar el sitio pages.

Si entramos vemos que la App no funciona bien. Nos arroja en la consola errores 404 en algunos indexs.

Lo que pasa es que revisamos en el head del html inspeccionando vamos a ver que la ruta donde busca no es la que tiene la url que nos da git hub pages. asi que debemos indicarle que busque desde donde se encuentra el html poniendo **./talcosa**

lo que se tiene que hacer es en el docs cambiar el index.html y las rutas en el head agrega el punto slash `./`

y subimos a github:
`git add.`
`git commit -m "index.html del Docs actualizado"`
`git push`

Tenemos que esperar que vuelva a estar activo. para visitar.
