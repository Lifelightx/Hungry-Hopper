
const express = require('express');
const {addFoodItems, listFood, removeFood} = require('../controllers/foodController');
const multer = require('multer');

const router = express.Router();

//image store engine

const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req, file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}` )

    }
})

const upload = multer({storage: storage})

router.post('/add',upload.single("image"),addFoodItems)
router.get('/list', listFood)
router.post('/remove', removeFood)

module.exports = router