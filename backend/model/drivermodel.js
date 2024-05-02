import mongoose from "mongoose"

//defining schema 
const driverSchema=new mongoose.Schema({
    vehiclno:{type:String},
    drivername:{type:String},
    password:{type:String}
})

//model
const drivermodel=mongoose.model("driver",driverSchema);

export default drivermodel