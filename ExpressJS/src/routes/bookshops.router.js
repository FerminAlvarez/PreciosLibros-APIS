const { Router } = require('express');

const  {
    getBookshops,
    getBookshop,
    insertBookshop
} = require('../controllers/bookshops.controller')

const router = Router();

router.get('/bookshops/', getBookshops);
router.get('/bookshop/:ID', getBookshop);
router.post('/bookshops/:ID', insertBookshop);

module.exports = router;