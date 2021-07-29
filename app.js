const express = require('express');
const morgan = require('morgan');
const homeRoutes = require('./routes/index');
const bookRoutes = require('./routes/book');
const db = require('./models');

const app = express();

db();

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
