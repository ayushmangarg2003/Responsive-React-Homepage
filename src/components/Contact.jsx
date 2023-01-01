import React from 'react'
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder='abc' required/> 
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='abc@xyz.com' required/> 
            </div>
            <div>
                <label>Message</label>
                <input type="text" placeholder='Your message here' required/> 
            </div>
            <button type='Submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
