import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <p> <span className='text-green-500'>|</span> Get in touch</p>
    <form>
    <label>Form</label>
    <input type='email' placeholder='email' name='email'/>
    <label></label>
    </form>
    </div>
  )
}

export default Contact