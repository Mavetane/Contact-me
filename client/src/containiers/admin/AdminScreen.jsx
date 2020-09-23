import React, { useState } from 'react'
import Register from './Register';
import Signin from './SignIn'

function AdminScreen () {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state)
  }
  return (
    <div>
      <h1>Admin Screen</h1>
      <div>
        {state ? <button onClick={handleClick}>Signin</button> :
          <button onClick={handleClick}>Login</button>}
      </div>
      <div>
        {!state ? <Signin /> :
          <Register />}
      </div>
    </div>
  )
}

export default AdminScreen
