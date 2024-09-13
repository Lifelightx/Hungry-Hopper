const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')


//login User

const loginUser = async(req, res)=>{
    const {email, password} = req.body
    try{
        const user = await userModel.findOne({email: email})
        if(!user){
            return res.json({success: false, message: 'User not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: 'Invalid Credentials'})
        }
        else{
            const token = createToken(user._id)
            res.json({success: true, token})
        }
    }catch(err){
        console.error(err)
        res.json({success:false, message: 'Error'})
    }
}

//generate JWT token
const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRETE)
}

//register user

const registerUser = async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        //checking is user already registered
        const exits = await userModel.findOne({email:email})
        if(exits){
            return res.json({success:false, message:'user already registered'})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:'Invalid email format'})
        }
        if(password.length <8){
            return res.json({success:false, message:'Please enter a strong password'})
        }

        // hasingUser Password
        const salt = await bcrypt.genSalt(10)
        const strongPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name: name,
            email: email,
            password: strongPassword,

        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'})
    }
}


module.exports = {loginUser, registerUser}
