import mongoose from "mongoose"

//defining schema 
const qrstackSchema=new mongoose.Schema({
    passanger:{type:String},
    expirytime:{type:Date},
    start:{type:String},
    end:{type:String},
    pickup:{type:String},
    fair:{type:Number}
   
})

//model
const qrstackmodel=mongoose.model("qrstack",qrstackSchema);

export default qrstackmodel