# Serie Filter
Esta aplicación se sirve de la API http://www.tvmaze.com/api para elaborar un catálogo de series de televisión en el que encontrar tus series favoritas mediante un buscador y obtener más información sobre ests. Tambin puedes filtrar los resultados según el estado de emisión en el que se encuentre la serie.

Este proyecto fue realizado como ejercicio de evaluación final del módulo 3 de Adalab por Maria Mateo [GitHub](https://github.com/memematvaz) #PromociónIdelisa.

## Objetivos 

* Responsive Web
* Estructura por componentes
* Conectar a la API
* LocalStorage
* Filtro funcional
* Desarrollar con React 
* Estilos con Sass

##  Estructura del proyecto 

```
├── Readme.md
├── package.json
├── package-lock.json
├── public
|   ├── favicon.ico
|   ├── index.html
|   ├── manifest.json
|   └── robots.txt
└──src
    ├── components
    |     ├── services
    |     |       └── FetchData.js
    |     ├── Show.js
    |     ├── ShowDetails.js
    |     ├── ShowList.js
    |     ├── FilterInput.js 
    |     ├── FilterCheckbox.js   
    |     └── App.js
    ├── icons
    |     └── fontawesome-free-5.12.1-web
    ├── styles
    |     ├── base
    |     |       └── reset.scss   
    |     ├── core
    |     |       ├── _mixins.scss   
    |     |       └── _variables.scss   
    |     ├── layout
    |     |       ├── _details.scss  
    |     |       ├── _aside.scss
    |     |       ├── _header.scss  
    |     |       └── _main.scss   
    |     └── App.scss    
    └── index.js 
 ```

## Tecnologías usadas 

* [ReactJS] (https://reactjs.org/docs/getting-started.html) React Docs!
* [Sass] (https://sass-lang.com/) Sass Docs.
* [Visual Studio Code] - awesome web-based text editor
* [GIT]- Control de versiones
* [GitHub] (https://guides.github.com/features/mastering-markdown/)


## Instalación 


Necesitarás instalar  [Node.js](https://nodejs.org/) para trabajar con este repositorio, luego:

1. Descarga o clona el repositorio
```sh
$ git clone https://github.com/memematvaz/serie-filter-react.git
```
2. Abre el proyecto en tu editor de codigo (Visual Sudio Code, Atom, Brackets...)

3. Instala las dependencias locales
```sh
$ npm install
```
4. Arranca el proyecto:
```sh
$ npm start
```

## Cómo funciona:
La aplicación cuenta con un buscador en el que puedes escribir el nombre de las series que desees encontrar y automticamente filtrará los resultados coincidentes. También cuenta con un checkbox que al seleccionarlo haces que solo aparezcan las series que en la actualidad siguen en emisión. 

Al colocar el cursor encima de las diferentes tarjetas con las imágenes de las series hará una divertida animación. Al clickar sobre ellas podrs acceder a un resumen de su contenido.
que abras el generador de tarjetas, toda tu información personal reaparecerá y solo tendrás que modificar el campo que te interese. Y, si deseas eliminarla, bastará con pulsar el botón 'Reset' para que esta se borre de la tarjeta y del local storage.

Busca tus series aquí!

(https://memematvaz.github.io/serie-filter-react/#/)
