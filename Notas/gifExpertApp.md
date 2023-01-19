# TEMAS

1. [Iniciando de cero el proyecto](#iniciando-de-cero-el-proyecto).

# Iniciando de cero el proyecto

Borramos todo lo de la carpeta source `src` excepto el archivo **main** y creamos nuestro componente principal **GifExpertApp.jsx** e importamos al **main**

# Anotaciones

> Los componentes solo deben de hacer una cosa solo para eso estan y no deben hacer mas.

Por ejemplo si queremos validar que la categoria que estamos escribiendo en el input no exista, y despues agregarlo.

No se debe de hacer en el componente del input ya que el Input solo esta para escribir y enviar la categoria.

Debemos validarlo dentro de la funcion (**onAddCategory**) donde se agrega la categoria antes de agregarlo.

# Cosas a tomar en cuenta para poner Algo dentro de un funtional component.

- **¿Que lo ata a estar ahi?**
  ver cuales son las **properties** que lo atan ahi y si es posible enviarselo de alguna manera.

Si es asi, ESO quiere decir que podemos sacarlo del **funtional component** o incluso sacarlo a otro Archivo.

> Eso soluciona el problema que se tenga volver asignar un espacio de memoria.

- **Nunca se debe poner una ejecucion de una funcion en un funcional component** ejemplo: `getGifs()`

Por que cada que ocurra un cambio de estado se renderice el componente tambien la funcion se va a ejecutar. en cada rerenderizada.

Ya que solo se debe ejecutar una sola vez.

**Hook useEffect**
se usa para disparar efectos secundarios

¿que es un efecto secundario?
algun proceso que se quiere pase cuando cambie algo

# Guardar las imagenes de la peticion en un estado.

NOTA: se sabe que cuando se realiza la peticion y como la funcion es async este retorna una promesa.
Por lo que si se busca persistir en un estado esas imagenes la invocacion de la funcion se puede tratar con un **then()** para decirle que voy hacer con la data.

En este caso vamos a guardar las imagenes en un estado.

```js
useEffect(() => {
  getGifs(category).then((newImg) => setImages(newImg));
}, []);
```

Tambien se puede hacer creando una funcion asincrona arriba del useEffect y que en esa funcion asincrona se invoque la petición y se guarde en una variable.

y ya en el use effect invocar la funcion asincrona creada.

> Esto se hace asi por que la funcion o callback del useEffect no puede ser async ya que al ser asincrono retorna una promesa y arroja un error.

# Orden recomendado de las importaciones

1. Importaciones de react.
1. Importaciones de terceros.
1. Importaciones de nuestro código.
1. Funciones que no son propiamente componentes o hooks

# Por que crear un Custom Hook

Eventualmente van a tener relacion con algun estado.
Reutilizar ciertas funcionalidades del mismo.

Aplica el principio de Drive dutch Don't repeat yourself.

# Optimizacion de las importaciones

## Archivos de barril

Esto es propia de javascript y puede funcionar tambien en typescript.

La idea es tener centralizadas las exportaciones de nuestros componentes o directorios.

- Hacer un index.js en la carpeta que se quiera agrupar los componentes, es sabido que si se apunta a la carpeta lo que toma es el index.

- En el index se exportan todo lo que hay en el componente, es decir exporta el componente y lo toma de ahi.

```js
export * from "./AddCategories";
export * from "./GifGrid";
export * from "./GifItem";
```

- Asi podemos agrupar las importaciones como lo hace react. Apuntando solo a ala carpeta.
