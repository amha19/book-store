const express = require('express');
const Author = require('../models/author');
const Book = require('../models/book');
const BookCategroy = require('../models/book-category');
const Publisher = require('../models/publisher');
const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll({
            include: [Author, Publisher],
        });
        res.json({
            books: books,
        });
    } catch (err) {
        console.log(err.message);
    }
});

// GET book detail
router.get('/:bookId', async (req, res) => {
    const { bookId } = req.params;

    try {
        const book = await Book.findByPk(bookId, {
            include: [Author, Publisher],
        });

        res.json({
            book: book,
        });
    } catch (err) {
        console.log(err.message);
    }
});

// POST create a book
router.post('/', async (req, res) => {
    const { title, PublicationYear, author, publisher, category } = req.body;

    try {
        const result = await Book.create({
            title,
            PublicationYear,
        });

        res.json({
            message: 'Book created',
            book: result,
        });
    } catch (err) {
        console.log(err.message);
    }
});

// DELETE remove a book
router.delete('/:bookId', async (req, res) => {
    const { bookId } = req.params;

    try {
        const book = await Book.findByPk(bookId);
        await book.destroy();
        res.json({
            message: 'Book removed',
        });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
