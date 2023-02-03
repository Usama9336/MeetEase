import React from 'react'
import video from './vidoe.png'
export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-4 md:max-w-[80vw] mx-auto'>
        <div className=" flex items-center pt-4">
            <img src={video} alt="" className='object-cover w-[4rem] h-[4rem] rounded-[10px]'/>
            <div className='text-[white]'>
            <p className='text-[20px] sm:text-[25px] font-semibold pl-2'>Meeting App</p>
        </div>
        </div>
        <div className="pt-4">
            <ul className="text-[white] font-semibold flex items-center gap-4">
                <li>About</li>
           <li>Blogs</li>     <li>Product</li>
            </ul>
        </div>
    </div>
  )
}
