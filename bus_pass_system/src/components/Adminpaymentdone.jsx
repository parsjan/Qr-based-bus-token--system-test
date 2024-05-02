import React from 'react'
import Lottie,{} from 'lottie-react'
import animationData from "../assets/adminann.json"

function Adminpaymentdone() {
  return (
    <div className="backdrop">
    <div className="modal2">
    <Lottie className='mt-8' animationData={animationData} />
        </div>
        </div>
  )
}

export default Adminpaymentdone