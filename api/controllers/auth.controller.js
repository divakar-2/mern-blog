import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup=async(req,res)=>{
    const{username,email,password}=req.body;

    if(!username||!email||!password || username==='' || email===''||password===''){
        return res.status(400).json({message:'All fields are required'});
    }

    const newUser = new User({
        username,
        password:hashedpassword,
        email,
    });

    const hashedpassword= bcryptjs.hashSync(password,10)

    try{
    await newUser.save();
    res.json('Signup Successfull');
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}