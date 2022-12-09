CREATE TABLE books (
	ISBN CHARACTER(20) PRIMARY KEY NOT NULL,
    createdAt DATE DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE bookshops (
    ID_bookshop SMALLINT PRIMARY KEY NOT NULL,
    name text NOT NULL,
    createdAt DATE DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE bookshop_book (
    ISBN CHARACTER(20) REFERENCES books (ISBN) ON UPDATE CASCADE ON DELETE CASCADE,
    ID_bookshop SMALLINT REFERENCES bookshops (ID_bookshop) ON UPDATE CASCADE ON DELETE CASCADE,
    price INTEGER NOT NULL,
    url TEXT NOT NULL,
    image TEXT,
    createdAt DATE DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE,
    CONSTRAINT bookshop_book_key PRIMARY KEY (ISBN, ID_bookshop)
);

INSERT INTO books VALUES('9788484456810');
INSERT INTO books VALUES('9789504972976');

INSERT INTO bookshops VALUES(1,'Librería Don Quijote');
INSERT INTO bookshops VALUES(2,'BuscaLibre');

INSERT INTO bookshop_book VALUES(
	'9788484456810',
	1,
	4900,
	'https://www.libreriadonquijote.com.ar/productos/este-dolor-no-es-mio/',
	'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/315/129/products/9788484456810-5f0ddb89d65b7feed916704521215998-480-0.webp
');





