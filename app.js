const express = require('express');
const morgan = require('morgan');
const homeRoutes = require('./routes/index');
const bookRoutes = require('./routes/book');
const { sequelize } = require('./service/db');
const Book = require('./models/book');
const Author = require('./models/author');
const Book_category = require('./models/book-category');
const Category = require('./models/category');
const Publisher = require('./models/publisher');

const app = express();

// associations

Author.hasMany(Book, {
    onDelete: 'cascade',
});
Book.belongsTo(Author);

Publisher.hasMany(Book, {
    onDelete: 'cascade',
});
Book.belongsTo(Publisher);

Book.belongsToMany(Category, { through: Book_category });
Category.belongsToMany(Book, { through: Book_category });

sequelize.sync(); //{ force: true }

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/home/', homeRoutes);
app.use('/api/books/', bookRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`);
});
