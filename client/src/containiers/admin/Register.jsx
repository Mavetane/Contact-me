import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/adminActions';


function Register () {
  const [formInfo, setFormInfo] = useState({ password: "", email: "" });
  const dispatch = useDispatch()


  const onChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(formInfo))
    console.log('formInfo', formInfo)
  }


  return (
    <div>
      <h1>Your Enquiry</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={formInfo.password} onChange={onChange} name="password" placeholder="password" /><br />
        <input type="email" value={formInfo.email} onChange={onChange} name="email" placeholder="Email" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register
