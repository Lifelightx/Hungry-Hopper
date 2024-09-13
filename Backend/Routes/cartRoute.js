const express = require('express')
const {addToCart, removeFromCart, getCart} = require('../controllers/cartController')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')

router.post('/add',authMiddleware, addToCart)
router.post('/remove',authMiddleware, removeFromCart)
router.post('/get',authMiddleware, getCart)



module.exports = router