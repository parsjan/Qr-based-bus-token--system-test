import drivermodel from "../model/drivermodel.js"
import usermodel from "../model/usermodel.js"
const usernamegenerator=(email)=>{
  const parts = email.split('@');
  return parts[0];
}
const signup=async (req,res)=>{
    const userdriversignal=req.body.userdriversignal// it has the value the signup is for user or driver if true then user, if false then driver
    if(userdriversignal===true){
      console.log(req.body,"usersignup request");
      const email= req.body.email
      const password=req.body.password
      const username=usernamegenerator(email)
   //   console.log(username);
      const useremail= await usermodel.find({email:email})
      console.log(useremail);
  //    console.log(useremail);
      if(useremail.length!=0){
        res.json({alreadyregsignal: true})
      }
      else{
        const result = new usermodel({email:email,password:password,username:username})
         await result.save()
      //   console.log("new user created");
        res.json({userdriverstate:true,signinup:true,username:username})
       
      }
    }
    else{
      console.log(req.body,"driversignup request");
   const vehiclno=req.body.vehiclno
   const drivername=req.body.drivername
   const password=req.body.password
   const drivervehiclno= await drivermodel.find({vehiclno:vehiclno})
   console.log(drivervehiclno);
   if(drivervehiclno.length!=0){
       res.json({alreadyregsignal:true})
   }
   else{
      const result= new drivermodel({vehiclno:vehiclno,drivername:drivername,password:password})
      await result.save()
     // console.log("new driver created");
      res.json({userdriversignal:false,signinup:true})

   }
  }
}
export default signup;