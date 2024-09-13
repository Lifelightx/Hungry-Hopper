const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth')
const {placeOrder, verifyOrder,userOrders, listOrders, updateOrderStatus} = require('../controllers/orderController')

router.post('/place',authMiddleware,placeOrder)
router.post('/verify',verifyOrder)
router.post('/userorders',authMiddleware,userOrders)
router.get('/list',listOrders)
router.post('/status',updateOrderStatus)


module.exports = router;