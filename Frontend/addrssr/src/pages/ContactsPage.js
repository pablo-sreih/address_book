import React from 'react'
import ContactBox from '../components/ContactBox'
import NavBar from '../components/NavBar'
import axios from 'axios'
import qs from 'qs'
import { useState, useEffect } from 'react'

function ContactsPage() {

    const [contacts, setContacts] = useState([])

    function getContacts(){
        const id = localStorage.getItem("id")

        axios({
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "http://localhost:4001/get-contacts",
            userid: qs.stringify(id),
        })

        .then(function (response) {
            setContacts(response.data)
            console.log(contacts)
        })

        .catch( (error)=> {
            alert("No Contacts Found")
        })
    }

    useEffect(()=>{
        getContacts()
    },[])

  return (
    <div>
        <NavBar/>
        <div className='contact-container'>
        </div>
    </div>
  )
}


export default ContactsPage