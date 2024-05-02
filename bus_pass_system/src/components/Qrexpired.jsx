import React from 'react'
import Lottie,{} from 'lottie-react'
import animationData from "../assets/expirean.json"

function Qrexpired() {
  return (
    <>
      <div className="backdrop">
    <div className="modal2">
      
   <Lottie className='mt-4 ' animationData={animationData} loop="false"/>
   <h1 className='text-4xl text-red-600 ml-24'> QR Expired !</h1>
   <button className='mt-8 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-4'>Go Back to Dashboard</button>
   <button className='mt-8 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-4'>New journey</button>
  
  </div>
  </div>
     </>
  )
}

export default Qrexpired