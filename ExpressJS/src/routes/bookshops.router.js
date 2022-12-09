const { Router } = require('express');

const  {
    getBookshops,
    insertBookshop
} = require('../controllers/bookshops.controller')

const router = Router();

router.get('/bookshops/', getBookshops);
router.post('/bookshops/', insertBookshop);

module.exports = router;