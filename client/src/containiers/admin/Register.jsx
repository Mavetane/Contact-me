import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/adminActions';
import history from '../../routes/history'


function Register () {
  const [formInfo, setFormInfo] = useState({ password: "", email: "" });
  const dispatch = useDispatch()


  const onChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  function refreshPage () {
    window.location.reload();
  }
  const navigatePage = (routeName) => {
    history.push(routeName)
    refreshPage()
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(formInfo))
    navigatePage('enquiries')
    console.log('formInfo', formInfo)
  }


  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="email" value={formInfo.email} onChange={onChange} name="email" placeholder="Email" /><br />
        <input type="password" value={formInfo.password} onChange={onChange} name="password" placeholder="password" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register
