const foodModel = require('../models/foodModel')
const fs = require('fs')


//add food Items

const addFoodItems = async (req, res)=>{

    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save()
        res.json({
            success: true,
            message:'Food Added successfully',
        })
    }catch{
        //error
        res.status(400).json({success: false, message:'Failed to add food'})
    }
}

//all food items

const listFood = async (req, res)=>{
    try{
        const foods = await foodModel.find({})
        res.json({success: true, data: foods})
    }catch(err){
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

//remove food Items

const removeFood = async (req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: 'Food removed successfully'})
    }catch{
        res.status(400).json({success: false, message: 'Failed to remove food'})
    }
}


module.exports = {addFoodItems, listFood,removeFood}
