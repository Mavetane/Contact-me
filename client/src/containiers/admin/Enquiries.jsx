import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterCompany from './RegisterCompany';

function Enquiries () {
  const [enquiries, setEnquiries] = useState([]);
  const [state, setState] = useState(false)

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:6005/users')
      setEnquiries(data)
    } catch (e) {
      console.log(e)
    }
  }, [setEnquiries])

  const enquiry = () => enquiries.map(each => <div key={each._id}>
    <h2>{each.companyName}</h2>
    <h3>{each.name} {each.surname}</h3>
    <h4>{each.email}</h4>
    <h4>{each.mobileNo}</h4>
    <p>{each.question}</p>
  </div>)
  const handleState = () => {
    setState(!state)
  }

  return (
    <div>
      {/* <div onClick={navigatePage('company')}>
        <a>Register Company</a>
      </div> */}
      {state == false ? <button onClick={handleState}>Register Company</button> : <button onClick={handleState}>Enquiries</button>}
      {state == false ?
        <div>
          <h1>Enquiries</h1>
          {enquiry()}
        </div>
        : <div>
          <RegisterCompany />
        </div>}
    </div>
  )
}

export default Enquiries
