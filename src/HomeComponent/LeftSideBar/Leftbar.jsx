import React from 'react'
import news from '../../assets/leftsidevar/news.png'
import video from '../../assets/leftsidevar/videos.png'
import group from '../../assets/leftsidevar/group.png'
import photo from '../../assets/leftsidevar/photo.png'
import freind from '../../assets/leftsidevar/friend.png'
import friendRequest from '../../assets/leftsidevar/friendRequest.png'
import signout from '../../assets/leftsidevar/sign-out.png'
const Leftbar = () => {
  return (
    <div className='  w-75 h-full '>

        <div className='relative w-full' >
            <div className='w-full h-18.75 bg-blue2'></div>
            <div className='w-30 h-30 rounded-full border-4 border-white bg-blue1 absolute left-23 top-8   '></div>
        </div>

        <div className='mt-25 text-center '> 
            <h3 className='text-[16px] text-black font-bold'>A B M Shawon Islam </h3>
            <p className='text-[12px] text-gray1'>abm.com </p>
        </div>

        <div className='flex gap-6 justify-center items-center mt-10.5'>
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

        <div className='mt-16 '>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl text-gray1 hover:bg-blue hover:text-white!'>
                <img src={news} alt=""  className='transition duration-300 hover:grayscale hover:brightness-125'/>
                <p className=' '>Newsfeed</p>
            </div>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl hover:bg-blue'>
                <img src={video} alt="" />
                <p className='text-gray1 hover:text-white w-full'>Videos</p>
            </div>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl hover:bg-blue'>
                <img src={group} alt="" />
                <p className='text-gray1 hover:text-white w-full'>Groups</p>
            </div>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl hover:bg-blue'>
                <img src={photo} alt="" />
                <p className='text-gray1 hover:text-white w-full'>Photos</p>
            </div>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl hover:bg-blue'>
                <img src={freind} alt="" />
                <p className='text-gray1 hover:text-white w-full'>Freinds</p>
            </div>

            <div className='flex gap-7.5 items-center px-5 py-3.5 ml-6 mr-2 rounded-xl hover:bg-blue'>
                <img src={friendRequest} alt="" />
                <p className='text-gray1 hover:text-white w-full'>Freind Request</p>
            </div>
        </div>

      
    </div>
  )
}

export default Leftbar
