import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault()
    if (username === `${process.env.REACT_APP_USERNAME}` && password === `${process.env.REACT_APP_PASSWORD}`) {
      history.push(`${process.env.REACT_APP_ADMIN_URL}`)
    } else {
      alert("you're not my master!")
    }
  }


  return (
    <div>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input is-primary" name="username" type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
            <input className="input is-primary" name="password" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
          </div>
        </div>
        <button className='button is-primary has-text-weight-bold' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;