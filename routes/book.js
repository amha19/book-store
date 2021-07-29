const express = require('express');

const router = express.Router();

const books = [
    {
        id: '1',
        imgUrl: 'this is books image url',
        title: 'The Three-Body Problem',
        publicationDate: '2014',
        author: 'Cixin Liu',
        publisher: 'Macmillan',
    },
    {
        id: '2',
        imgUrl: 'this is books image url',
        title: 'Sapiens',
        publicationDate: '2011',
        author: 'Uuval Noah Harari',
        publisher: 'Harper',
    },
];

// GET all books
router.get('/', (req, res) => {
    res.json({
        books: books,
    });
});

// GET book detail
router.get('/:bookId', (req, res) => {
    const { bookId } = req.params;

    const book = books.find((b) => b.id === bookId);

    res.json({
        book: book,
    });
});

module.exports = router;
