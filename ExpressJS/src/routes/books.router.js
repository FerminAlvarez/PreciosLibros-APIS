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


/**
 * @swagger
 * /books:
 *   post:
 *     description: Use to save a book.
 *     tags:
 *       - Book
 *     operationId: placeOrder
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ISBN:
 *                 type: string
 *                 example: 1231111
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '500':
 *         description: Error saving book
 */
router.post('/books/', insertBook);

module.exports = router;