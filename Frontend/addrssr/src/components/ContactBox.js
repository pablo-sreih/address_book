import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faTrash, faEnvelope, faPhone,faLocation } from '@fortawesome/free-solid-svg-icons'



function ContactBox(props) {
  return (
    <div className='contactbox'>
        <div className='delete-button'><FontAwesomeIcon icon={faTrash} size="lg"/></div>
        <div className='contact-name'>{props.name}</div>
        <br></br>
        <div><FontAwesomeIcon icon={faEnvelope}/> {props.email}</div>
        <div><FontAwesomeIcon icon={faPhone}/> {props.number}</div>
        <div><FontAwesomeIcon icon={faLink}/> {props.status}</div>
        <div><FontAwesomeIcon icon={faLocation}/> {props.location}</div>
    </div>
  )
}

export default ContactBox;