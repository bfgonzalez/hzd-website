import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/variables.scss';

const AddMachine = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const history = useHistory();

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   if (username === `${process.env.REACT_APP_USERNAME}` && password === `${process.env.REACT_APP_PASSWORD}`) {
  //     history.push(`${process.env.REACT_APP_ADMIN_URL}`)
  //   } else {
  //     alert("you're not my master!")
  //   }
  // }

  const handleSubmit = event => {
    event.preventDefault();

    let data = {
      name: 'Grazer',
      size: 'Small',
      origin: 'GAIA',
      override: 'Cauldron SIGMA',
      machine_class: 'Acquisition',
      machine_sites: 11,
      weakness: 'None',
      strength: 'None',
      weak_points: 'Eyes, Rotor Blades (x2), Blaze Canisters (x4)'
    }

    axios.post(process.env.REACT_APP_API_URL, data)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }


  return (
    <div>
      <h1 className='title'>Add Machine</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input is-primary" name="name" type="text" placeholder="Name"/>
            <input className="input is-primary" name="size" type="text" placeholder="Size"/>
          </div>
        </div>
        <button className='button is-primary has-text-weight-bold' type='submit' onClick={handleSubmit}>Add Machine</button>
      </form>
    </div>
  )
}

export default AddMachine;