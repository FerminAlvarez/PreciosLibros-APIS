const { Router } = require('express');

const  {
    getBooks,
    insertBook
} = require('../controllers/books.controller')

const router = Router();

/**
 * @swagger
 * /books:
 *   get:
 *     description: Use to request all saved books.
 *     tags: 
 *       - Book
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/books/', getBooks);
router.post('/books/', insertBook);

module.exports = router;