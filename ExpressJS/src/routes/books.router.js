const { Router } = require('express');

const  {
    getBooks,
    insertBook
} = require('../controllers/books.controller')

const router = Router();

router.get('/books/', getBooks);
router.post('/books/', insertBook);

module.exports = router;