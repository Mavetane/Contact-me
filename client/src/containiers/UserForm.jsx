import React from 'react';
import { useState } from 'react';


function UserForm () {
  const [formInfo, setFormInfo] = useState({ name: "", surname: "", email: "", mobileNo: "", question: "" });



  const onChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    // if (formInfo.name == "") alert('Name input is required')
    // if (formInfo.surname == "") alert('Surname input is required')
    // if (formInfo.email == "") alert('Email input is required')
    // if (formInfo.mobileNo == "") alert('Number input is required')
    // if (formInfo.mobileNo.length < 10) alert("Number should be at least 10 digits")
    // if (formInfo.question == "") alert('Question input required')
    console.log('formInfo', formInfo)
  }


  return (
    <div>
      <h1>Your Enquiry</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={formInfo.name} onChange={onChange} name="name" placeholder="Name" minLength="2" /><br />
        <input type="text" value={formInfo.surname} onChange={onChange} name="surname" placeholder="Surname" /><br />
        <input type="email" value={formInfo.email} onChange={onChange} name="email" placeholder="Email" /><br />
        <input type="Number" value={formInfo.mobileNo} onChange={onChange} name="mobileNo" placeholder="Mobile Number" /><br />
        <input name="question" value={formInfo.question} onChange={onChange} placeholder="Your question here" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
