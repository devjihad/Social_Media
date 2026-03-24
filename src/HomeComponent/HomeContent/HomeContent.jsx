import React from 'react'
import socialicon from '../../assets/Home/social icon.png'

const HomeContent = () => {
  return (
    <div className='mt-8 relative'>
      <div className='h-75 w-296 bg-blue2 rounded-t-xl'></div>
      <div className='h-32 w-32 bg-blue1 rounded-full absolute top-55 left-1/2 -translate-x-1/2 border-8 border-white'></div>

      <div className='flex gap-4 absolute top-68 right-10'>
        <button className='px-13 py-3.5 bg-blue1 ronded-lg text-white rounded-lg '>Add Friend </button>
        <button className='px-13 py-3.5 bg-blue ronded-lg text-white rounded-lg'>Send Messege </button>
      </div>

      <div className='flex justify-between mt-16'>

      <div className='flex gap-6 '>
            <div className='text-center'>
                <h3 className='text-[14px] font-bold'>930</h3>
                <p className='text-[12px] text-gray1'>Friend</p>
            </div>
           <h3 className='text-3xl text-gray1'> |</h3>
            <div className='text-center'>
                <h3 className='text-[14px] font-bold'>80</h3>
                <p className='text-[12px] text-gray1'>Post</p>
            </div>
           <h3 className='text-3xl text-gray1'> |</h3>
            <div className='text-center'>
                <h3 className='text-[14px] font-bold'>2K</h3>
                <p className='text-[12px] text-gray1'>Follower</p>
            </div>
        </div>

        <div className='text-center '> 
            <h3 className='text-[16px] text-black font-bold'>A B M Shawon Islam </h3>
            <p className='text-[12px] text-gray1'>abm.com </p>
        </div>

        <img src={socialicon} alt="" />



      </div>
    </div>
  )
}

export default HomeContent
