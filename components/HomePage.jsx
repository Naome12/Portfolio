import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  const name="Naome Tuyishime";
  return (
    <div className=''>
   <Navbar/>
    <main className=''>
    <h3 className='head3'>Hello, I'm <span className=''>{name}</span></h3>
    <div>
    <p className=''>I am a full-stack developer <br/>
    with expertise in both front-end and back-end technologies.<br/> I specialize in creating web applications that seamlessly<br/> integrate user-friendly interfaces with robust server-side functionality. </p>
    <button className=''>More about me</button>
    <div className='follow'>
    <p>Follow me:</p>
    <ul>
    <li> <i></i> </li>
    <li> <i></i> </li>
    <li> <i></i> </li>
    <li> <i></i> </li>
    </ul>
    </div>
    <div className='float-right h-80 w-60 bg-slate-300 border-none'></div>
    </div>
    </main>
    </div>
  )
}

export default HomePage