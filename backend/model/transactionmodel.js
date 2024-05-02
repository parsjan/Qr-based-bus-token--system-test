import mongoose from "mongoose"

//defining schema 
const transactionSchema=new mongoose.Schema({
   username:{type:String},
   start:{type:String},
   end:{type:String},
   fair:{type:Number},
   date:{type:Date},
   drivername:{type:String},
   vehicleno :{type:String},
   walletadd:{type:Number} 
})

//model
const transactionmodel=mongoose.model("transaction",transactionSchema);

export default transactionmodel