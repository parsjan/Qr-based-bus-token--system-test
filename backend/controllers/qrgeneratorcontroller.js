import qrCode from "qrcode"
import qrstackmodel from "../model/qrstackmodel.js";
const qrgenerator=async(req,res)=>{
 
      const currentTime = Date.now();
      const expirationTime = currentTime + (2 * 60 * 1000);
  
  const  qrcodedata={
    passanger:req.body.username,
    expirytime:expirationTime,
    start:req.body.startselect,
    end:req.body.endselect,
    pickup:req.body.pickupselect,
    fair:req.body.fair
   }
   
   const result = new qrstackmodel(qrcodedata)
   await result.save()
   const qrCodeImage = await qrCode.toDataURL(JSON.stringify(result._id));
  
   res.json({ qrCodeImage })
}
export default qrgenerator