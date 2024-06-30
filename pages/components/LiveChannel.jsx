import React from 'react'
import LiveChannelItem from './LiveChannelItem'

import Live1 from '/public/assets/live/live1.jpeg'

const LiveChannel = () => {
  return (
    <div id='live' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
          <span className='text-[#9147ff]'>Live Channel</span>
          we think you'll like</h2>
          {/* Container */}

          <div className='grid sm:grid-cols-2 ms:grid-cols-3 2xl:grid-cols4 3xl:grid-cols-5 gap-4 py-2'>
            <LiveChannelItem  img={Live1}   profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/4c0adb78-f81c-4dd3-bca7-61146eb163b9-profile_image-70x70.png'
          title='CHARITY STREAM! Any support is ap...'
          user='Natt'
          game='Valorant' alt='livechannel' />

          </div>
        
    </div>
  )
}

export default LiveChannel