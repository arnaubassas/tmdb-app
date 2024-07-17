# TMDB APP

Este repositorio trata sobre una aplicación para consultar información detallada de series de televisión utilizando la API de TMDB que se puede encontrar en: [API TMDB](https://developer.themoviedb.org/reference/intro/getting-started).

Es un proyecto realizado con React mediante [Vite](https://vitejs.dev/). El proyecto se ha creado con `npm create vite@latest`, que se puede consultar en la guía de [Vite](https://vitejs.dev/guide/).

##  Instalación e Inicialización

Para inicializar, debes descargarte el proyecto. Una vez descargado use `npm i` para instalar todas las dependencias.

Para ejecutar la aplicación se debe ejecutar el comando `npm run dev` y abrir en el navegador [http://localhost:5173](http://localhost:5173).

## Estructura de carpetas

```
src/
├── components/       # Componentes reutilizables 
├── img/              # Imágenes usadas a lo largo de la web
├── pages/            # Páginas renderizadas por react-router-dom

```
Dentro del directorio `src` también hay los siguientes archivos:
```
/App.scss          --> Archivo SCSS del layout.
/App.tsx           --> Layout de la página.
/const.ts          --> Archivo con constantes globales de la aplicación.
/interfaces.ts     --> Archivo con las interfaces.
/main.tsx          --> Archivo que inicializa la app y donde se encuentran las rutas.
/services.ts       --> Archivo con las peticiones a la API.
/utils.ts          --> Archivo con funciones reutilizables.
/theme.scss        --> Archivo con variables de SCSS globales.
```
## Procedimiento

El archivo `.env` es público porque la URL era pública y no tenía sentido ocultarlo en el código.

He procedido a crear componentes reutilizables como `Image`, `Slider` y `Card`. Esos componentes se utilizan a lo largo del código.

También he separado las distintas secciones de las páginas en componentes independientes para hacer más legible y escalable el código. Si se deseara añadir las mismas secciones que existen en la parte de series pero para películas, se podría reutilizar gran parte de los componentes ya creados.

En el diseño he dejado en la parte derecha del header una sección dedicada al usuario con una foto de avatar. También he implementado media queries para ajustar el diseño de la pagina "lista de series" a 2, 4 y 5 columnas, lo que garantiza que las filas siempre se llenen.

## Funcionamiento

### Página principal ###
En la páginia principal se muestra una lista de series, la cuál dispone de un buscador. Al final de esta página principal, hay un botón que permite cargar más contenido de esta lista. 
Se ha añadido un header que permite escoger entre 4 listas.

### Página de detalle ###
Si haces clic en una serie específica, te rediriges a la página del detalle de esa serie. 
En la parte superior se puede ver la información general. Seguidamente, se encuentra una slider con el elenco. A continuación, la temporada actual con información de esa. Finalmente, se encuentra un slider con opciones de series similares a la que se está consultando. En este último caso, las cards también te llevan su página de detalle.

## Partes mejorables

Estos puntos del código podrían haberse realizado de mejor forma pero no eran críticas y no impedían la ejecución del código:

- Para una web en producción el slider debería incorporar mediante arrows buttons para realizar el scroll horizontal.
- Tipar los errores de la API.
- Crear un dropdown para las secciones "popular", "top_rated", "on the air" y "airing today" cuando el diseño pasa a tamaño móbil.
- Mejorar la pantalla de Error y Loading para que sean más esteticas. 

## Nuevas funcionalidades 

Algunas funcionalidades a las que he tenido que renunciar por límite de tiempo son:

- Una página para elenco entero y una para todas las temporadas de la serie.
- Añadir filtros en la página principal para filtrar por género por ejemplo.
- El menú del header reaparezca cuando se escrollea hacia arriba aunque estés a media página, y poder tener acceso a sus opciones sin tener que subir hasta arriba de todo.


## Web deployada 

Aquí se puede acceder a la web deployada en netlify: [TMDB-APP](https://arnau-bassas-tmdb-app.netlify.app/).
