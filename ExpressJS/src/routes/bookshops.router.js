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
router.post('/bookshops/:ID', insertBookshop);

module.exports = router;