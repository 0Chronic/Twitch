import React from 'react'

import { rec_channels , top_channels} from '../data/MOCK_DATA'

import {RiMovieLine} from 'react-icons/ri'





const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl::w-[15rem] h-screen bg-[#0e0e10]'>
      <div>
        <p>Recommended Channels</p>
        <p><RiMovieLine /></p>
     
      </div>

    </div>
  )
}

export default SideMenu