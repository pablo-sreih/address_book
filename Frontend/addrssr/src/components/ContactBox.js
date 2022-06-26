import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMailBulk } from '@fortawesome/free-solid-svg-icons'



function ContactBox() {
  return (
    <div>
        <FontAwesomeIcon icon={faMailBulk} beat/>
    </div>
  )
}

export default ContactBox;