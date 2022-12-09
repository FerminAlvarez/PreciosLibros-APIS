const bookRoutes = require ('./routes/books.router');
const bookshopsRoutes = require ('./routes/bookshops.router');

const express = require ('express');
const cors = require('cors');

const app = express();
app.use(cors())

// Middlewares
app.use(express.json());

// Routes
app.use(bookRoutes);
app.use(bookshopsRoutes);

module.exports = app;