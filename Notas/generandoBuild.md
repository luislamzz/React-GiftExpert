# Generando Build de produccion y despliegues.

Se recomienda ejecutar el comando `yarn` para ver si estan los **node_modules**
Antes de hacer el build se debe ver que la app funcione bien y sobre todo haber echo todas las pruebas.

Para hacer el Build se ejecuta el comando `yarn build`. vite genera una carpeta con el nombre de **dist** refiriendose a distribución. Precisamente esa carpeta es la que vamos a **desplegar**.

# Desplegar en netlify (deploy).

solo se tiene que arrastra la carpeta dist

# desplegar en git hub pages

- Inicializamos git en nuestro proyecto `git init` nos vamos a dar cuenta que ya se reconoce git por que los archivos que no ignora a parecen de las letras de color, mientras que los archivos que ignora las letras estan gris.

Tomamos lo que se conoce como fotografia, mas bien agregamos un commit para eso:

- hacemos `git add .` para que tome todos los commits (los cambios) que se han echo, puede que se el primer.
- hacemos `git commit -m "Primer commit"`
- Asi ya lo tenemos respaldo y si se quiere volver al ultimo commit solo se hace: `git checkout -- .` y se vuelve a restructurar como estaba.
