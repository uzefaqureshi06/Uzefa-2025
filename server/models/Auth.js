import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
   name:String,
   email:String,
   password:String, 
})

const auth =mongoose.model('auth' ,AuthSchema)
export default auth;