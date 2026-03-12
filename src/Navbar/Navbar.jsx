import React from 'react'
import logo from '../assets/navbar/logo.png'
import bars from '../assets/navbar/bars.png'
import threeDot  from '../assets/navbar/3dot.png'
import search  from '../assets/navbar/search.png'
import cart  from '../assets/navbar/cart.png'
import message  from '../assets/navbar/message.png'
import notification  from '../assets/navbar/notification.png'
import setting  from '../assets/navbar/setting.png'
const Navbar = () => {
  return (
    <div className='bg-blue1'>
        <div className='container  px-6 py-4 flex justify-between items-center'>
        <img src={logo} alt="" />
        <div className='flex gap-12 items-center text-[14px] font-bold text-white'>
            <img src={bars} alt="" className='w-5 h-5 '/>
            <p>Career</p>
            <p>Store</p>
            <p>FAQ</p>
            <img src={threeDot} alt=""  className='w-3 h-0.75'/>
        </div>
        <div className='w-104 h-12.5  relative'>
            <input type="text"  placeholder='Search here ' className='w-104 h-12.5  bg-[#4E4AC8] px-4 py-1 rounded-xl borded-0 outline-0 text-white'/>
            <img src={search} alt="" className='absolute top-5 right-5 w-3.5 h-3.5 ' />
        </div>
        <div>
            <p className='text-white text-[12px]'>Next <span className='ml-11'> 35 EXP</span></p>
            <hr  className='text-[#41EFFF] border-2 w-[80%] rounded-lg mt-1'/>
        </div>

        <div className='flex gap-7.5'>
            <img src={cart} alt="" />
            <img src={message} alt="" />
            <img src={notification} alt="" />
            <img src={setting} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Navbar
