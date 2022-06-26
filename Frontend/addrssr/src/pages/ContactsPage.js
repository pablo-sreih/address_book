import React from 'react'
import ContactBox from '../components/ContactBox'
import NavBar from '../components/NavBar'
import axios from 'axios'
import qs from 'qs'
import { useState, useEffect } from 'react'

function ContactsPage() {

    const [contacts, setContacts] = useState([])

    async function getContacts(){
        const id = localStorage.getItem("id")

        // await axios({
        //     method: "POST",
        //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     url: "http://localhost:4001/get-contacts",
        //     user_id: "62b7fd21d5e149b13e2012e7",
        // })

        await axios.post("http://localhost:4001/get-contacts", {
            user_id: id,
        })

        .then(function (response) {
            setContacts(response.data)
            console.log(response)
            console.log(id)
        })

        .catch( (error)=> {
            alert("No Contacts Found")
        })
    }

    useEffect(() => {
        getContacts()
    },[])

  return (
    <div>
        <NavBar/>
        <div className='contact-container'>
        {
            contacts.map((value, index) => {
                return(
                    <ContactBox key = {index} name = {value["name"]} email = {value["email"]}
                    number = {value["number"]} status = {value["status"]} location = {value["location"]}/>
                )
            })
        }
        </div>
    </div>
  )
}


export default ContactsPage