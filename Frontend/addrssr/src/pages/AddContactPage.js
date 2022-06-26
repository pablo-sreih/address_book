import React from 'react'
import NavBar from '../components/NavBar';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddContactPage() {

        const navigate = useNavigate()
        const user_id = localStorage.getItem("id")
        const name = useRef(null)
        const email = useRef(null)
        const number = useRef(null)
        const status = useRef(null)
        const location = useRef(null)

    async function addContact(){

        await axios.post("http://localhost:4001/add-contact", {
            user_id: user_id,
            name: name.current.value,
            email: email.current.value,
            number: number.current.value,
            status: status.current.value,
            location: location.current.value
        })

        .then(function (response) {
            alert("Contact Added Successfully")
            console.log(response)
            navigate("/contacts")
        })

        .catch( (error)=> {
            alert("Either the Number already exists or fields are not properly filled")
        })
    }

  return (
    <div>
        <NavBar/>
        <div className='add-contact-form'>
            <h1>Add Contact</h1>
            <input ref={name} placeholder='Name'></input>
            <input ref={email} placeholder='Email'></input>
            <input ref={number} placeholder='Number'></input>
            <input ref={status} placeholder='Status'></input>
            <input ref={location} placeholder='Location'></input>
            <button onClick={addContact}>Submit</button>
        </div>
    </div>
  )
}

export default AddContactPage;