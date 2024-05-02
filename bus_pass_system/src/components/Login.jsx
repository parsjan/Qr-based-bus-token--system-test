import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../login.css"
import "../model.css"
//user and bus manager login
function Login() {
  const navigate=useNavigate()
  const [signintext,setsignintext]=useState(true) 
  const [signinlogin,setsigninlogin]=useState(true)// for true signin will appear false for signup
  const [personaldriverlogin,setpersonaldriverlogin]=useState(true)// for true personal is open and for false driver is open
  const [email,setemail]=useState()
  const [driverpassword,setdriverpassword]=useState()
  const [userpassword,setuserpassword]=useState()
  const [drivername,setdrivername]=useState()
  const [vehicleno,setvehicleno]=useState()
  const [alreadysign,setalreadysign]=useState()
  const [requiredfield,setrequiredfield]=useState(false)
  const [userrequiredfield,setuserrequiredfield]=useState(false)
  const [username,setusername]=useState()
  const [validemail,setvalidemail]=useState(true)
  const [incorrectuser,setincorrectuser]=useState(false)
  const [reqfield,setrequfield]=useState(false)
  const [semailvalidity,setsemailvalidity]=useState(false)
  const [reqdrifield,setreqdrifield]=useState(false)
  const [incorrectdriver,setincorrectdriver]=useState(false)
  const anim = useSpring({
    opacity: signintext ? 1 : 0,
    transform: signintext ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 800 } // Duration of the animation in milliseconds
  });
  const validateEmail = (email) => {
    // Regular expression for validating an email
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  const handelmouseover=()=>{
    setsignintext(false)
  }
  const handleMouseOut = () => {
    setsignintext(true);
  };
  const onsignupsection =()=>{
    setsigninlogin(false)
  }
  const onsigninsection =()=>{
    setsigninlogin(true)
    setemail("")
    setdrivername("")
    setdriverpassword("")
    setuserpassword("")
    setvehicleno("")
  }
  const openpersonallogin=()=>{
      setpersonaldriverlogin(true)
  }
  const opendriverlogin=()=>{
    setpersonaldriverlogin(false)
  }
  const usersignup= async()=>{
    const emailvalidity=validateEmail(email)
    if(emailvalidity===true){
    if(email && userpassword){
      setuserrequiredfield(false)
    console.log("usersignup");
      const response=await axios.post("http://localhost:3002/signup",{userdriversignal:personaldriverlogin,email:email,password:userpassword})
      const alreadysignin=response.data.alreadyregsignal
      const userdriverstate =response.data.userdriverstate
      const  signinup =response.data.signinup
      if(alreadysignin===true && userdriverstate===undefined && signinup===undefined ){
        setalreadysign(true)
        setpersonaldriverlogin(true)
        setsigninlogin(true)
        setuserpassword("")
      }
    else if(alreadysignin===undefined && userdriverstate===true && signinup===true){
        setpersonaldriverlogin(true)
        setsigninlogin(true)
        setusername(response.data.username)
    }
  }
  else{
    setuserrequiredfield(true)
  }
}
else{
  setvalidemail(emailvalidity)
}
  }
  const driversignup=async()=>{
    if(vehicleno && drivername && driverpassword){
      setrequiredfield(false)
    console.log("driversignup");
    const response=await axios.post("http://localhost:3002/signup",{userdriversignal:personaldriverlogin,vehiclno:vehicleno,password:driverpassword,drivername:drivername})
    const alreadysignin=response.data.alreadyregsignal
    const userdriverstate =response.data.userdriverstate
    const  signinup =response.data.signinup
    if(alreadysignin===true && userdriverstate===undefined && signinup===undefined ){
      setalreadysign(true)
      setpersonaldriverlogin(false)
      setsigninlogin(true)
      setdriverpassword("")
    }
  else if(alreadysignin===undefined && userdriverstate===false && signinup===true){
      setpersonaldriverlogin(false)
      setsigninlogin(true)
  }
}
else{
  setrequiredfield(true)
}
  }

  const usersignin =async()=>{
    const emailvalidity=validateEmail(email)
    if(emailvalidity===true){
    if(email && userpassword){
      setrequfield(false)
       const response=await axios.post("http://localhost:3002/signin",{userdriversignal:personaldriverlogin,email:email,userpassword:userpassword})
      
       if(response.data.userfound===true){
        setincorrectuser(false)
       navigate("/dashboard",{state:{data:response.data.result,username:username,userdriversignal:personaldriverlogin,userdata:response.data.user[0]}})
       }
       else{
        setincorrectuser(true)
       }
      }
      else{
        setrequfield(true)
      }
    }
    else{
      setsemailvalidity(true)
    }
        }
  const driversignin=async()=>{
   // console.log("driver sign");
    if(vehicleno && driverpassword){
      setreqdrifield(false)
      const response= await axios.post("http://localhost:3002/signin",{userdriversignal:personaldriverlogin,vehicleno:vehicleno,password:driverpassword})
      if(response.data.driverfound===true){
        setincorrectdriver(false)
        navigate("/dashboard",{state:{data:response.data.result,userdriversignal:personaldriverlogin,driverdata:response.data.driver[0]}})
      }
      else{
        setincorrectdriver(true)
      }
    }
    else{
   setreqdrifield(true)
    }

  }
  return (
    <div className="backdrop">
    <div className="modal2">
    <div className="container rounded-md" onMouseOver={handelmouseover} onMouseOut={handleMouseOut}>
      <div className="top"></div>
     
     <animated.span className=' text-4xl signintext opacity-25 ' style={{...anim}} >Hover to sign in or sign up</animated.span>

      <div className="bottom"></div>
    
      <div className="center">
        <div className='flex  p-2 bg-gray-300 rounded-md' ><button onClick={openpersonallogin}><h2 className={`p-2 rounded-md ${personaldriverlogin===true?'bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300':'bg-transparent' }`} >user signup/login</h2></button>&nbsp;&nbsp;<button onClick={opendriverlogin}><h2 className={`p-2 rounded-md ${personaldriverlogin===false?'bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300':'bg-transparent' }`} >driver signup/login</h2></button></div>
        <br/>
        {signinlogin===true ? (
          personaldriverlogin===true?(
        <div >
        <h2 className='ml-2'>User Sign In</h2>
        <input type="email" placeholder="email" value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
        <input type="password" placeholder="password" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}} />
        <br/>
        <span className='ml-2'>Don't have account? <button onClick={onsignupsection}><span className='text-blue-700 hover:text-blue-1000' > Sign up</span></button></span>
        <h2>&nbsp;</h2>
        {incorrectuser===true && (<h4 className='text-red-600'>enter correct email or password</h4>)}
        {reqfield===true && (<h4 className='text-red-600'>All fields are required</h4>)}
        {semailvalidity===true && (<h4 className='text-red-600'>enter valid email</h4>)}
        {alreadysign===true && (<h4 className='text-red-600'>You already have account !</h4>)}
        <button className='bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md ml-28' onClick={usersignin}>Sign in</button>
        </div>
        ):(
        <div> 
    <h2 className='ml-2'>Driver Sign In</h2>
        <input type="text" placeholder="Vechile No." value={vehicleno} onChange={(e)=>{setvehicleno(e.target.value)}}/>
        <input type="password" placeholder="password" value={driverpassword} onChange={(e)=>{setdriverpassword(e.target.value)}}/>
        <br/>
        <span className='ml-2'>Don't have account? <button onClick={onsignupsection}><span className='text-blue-700 hover:text-blue-1000' > Sign up</span></button></span>
        <h2>&nbsp;</h2>
        {reqdrifield===true && (<h4 className='text-red-600'>All fields are required</h4>)}
        {incorrectdriver===true && (<h4 className='text-red-600'>Enter correct vehicleno or password</h4>)}
        <button className='bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md ml-28' onClick={driversignin}>Sign in</button>
        </div>
        )
        ) :
        (
          personaldriverlogin===true?(
        <div >
          <h2 className='ml-2'>Please Sign Up</h2>
        <input type="email" placeholder="e-mail" onChange={(e)=>{setemail(e.target.value)}} value={email}/>
        <input type="password" placeholder="password" onChange={(e)=>{setuserpassword(e.target.value)}} value={userpassword}/>
        <br/>
        <span className='ml-2'>Already have account? <button onClick={onsigninsection}><span className='text-blue-700 hover:text-blue-1000' > Sign in</span></button></span>
        <h2>&nbsp;</h2>
        {userrequiredfield===true && (<h4 className='text-red-600'>All fields are required</h4>)}
        {validemail===false && (<h4 className='text-red-600'>Enter valid email</h4>)}
        <button className='bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md ml-28' onClick={usersignup}>Sign up</button>
        </div>
           ):(
            <div>
              <h2 className='ml-2'>Please Sign Up</h2>
        <input type="text" placeholder="Vehicle No." onChange={(e)=>{setvehicleno(e.target.value)}} value={vehicleno} />
        <input type="text" placeholder="Driver Name"  onChange={(e)=>{setdrivername(e.target.value)}} value={drivername}/>
        <input type="password" placeholder="password" onChange={(e)=>{setdriverpassword(e.target.value)}} value={driverpassword} />
        <br/>
        <span className='ml-2'>Already have account? <button onClick={onsigninsection}><span className='text-blue-700 hover:text-blue-1000' > Sign in</span></button></span>
        <h2>&nbsp;</h2>
      {requiredfield===true && (<h4 className='text-red-600'>All fields are required</h4>)}  
        <button className='bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md ml-28' onClick={driversignup}>Sign up</button>
            </div>
           ) )
          
}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login