# Precios Libros API - Implementación con ExpressJS

## Cosas pendientes y mejoras
- Se podría realizar un análisis de si en grandes proyectos, una organización de carpetas por componentes y no por funcionalidad (Modelo, Controlador, Ruta) permite mayor ágilidad y trae un beneficio cambiarlo.

## Instalación
Pasos para la implementación

```shell
git clone https://github.com/FerminAlvarez/PreciosLibros-APIS.git
```
## Ejecución
Debemos configurar la base de datos con el archivo que se encuentra en la carpeta root: Database.sql

```shell
cd PreciosLibros-APIS/
cd ExpressJS/
npm install
npm run dev
```

## Uso
Documentación de la API: http://localhost:3000/docs

## Endpoints
### Books
- `GET http://localhost:3000/books/` Use to request all saved books.
- `GET http://localhost:3000/books/` Use to save a book. Body is a JSON with a ISBN.
### Prices
- `GET http://localhost:3000/book/<ISBN>` Use to request currently price of differents bookshops.
- `POST http://localhost:3000/bookshop/<ID>/book/<ISBN>` Use to request historical prices of a book and currently price of a bookstore.
### Bookshops
- `GET http://localhost:3000/bookshops/<ID>` Use to request all saved bookshops.
- `GET http://localhost:3000/bookshops/<ID>` Use to request an historial of books of a bookshop.
- `POST http://localhost:3000/bookshops/<ID>` Use to save a bookshop. Body is a JSON with a name.
