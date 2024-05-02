import mongoose from "mongoose"

//defining schema 
const userSchema=new mongoose.Schema({
    email:{type:String},
    username:{type:String},
    password:{type:String},
    balance:{type:Number,default:0}
})

//model
const usermodel=mongoose.model("user",userSchema);

export default usermodel