const { Router } = require('express');

const  {
    getBookshopBook,
    getBookshopsBook
} = require('../controllers/bookshopbook.controller')

const router = Router();

/**
 * @swagger
 * /bookshop/{ID}/book/{ISBN}:
 *   get:
 *     description: Use to request historical prices of a book and currently price of a bookstore.
 *     tags: 
 *       - Prices
 *     parameters:
 *       - in: path
 *         name: ID
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 32767
 *         required: true
 *         description: ID of the bookstore
 *       - in: path
 *         name: ISBN
 *         schema:
 *           type: integer
 *         required: true
 *         description: ISBN of the book
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not Found
 */
router.get('/bookshop/:ID/book/:ISBN', getBookshopBook);


/**
 * @swagger
 * /book/{ISBN}:
 *   get:
 *     description: Use to request currently price of differents bookshops.
 *     tags: 
 *       - Prices
 *     parameters:
 *       - in: path
 *         name: ISBN
 *         schema:
 *           type: integer
 *         required: true
 *         description: ISBN of the book
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not Found
 */
router.get('/book/:ISBN', getBookshopsBook);

module.exports = router;