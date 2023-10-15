import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    // <Link href="/product/1" className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
    //     <img className='w-full' src='/product-1.webp' alt='Product Image'/>
    //     <div className='p-4 text-black/[0.9]'>
    //         <h2 className='text-lg font-medium'>Product Name</h2>
    //         <p>dkgvdsi</p>
    //     </div>
    // </Link>
    <>
      <p className='text-[25px] md:text-[40px] font-bold text-blue-800'>Consult online doctors for any health concern</p>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0'>
        <Link href="/"><img src='/11.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/12.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/13.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/14.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/15.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/16.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/17.png' className="border rounded-xl border-blue-600"/></Link>
        <Link href="/"><img src='/18.png' className="border rounded-xl border-blue-600"/></Link>
      </div>
    </>
  )
}

export default Card 