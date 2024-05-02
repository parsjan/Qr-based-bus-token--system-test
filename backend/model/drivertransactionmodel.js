import mongoose from "mongoose"

//defining schema 
const drivertransactionSchema=new mongoose.Schema({
   start:{type:String},
   end:{type:String},
   fair:{type:Number},
   date:{type:Date},
   drivername:{type:String},
   vehicleno :{type:String}, 
})

//model
const drivertransactionmodel=mongoose.model("drivertransaction",drivertransactionSchema);

export default drivertransactionmodel