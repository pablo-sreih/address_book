import React from 'react'
import ContactBox from '../components/ContactBox'
import NavBar from '../components/NavBar'

function ContactsPage() {
  return (
    <div>
        <NavBar/>
        <div className='contact-container'>
            <ContactBox/>
            <ContactBox/>
            <ContactBox/>
            <ContactBox/>
        </div>
    </div>
  )
}


export default ContactsPage