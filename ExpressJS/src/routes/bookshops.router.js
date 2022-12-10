const { Router } = require('express');

const  {
    getBookshops,
    getBookshop,
    insertBookshop
} = require('../controllers/bookshops.controller')

const router = Router();

/**
 * @swagger
 * /bookshops:
 *   get:
 *     description: Use to request all saved bookshops.
 *     tags: 
 *       - Bookshop
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/bookshops/', getBookshops);


/**
 * @swagger
 * /bookshops/{ID}:
 *   get:
 *     description: Use to request an historial of books of a bookshop.
 *     tags: 
 *       - Bookshop
 *     parameters:
 *       - in: path
 *         name: ID
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the bookstore
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not Found
 */
router.get('/bookshops/:ID', getBookshop);


/**
 * @swagger
 * /bookshops/{ID}:
 *   post:
 *     description: Use to save a bookshop.
 *     tags:
 *       - Bookshop
 *     operationId: placeOrder
 *     parameters:
 *       - name: ID
 *         in: path
 *         description: ID of the bookshop
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Librería X
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '500':
 *         description: Error saving bookshop
 */
router.post('/bookshops/:ID', insertBookshop);

module.exports = router;