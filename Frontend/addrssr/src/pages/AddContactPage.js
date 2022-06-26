import React from 'react'
import NavBar from '../components/NavBar';

function AddContactPage() {
  return (
    <div>
        <NavBar/>
        <div>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Number'></input>
            <input placeholder='Status'></input>
        </div>
    </div>
  )
}

export default AddContactPage;