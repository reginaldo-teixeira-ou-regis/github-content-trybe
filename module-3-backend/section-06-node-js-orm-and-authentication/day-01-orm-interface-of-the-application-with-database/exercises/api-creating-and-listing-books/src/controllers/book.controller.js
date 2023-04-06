const bookService = require('../services/book.service');

const getAll = async (req, res) => {
  const { author } = req.query;
  let books;
  if (author) {
    books = await bookService.getByAuthor(author);
  } else {
    books = await bookService.getAll();
  }
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await bookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await bookService.create({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updated = await bookService.update(id, { title, author, pageQuantity, publisher });

  if (!updated) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await bookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

const getByAuthor = async (req, res) => {
  const { author } = req.query;
  const books = await bookService.getByAuthor(author);
  res.status(200).json(books);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};