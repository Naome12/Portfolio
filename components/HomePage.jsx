import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  const name="Naome Tuyishime";
  return (
    <div className='bg-black bg-cover text-white'>
   <Navbar/>
    <main className='text-xl'>
    <h3 className=' float-left'>Hello, I'm <span className='text-green-500'>{name}</span></h3>
    <div>
    <p className='float-left text-3xl'>I am a full-stack developer <br/>
    with expertise in both front-end and back-end technologies.<br/> I specialize in creating web applications that seamlessly<br/> integrate user-friendly interfaces with robust server-side functionality. </p>
    <button className='bg-green-500 px-2 py--2 mx-2 my-2 rounded-xl float-left text-black text-lg'>More about me</button>
    <div className='float-right h-80 w-60 bg-slate-300 border-none'></div>
    </div>
    </main>
    </div>
  )
}

export default HomePage