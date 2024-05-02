import transactionmodel from "../model/transactionmodel.js"
import drivertransactionmodel from "../model/drivertransactionmodel.js"
import usermodel from "../model/usermodel.js"
import drivermodel from "../model/drivermodel.js"
const signin=async(req,res)=>{
    const userdriversignal=req.body.userdriversignal
    if(userdriversignal===true){
        const email=req.body.email
        const password=req.body.userpassword
        const user= await usermodel.find({email:email,password:password})
        if(user.length!=0){
       const result = await transactionmodel.find({email:email});
       res.json({result:result,userfound:true,user:user})
        }
        else{
            res.json({userfound:false})
        }
    }
    else{
       // console.log("inside driver signin controller ");
        const vehicleno=req.body.vehicleno
        const password=req.body.password
       // console.log(vehicleno,password);
        const driver =await drivermodel.find({vehiclno:vehicleno,password:password})
       // console.log(driver);
        if(driver.length!=0){
            const result =await drivertransactionmodel.find({vehicleno:vehicleno})
            res.json({result:result,driverfound:true,driver:driver})
        }
        else{
            res.json({driverfound:false})
        }
    }
}

export default signin