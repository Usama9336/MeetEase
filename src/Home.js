import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import meeting from './components/meeting.jpg'
import Navbar from './components/Navbar';
export default function Home() {
  const [roomcode,setroomcode]=useState("")  
  const navigate =useNavigate();
  const submitcode=(e)=>{
    e.preventDefault();
navigate(`/room/${roomcode}`) ; 
}  
  return (
    <>
    <div className="h-[6rem] bg-black">
    <Navbar/>
      </div>
    <div className='relative'>
      <div className="absolute w-full h-screen flex overflow-hidden">
        <img src={meeting} alt="" className='object-cover w-full  h-full'/>
      </div>
      <div className="z-10 relative h-screen px-4 py-[5.5rem] bg-black/60">
      <form action="" onSubmit={submitcode}
        className="flex flex-col items-center justify-center text-[white]">
        <label htmlFor="" className='font-bold text-[26px] sm:text-[52px] md:text-[62px] lg:text-[72px] pt-12'>Video Chat & Call App</label>
        <p className='text-[25px] md:text-[40px] pt-12'>Enter Room Code</p>
        <input type="text" required placeholder="Enter any code" value={roomcode}
        onChange={(e)=>setroomcode(e.target.value)}
        className="bg-orange-500 placeholder:text-[white] py-2 w-[16rem] rounded-full pl-8 outline-0 mt-3" />
        <button type='submit' className='bg-blue-500 rounded-[4px] font-semibold mt-4 py-1.5 px-4 hover:opacity-[70]'>Get Started</button>
        </form>
      </div>
        
        </div>
        </>
  )
}
