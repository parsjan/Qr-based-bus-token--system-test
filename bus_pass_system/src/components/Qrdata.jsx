import React from 'react'
import Lottie,{} from 'lottie-react'
import animation from "../assets/busann.json"
import { useLocation ,useNavigate} from 'react-router-dom'
import io from 'socket.io-client';

const socket = io('http://localhost:3002');

function Qrdata() {
  const location=useLocation()
  const navigate=useNavigate()
  //console.log(location.state.result);
  const result=location.state.result
  console.log(result);

  const handelclick= async()=>{
   socket.emit('admin-scan', {result});
  }

  return (
   
        <div className="backdrop">
        <div className="modal2">
            <h1 className='text-2xl mt-4 ml-2'>Passenger:&nbsp;&nbsp;{location.state.result.passanger}</h1>
            <div className='flex'>
            <h1 className='text-4xl text-green-600 mt-8 ml-16 font-bold'>Fair</h1>
            <h1 className='text-4xl w-40 ml-8 mt-8'>₹ {location.state.result.fair}</h1>
            </div>
            <div className='flex ml-8 mt-7'>
            <div><h1 className='text-xl'>Pickup:</h1> <span>{location.state.result.start}</span></div> 
            <div><h1 className='text-xl ml-32'>Destination:</h1><span className=' ml-32'>{location.state.result.end}</span></div> 
            </div>
            <Lottie className='mt-4' animationData={animation} loop="true"/>
            <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-28' onClick={handelclick} >Verify Journey</button>
            </div>
            </div>
  )
}

export default Qrdata