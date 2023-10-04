import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className='bg-black bg-cover bg-center text-white'>
    <Navbar/>
    <Main>
    <h3>|About</h3>
    <div className='flex'>
    <div>
    <p className='text-3xl' text-center>I am a full-stack developer
    with expertise in both front-end and back-end technologies.I specialize in creating web applications that seamlessly integrate user-friendly interfaces with robust server-side functionality. </p>
    <div className='from-neutral-300'></div>
    <div className='from-neutral-300'></div>
    </div>
    </div>
    </Main>
    </div>
  )
}

export default About