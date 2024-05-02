import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {QrReader} from "react-qr-reader"
import {useNavigate}  from "react-router-dom"
import axios from "axios"
import io from 'socket.io-client';



//const socket = io('http://localhost:3002');


function QRscanner() {
  const navigate =useNavigate()
  const [qrerror,setqrerror]=useState(false)
  
  
  const handelscan= async(result)=>{
       //const now= new Date()
       /* if (result.text.id && result.text.passanger && result.text.expirytime  && result.text.start && result.text.end && result.text.pickup && result.text.fair  && result.text.expirytime<=now){
          setscandata(result)
          setqrerror(false)
        }
        else{
          setqrerror(true)
        }
        */
      // console.log(result);
      if(result){
        console.log(result.text);
       const response= await axios.post("http://localhost:3002/qrscanner",{id:result.text})
       if(response.data.allok===true){
        setqrerror(false)
        const socket = io('http://localhost:3002');
        socket.emit('onscann',{result:response.data.result[0]})
           navigate("/userconformation",{state:{result:response.data.result[0]}})
       }
       else{
          setqrerror(true)
       }
      }
      
       // navigate("/paymentcomplete")
        
  }
  const handelerror=(error)=>{
   setqrerror(true)
  }
  return (
    <div className="backdrop">
    <div className="modal2">
      <div className='w-50 max-h-50 bg-slate-50 mt-4 p-4 rounded-md'>
        <br/>
  <QrReader
   delay={300}
   style={{width:"100%"}}
   onError={handelerror}
   onResult={handelscan}
  />
  
        </div>
        {qrerror && <span className='text-red-500 text-xl ml-2 mt-3'> Invalid QR </span>}
        <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400  ml-32 mt-12' >Go to dashboard</button>
        </div>
        </div>
  )
}

export default QRscanner