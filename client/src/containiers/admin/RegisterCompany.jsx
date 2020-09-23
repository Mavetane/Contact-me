import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerCompany } from '../../redux/actions/companyActions'


function RegisterCompany () {
  const [formInfo, setFormInfo] = useState({ name: "", website: "", email: "", mobileNo: "", physicalAddress: "" });
  const dispatch = useDispatch()


  const onChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(registerCompany(formInfo))
  }


  return (
    <div>
      <h1>Register your company</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={formInfo.name} onChange={onChange} name="name" placeholder="Name" minLength="2" /><br />
        <input type="text" value={formInfo.website} onChange={onChange} name="website" placeholder="Website URL" /><br />
        <input type="email" value={formInfo.email} onChange={onChange} name="email" placeholder="Email" /><br />
        <input type="Number" value={formInfo.mobileNo} onChange={onChange} name="mobileNo" placeholder="Mobile Number" /><br />
        <input type="text" value={formInfo.physicalAddress} onChange={onChange} name="physicalAdress" placeholder="Business Address" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterCompany
