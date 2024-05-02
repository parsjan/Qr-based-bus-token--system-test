import React from 'react'
//add money form of user
function Addmoneyform() {
  return (
    <div className="backdrop">
    <div className="modal2">
    <div className='flex mt-4'>
    <svg class="h-10 w-10 text-slate-700 bg-gray-400 p-2 rounded-full"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg>
&nbsp; 
 <span className='p-2'>Username</span>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <span className='p-2 '>Logout</span>
   </div>
  <div className='flex w-40 ml-32 mt-40'><h1 className='text-5xl p-2'>₹</h1><input  className=" w-32 placeholder:text-gray-400 bg-[#d3d3d3] text-5xl outline-none "   style={{
        WebkitAppearance: 'none',
        margin: 0,
    }}type="number" placeholder='0'></input></div>
    <h4 className='text-l text-red-500 ml-32'> Paying to wallet</h4>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <button className='mt-2 bg-gradient-to-r from-violet-400 via-pink-400 via-sky-400 to-red-300 p-2 rounded-md hover:from-voilet-500 hover:via-pink-500 hover:via-sky-500 hover:to-red-400 ml-28'>Pay and add money</button>
      </div>
      </div>
  )
}

export default Addmoneyform