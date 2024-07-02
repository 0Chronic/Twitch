import React from 'react'
import LiveChannel from './LiveChannel'
import LiveChannelItem from './LiveChannelItem'
import Hero from './Hero'
import IconBar from './IconBar'
import Categories from './Categories'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
      <Hero />
      <LiveChannel />
      <IconBar />
      <Categories />
     
    </div>
  )
}

export default Main