import userModel from "../models/userModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


// user login
const loginUser = async(req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
    if (!user) {
        return res.json({success:false,message:'User does not  exists'})
    }
    const isMarch = await bcrypt.compare(password, user.password);
    if (!isMarch) {
        return res.json({success:false,message:'Invalid credentials'})
    }
    const token = createToken(user._id);
    res.json({success:true,token})
} catch (error) {
    console.log(error);
    res.json({success:true,message:'Error creating token'})
    }
}
const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// regiter 
const registerUser = async(req,res)=>{
const {name,email,password} = req.body;
try {
    const extsts = await userModel.findOne({email});
    if (extsts) {
        return res.json({success:false,message:'User already exists'})
    }
    // validate 
    if (!validator.isEmail(email)) {
        return res.json({success:false,message:'Please enter a valid email'})
    }
    if (password.length < 8) {
        return res.json({success:false,message:'Please enter a strong long password 8'})
    }
    // hash pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
    }) 
   const user =  await newUser.save();
const token = createToken(user._id);
res.json({success:true, token});
} catch (error) {
    console.log(error)
    res.json({success:false, message:"Error creating"});
}
}
export {loginUser,registerUser}