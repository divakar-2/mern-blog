import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';
export const signup = async(req,res)=>{
    const{username,email,password}=req.body;

    if(!username||!email||!password || username==='' || email===''||password===''){
        next(errorHandler(400,'All fields are required'));
    }

    const newUser = new  req.models.User({
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
        next(err);
    }
}