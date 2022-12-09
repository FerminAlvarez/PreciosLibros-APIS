const { Router } = require('express');
const router = Router();

const  suscribersController = require('../controllers/suscribers.controller')

/**
 * @swagger
 * /suscribers/:
 *   get:
 *     description: Use to request subscribed books
 *     security: 
 *          - bearerAuth: []
 *     tags: 
 *       - Suscribers
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter/token
 *       '404':
 *         description: Not found
 */
router.get('/suscribers/', suscribersController.getSuscriber);

/**
 * @swagger
 * /suscribers/:
 *   post:
 *     description: Use to request subscribed books
 *     security: 
 *          - bearerAuth: []
 *     tags: 
 *       - Suscribers
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Filters.
 *         schema:
 *           type: object
 *           properties:
 *             ISBN:
 *               type: integer
 *               example: 9788418037238
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter/token
 *       '404':
 *         description: Not found
 */
router.post('/suscribers/', suscribersController.applySuscription);

/**
 * @swagger
 * /suscribers/:
 *   delete:
 *     description: Use to request subscribed books
 *     security: 
 *          - bearerAuth: []
 *     tags: 
 *       - Suscribers
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Filters.
 *         schema:
 *           type: object
 *           properties:
 *             ISBN:
 *               type: integer
 *               example: 9788418037238
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter/token
 *       '404':
 *         description: Not found
 */
router.delete('/suscribers/', suscribersController.removeSuscription);

module.exports = router;