import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import Lottie,{} from 'lottie-react'
import io from 'socket.io-client';
import animation from "../assets/loader.json"


// qr on user side 
function QRpage() {
const location =useLocation()
const navigate=useNavigate()
const [qrCodeImage, setQRCodeImage] = useState(location.state.qrcodeimage);
const [seconds, setSeconds] = useState(120);
const [loading,setloading]=useState(false)
const username=location.state.username

const socket = io('http://localhost:3002');
socket.on('payment-complete', () => {
  navigate("/paymentcomplete",{username:username})
});
socket.on('processing',()=>{
  setloading(true)
})

useEffect(()=>{
  //const socket = io('http://localhost:3002');
  socket.emit('user-connect', { username });

},[])

useEffect(() => {
  if (seconds <= 0 && loading===false) {
   navigate("/qrexpire",{username:username})
  } else {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }
}, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <div className="backdrop">
    <div className="modal2">
    {loading ===false && (
      <div>
      <div className='w-50 max-h-50 bg-slate-50 mt-4 p-4 rounded-md'>
      <div className='ml-4 text-red-600'> Time remaining: {formatTime()}</div>
        <br/>
        {qrCodeImage && <img src={qrCodeImage} alt="QR code"  className='ml-20'/>}
      </div>
      <h2 className='text-l text-red-600 ml-1'>QR is valid for 2 min</h2>
         <button className='mt-3 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-32'>Cancel Payment</button>
      
      </div>
    )}
     {loading===true && (
      <Lottie className='mt-4' animationData={animation} />
     )}
      </div>
      </div>
  )
}

export default QRpage