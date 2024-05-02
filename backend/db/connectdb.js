import mongoose from "mongoose"
import qrstackmodel from "../model/qrstackmodel.js";
const connectDB= async (DATABASE_URI)=>{
    try{
     const DB_OPTIONS={
        dbName:'Buspasssystem'
     }
     await mongoose.connect(DATABASE_URI,DB_OPTIONS);
      async function deleteExpiredObjects() {
      const now = new Date();
     await qrstackmodel.deleteMany({ expirytime: { $lte: now } });
      console.log('Expired objects deleted.');
    }
     setInterval(deleteExpiredObjects, 120000);
     
 console.log('connected successfully');
}
catch(error){
  console.log(error);
}
}

export default connectDB