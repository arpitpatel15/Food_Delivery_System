import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const loginUser = async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User doesn't exits"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}) 
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async(req,res)=>{
    const {name,password,email} = req.body
    try {
        //check user exits or not
        const exits = await userModel.findOne({email})
        if(exits){
            return res.json({success : false,message : "User already exits!!"})
        }

        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success : false,message : "Please Enter Valid Email"})
        }

        //Password validation
        if(password.length < 8){
            return res.json({success : false,message : "Please Enter strong password"})
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //Create a account of user
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}