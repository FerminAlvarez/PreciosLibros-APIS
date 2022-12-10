DROP TABLE bookshop_book;
DROP TABLE bookshops_services;
DROP TABLE books;
DROP TABLE bookshops;

CREATE TABLE books (
	ISBN VARCHAR(20) PRIMARY KEY NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookshops (
    ID_bookshop SMALLINT PRIMARY KEY NOT NULL,
    name text NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookshops_services (
    ID_bookshop SMALLINT REFERENCES bookshops (ID_bookshop) ON UPDATE CASCADE ON DELETE CASCADE,
    url text NOT NULL
);

CREATE TABLE bookshop_book (
	ID SERIAL PRIMARY KEY,
    ISBN VARCHAR(20) REFERENCES books (ISBN) ON UPDATE CASCADE ON DELETE CASCADE,
    ID_bookshop SMALLINT REFERENCES bookshops (ID_bookshop) ON UPDATE CASCADE ON DELETE CASCADE,
    title TEXT NOT NULL,
    price INTEGER NOT NULL,
    url TEXT NOT NULL,
    image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books VALUES('9788484456810');
INSERT INTO books VALUES('9789504972976');

INSERT INTO bookshops VALUES(1,'Librería Don Quijote');
INSERT INTO bookshops VALUES(2,'BuscaLibre');
INSERT INTO bookshops VALUES(3,'Cuspide');
INSERT INTO bookshops VALUES(4,'Tematika');

INSERT INTO bookshops_services VALUES(1,'https://precioslibrosapi-production.up.railway.app/libreriadonquijote');
INSERT INTO bookshops_services VALUES(2,'https://precioslibrosapi-production.up.railway.app/buscalibre');
INSERT INTO bookshops_services VALUES(3,'https://precioslibrosapi-production.up.railway.app/cuspide');
INSERT INTO bookshops_services VALUES(4,'https://precioslibrosapi-production.up.railway.app/tematika');

INSERT INTO bookshop_book(ISBN, ID_bookshop, title, price, url, image) VALUES(
	'9788484456810',
	1,
	'Este Dolor No Es Mío',
	4900,
	'https://www.libreriadonquijote.com.ar/productos/este-dolor-no-es-mio/',
	'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/315/129/products/9788484456810-5f0ddb89d65b7feed916704521215998-480-0.webp'
);

INSERT INTO bookshop_book(ISBN, ID_bookshop, title, price, url, image, createdAt) VALUES(
	'9788484456810',
	1,
	'ESTE DOLOR NO ES MIO',
	8000,
	'https://www.libreriadonquijote.com.ar/productos/este-dolor-no-es-mio/',
	'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/315/129/products/9788484456810-5f0ddb89d65b7feed916704521215998-480-0.webp',
	'05-05-2020'
);