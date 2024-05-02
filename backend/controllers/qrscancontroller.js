import qrstackmodel from "../model/qrstackmodel.js"
import mongoose from "mongoose";
const qrscan = async(req,res)=>{
   const id = JSON.parse(req.body.id)
   console.log(id);
   const qrid = new mongoose.Types.ObjectId(id);
    const now =new Date()
   
     const result = await qrstackmodel.find({_id:id})
    // console.log(result);
 if(result.length===0 ){
   res.json({allok:false})
 }
else{
   res.json({allok:true,result:result})
}

   
}
export default qrscan