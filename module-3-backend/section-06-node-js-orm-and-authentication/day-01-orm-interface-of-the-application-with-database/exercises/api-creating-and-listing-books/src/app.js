const express = require('express');

const booksController = require('./controllers/books.controller');

const app = express();

app.use(express.json());

app.get('/books', booksController.getAll);

app.get("/books/:id", booksController.getById);

app.post('/books', booksController.create);

app.put('/books/:id', booksController.update);

app.delete('/books/:id', booksController.remove);

module.exports = app;