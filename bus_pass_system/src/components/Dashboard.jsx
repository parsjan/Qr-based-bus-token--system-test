import React, { useState,useEffect } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
//user dashboard
function Dashboard() {
  const location=useLocation()
  const navigate=useNavigate()
 var username,vehicleno,drivername ;

  const [userdriverdashboard,setuserdriverdashoard]=useState(location.state.userdriversignal)
  if(userdriverdashboard){
    username=location.state.userdata.username
  }
  else{
   vehicleno=location.state.driverdata.vehiclno
   drivername=location.state.driverdata.drivername
  }
 
const addbalance=async()=>{

}
const newjourney=async()=>{
  navigate("/travelform",{state:{username:username}})
}

const onqrscanner=async()=>{
   navigate("/qrscanner",{state:{drivername:drivername,vehicleno:vehicleno}})
}

  return (
    <div className="backdrop">
    <div className="modal2">
      {userdriverdashboard===true? (
        <div>
           <div className='flex mt-4'>
           <svg class="h-10 w-10 text-slate-700 bg-gray-400 p-2 rounded-full"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
       </svg>
       &nbsp; 
        <span className='p-2'>{username}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='p-2'>Logout</span>
          </div>
          <div className='w-70 h-50  mt-8 p-4 rounded-md bg-amber-50' >
           <div className='flex'>
          <svg class="h-9 w-9 text-stone-500 bg-neutral-300 p-2 rounded-full"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg>
           <span className='text-4xl ml-1'>Wallet Balance </span>
           <br/>
           </div>
           <span className='ml-28 text-2xl text-emerald-500 font-extrabold'>6000</span>
          </div>
          <div className='flex'>
          <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400' onClick={addbalance}>Add balance</button>
          <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400  ml-2' onClick={newjourney}>New Journey</button>
          </div>
         <br/>
         <br/>
          <hr className=' border-1 border-zinc-400'/>
          <h1 className='mt-3 text-3xl'>Payment History</h1>
          <div className='bg-gray-300 w-65 rounded-md '>
           <div className='mt-3'>
          <div className='flex ml-3 mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-slate-50'>
           <span className='text-l p-1'>starting place</span>
           <svg class="h-8 w-10 text-neutral-500  "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
       </svg>
       
           <span className='text-l p-1'> destination place</span>
       
          </div>
          <h3 className='text-gray-400 ml-4 mb-2'>paid rs.100 on 12/3/24</h3>
          <hr className=' border-1 border-zinc-400'/>
          </div>
         
          </div>
          </div>
      ):(<div>
        <div className='flex mt-4'>
           <svg class="h-10 w-10 text-slate-700 bg-gray-400 p-2 rounded-full"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
       </svg>
       &nbsp; 
        <span className='p-2'>{drivername}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='p-2'>Logout</span>
          </div>
          <div className='mt-2 ml-2'>
          <h2>driver's name :{drivername}</h2>
          <h2>vehicle no. :{vehicleno}</h2>
          <div className='flex mt-2'>
          <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400'>Set Routes</button>
          <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400  ml-2' onClick={onqrscanner}>QR Scanner</button>
          <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400  ml-2'>See Stats</button>
          </div>
          <br/>
         <br/>
          <hr className=' border-1 border-zinc-400'/>
          <h1 className='mt-3 text-3xl'>Payment History</h1>
          <div className='w-70 h-50  mt-2 p-4 rounded-md bg-amber-50' >
           <div className='flex'>
           
           <span className='text-2xl ml-1'>Total Collection :</span>
           <select class="p-2 border rounded bg-slate-300 h-12">
          <option value="" disabled selected>Select data range</option>
          <option value="Day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          </select>
           <br/>
           </div>
           <span className='ml-28 text-2xl text-emerald-500 font-extrabold'>6000</span>
          </div>
          <div className='bg-gray-300 w-65 rounded-md '>
           <div className=''>
          <div className='flex ml-3 mt-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-slate-50'>
           <span className='text-l p-1'>starting place</span>
           <svg class="h-8 w-10 text-neutral-500  "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
       </svg>
       
           <span className='text-l p-1'> destination place</span>
       
          </div>
          <h3 className='text-gray-400 ml-4 mb-2'>paid rs.100 on 12/3/24</h3>
          <hr className=' border-1 border-zinc-400'/>
          </div>
          </div>
</div>
      </div>)}
      
    </div>
    </div>
  )
}

export default Dashboard