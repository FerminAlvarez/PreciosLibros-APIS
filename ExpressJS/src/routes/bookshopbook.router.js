const { Router } = require('express');

const  {
    getBookshopBook,
    getBookshopsBook
} = require('../controllers/bookshopbook.controller')

const router = Router();

router.get('/bookshop/:ID/book/:ISBN', getBookshopBook);
router.get('/book/:ISBN', getBookshopsBook);

module.exports = router;