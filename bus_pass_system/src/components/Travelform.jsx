import React, { useState } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import axios from 'axios'
// this component is for travel form by user
function Travelform() {
  const location=useLocation()
  const navigate=useNavigate()
  const username=location.state.username
  const [startselect,setstartselect]=useState("")
  const [endselect,setendselect]=useState("")
  const [pickupselect,setpickupselect]=useState("")
  const [fair,setfair]=useState(5)
  const handelstartselect=(e)=>{
    setstartselect(e.target.value)
  }
  const handelendselect=(e)=>{
    setendselect(e.target.value)
  }
  const handelpickupselect=(e)=>{
    setpickupselect(e.target.value)
  }
  const generateqr=async()=>{
      const response = await axios.post("http://localhost:3002/qrcodegenerator",{username:username,startselect:startselect,endselect:endselect,pickupselect:pickupselect,fair:fair})
      navigate("/qrpage",{state:{qrcodeimage:response.data.qrCodeImage,username:username}})
  }
  return (
    <div className="backdrop">
    <div className="modal2">
    <div className='flex mt-4'>
    <svg class="h-10 w-10 text-slate-700 bg-gray-400 p-2 rounded-full"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg>
&nbsp; 
 <span className='p-2'>{username}</span>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <span className='p-2 '>Logout</span>
   </div>
    <div className='mt-6 flex'>
    <h4 className='p-2'>From:</h4>
    <select class="p-2 border rounded" value={startselect} onChange={handelstartselect}>
  <option value="" disabled selected>Select a place</option>
  <option value="paris">Paris</option>
  <option value="london">London</option>
  <option value="new-york">New York</option>
  <option value="tokyo">Tokyo</option>
</select>
<h4 className='p-2'>To:</h4>
<select class="p-2 border rounded "  value={endselect} onChange={handelendselect}>
  <option value="" disabled selected>Select a place</option>
  <option value="paris">Paris</option>
  <option value="london">London</option>
  <option value="new-york">New York</option>
  <option value="tokyo">Tokyo</option>
</select>
    </div>
    <div className='flex mt-3 ml-8'>
    <h4 className='p-2'>pickup time :</h4>
    <select class="p-2 border rounded " value={pickupselect} onChange={handelpickupselect}>
  <option value="" disabled selected>Select a time</option>
  <option value="10am">10am</option>
  <option value="12pm">12pm</option>
  <option value="2pm">2pm</option>
  <option value="4pm">4pm</option>
</select>
</div>
    <button className='mt-3 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-36'>Get Fair</button>
    <div className='flex w-70 h-50 border-2 border-slate-400 mt-8 p-4 rounded-md bg-amber-50' >
      <h1 className='text-2xl '> Total Fair:</h1>&nbsp;&nbsp;
      <span className='text-xl text-red-600 p-1'> Rs. {fair} </span>
     
    </div>
    <span className='text-l text-gray-700 ml-2 mt-2'>pick up time:</span>
    <br/>
    <span className='text-l text-gray-700 ml-2 mt-2'>pickup up place:</span>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <button className='mt-3 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-32' onClick={generateqr}>Get Journey QR</button>
      </div>
      </div>
  )
}

export default Travelform