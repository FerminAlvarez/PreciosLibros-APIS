# Precios Libros API - Implementación con ExpressJS + Sequelize

## Cosas pendientes y mejoras
- Se podría realizar un análisis de si en grandes proyectos, una organización de carpetas por componentes y no por funcionalidad (Modelo, Controlador, Ruta) permite mayor ágilidad y trae un beneficio cambiarlo.
- Se podrían haber usado Seeders y Migraciones, pero es algo que ya tuve bastante experiencia con Laravel y de momento prefiero no implementarlo y usar el tiempo para investigar otro framework.

## Instalación
Pasos para la implementación

```shell
git clone https://github.com/FerminAlvarez/PreciosLibros-APIS.git
```
## Ejecución
Debemos agregar la información base necesaria a la base de datos. Para esto se puede usar la inserción de datos que se encuentra en la carpeta base del proyecto.

```shell
cd PreciosLibros-APIS/
cd ExpressJS-Sequelize/
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
