import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import "../Styles/Contact.css"
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' 
      style={{backgroundImage:`url(${pizzaLeft})`}} >
      </div>
      <div className='rightSide'>
        <form id="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Enter name'/>
            <label htmlFor="Email">Email-Id</label>
            <input type="email" name="name" placeholder='Enter email'/>
            <label htmlFor="textarea">Message</label>
            <textarea rows="6"  placeholder='Enter message' required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
