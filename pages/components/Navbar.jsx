import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public.assets/logo.png'



const Navbar = () => {
  return (
    <div className='fixed h-14 w-full flex flex-norap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
        {/*Left Side */}

        <div className='flex grow items-center justify-start'>
      <Link href='/'>
    <a>
        <Image src={Logo} alt='/' />
    </a>
      </Link>
        </div>
        {/*Middle*/}
        {/*Right Side*/}

    </div>
  )
}

export default Navbar