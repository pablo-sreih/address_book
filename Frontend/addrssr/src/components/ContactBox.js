import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone,faLocation } from '@fortawesome/free-solid-svg-icons'



function ContactBox() {
  return (
    <div className='contactbox'>
        <div>Pablo Sreih</div>
        <br></br>
        <div><FontAwesomeIcon icon={faEnvelope}/> pablo.sreih@gmail.com</div>
        <div><FontAwesomeIcon icon={faPhone}/> Phone</div>
        <div><FontAwesomeIcon icon={faLocation}/> Location</div>
    </div>
  )
}

export default ContactBox;