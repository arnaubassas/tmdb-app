# TMDB APP

Este repositorio trata sobre un aplicación para consultar información detallada de séries de televisión usando la API de TMDB que se puede encontrar en: [Api TMDB](https://developer.themoviedb.org/reference/intro/getting-started).

Es un proyecto con react mediante [Vite](https://vitejs.dev/) el proyecto se inicia con $ npm create [vite@latest]((https://vitejs.dev/guide/)

##  Instalación e Inicialización

Para inicializar se debe realizar un pull del repositorio para descargarlo en local. Una vez descargado user `npm i` para instalar todas las dependencias.

Para ejecutar la aplicación se ejecutarà el comando `npm run dev` y abrir en el navegador [http://localhost:5173](http://localhost:5173).

## Estructura de carpetas

```
src/
├── components/       # Componentes reutilizables 
├── img/              # Imágenes úsadas a lo largo de la web
├── pages/            # Páginas renderizadas por react-router-dom

```
Dentro de src/ también hay los siguientes archivos:
```
/App.scss          --> archivo scss del layout.
/App.tsx           --> layout de la página.
/const.ts          --> archivo con constantes globales de la página.
/interfaces.ts     --> archivo con las interfaces.
/main.tsx          --> archivo que inicializa la app y donde encontrar las rutas.
/services.ts       --> archivo con las peticiones a la API.
/utils.ts          --> archivo con funciones reutilizables.
/theme.scss        --> archivo con variables de scss globales.
```
## Procedimiento

El archivo .env es público porque la url era pública y por tanto no servía de nada ocultarlo en el código.

He procedido creando componentes reutilizables como image, slider y card. Esos componentes se van usando a lo largo del código.

También he separado las distintas secciones de las páginas en componentes independientes para hacer más leíble y escalable el código. Si se quisiera añadir un las mismas secciones existentes en séries con películas se podría reutilizar gran cantidad de los componentes ya creados.

En el diseño he dejado en la parte derecha del header una sección dedicada al usuario con una foto de avatar. También he implementado media queries para ajustar el diseño de la pagina 'lista de series' a 2, 4 y 5 columnas, lo que garantiza que las filas siempre se llenen.

## Funcionamiento

Empiezas en la página de lista de séries. Puedes escoger entre 4 listas que están en el header o buscar por nombre a la barra de search. Al final de la página hay un boton para cargar más séries de la lista.

Si haces click alguna de las cards vas a la página de detalle de la série. En la parte superior puedes ver la información general. Seguidamente, se encuentra una slider con el elenco de la série. A continuación, la temporada actual de la série con información de esa. Finalmente, se encuentra un slider con opciones de séries similares a la que se está consultando. En este último caso, las cards también te llevan a la página de detalle de la seríe.

## Partes mejorables

Estos puntos del codigo podrían haberse realizado de forma mejor pero no eran muy críticas y no impedían la ejecución del código:

- Para una web en producción el slider debería incorporar mediante JS flechas para realizar el scroll horizontal.
- Tipar los errores de la API.
- Hacer un dropdown para las secciones "popular", "top_rated", "on the air" y "airing today" cuando el diseño pasa a un tamaño para móbil.
- Realizar una pantalla de Error y Loading más estetica. 

## Nuevas funcionalidades 

Algunas funcionalidades a las que he tenido que renunciar por límite de tiempo son:

- Una página para elenco entero y uno para todas las temporadas de la serie.
- Añadir filtros en la página principal para filtrar por género por ejemplo.
- El menú del header reaparezca cuando se escrollea hacia arriba aunque estés a media página y poder tener acceso a sus opciones sin tener que subir hasta arriba de todo.


## web deployada 

[TMDB-APP](https://arnau-bassas-tmdb-app.netlify.app/)
