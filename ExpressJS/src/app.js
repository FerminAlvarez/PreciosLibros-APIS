const authorsRoutes = require ('./routes/authors.router');
const bookRoutes = require ('./routes/books.router');
const bookshopsRoutes = require ('./routes/bookshops.router');
const categoryRouter = require ('./routes/categories.router');
const suscribersRouter = require ('./routes/suscribers.router');

const express = require ('express');
const cors = require('cors');

const app = express();
app.use(cors())

// Middlewares
app.use(express.json());

// Routes
app.use(authorsRoutes);
app.use(bookRoutes);
app.use(bookshopsRoutes);
app.use(categoryRouter);
app.use(suscribersRouter);

module.exports = app;