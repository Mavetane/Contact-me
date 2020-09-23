import React, { useState, useEffect } from 'react';
import axios from 'axios';
import history from '../../routes/history'

function Enquiries () {
  const [enquiries, setEnquiries] = useState([])

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

  function refreshPage () {
    window.location.reload();
  }
  const navigatePage = (routeName) => {
    history.push(routeName)
    refreshPage()
  }
  return (
    <div>
      <button onClick={navigatePage('register')}>Register Company</button>
      <h1>Enquiries</h1>
      {enquiry()}
    </div>
  )
}

export default Enquiries
