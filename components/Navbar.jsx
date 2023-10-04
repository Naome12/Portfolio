import React from 'react'
import Link from 'next/link';
const Navbar = () => {
    const name="Naome Tuyishime"
  return (
    <div>
    <div className='flex justify-between m-0 '>
    <strong className="text-green-400 p-0">{name}</strong>
    <div className='justify-between'>
    <Link href='/homePage' className="text-green-400 p-1">Home</Link>
    <Link href='/about' className='text-slate-200' >About Me</Link>
    <Link href='/contact' className='text-slate-200'>Contact</Link>
    <Link href='/services' className='text-slate-200'>Services</Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar