import React from 'react'
import Lottie,{} from 'lottie-react'
import animationData from "../assets/animationdata.json"
import { useRef } from 'react'

// this is payment complete form for user
function Paymentcomplete() {
  const Success=useRef
  return (
    <>
      <div className="backdrop">
    <div className="modal2">
      
   <Lottie className='mt-8' animationData={animationData} loop="false"/>
   <h1 className='text-3xl text-emarald-600 ml-12'> Payment Successfull</h1>
   <button className='mt-8 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-24'>Go Back to Dashboard</button>
  
  </div>
  </div>
     </>
  )
}

export default Paymentcomplete