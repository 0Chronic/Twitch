import React from 'react'
import Link from 'next/link'
import Image from 'next/image'





const Navbar = () => {
  return (
    <div className='fixed h-14 w-full flex flex-norap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
        {/*Left Side */}

        <div className='flex grow items-center justify-start'>
      <Link href='/'>
   
        <Image src="/logo.png" alt='/' width={200} height={200} />
   
      </Link>
        </div>
        {/*Middle*/}
        {/*Right Side*/}

    </div>
  )
}

export default Navbar