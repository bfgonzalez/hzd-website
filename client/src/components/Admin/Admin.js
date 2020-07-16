import React from 'react';
import axios from 'axios';

import '../../styles/variables.scss';

const handleSubmit = event => {
  console.log(event)
}

const Admin = () => {
  return (
    <div>
      <h1 className='title'>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Add Machine"/>
          </div>
        </div>
        <button className='button is-primary has-text-weight-bold' type='submit' onClick={event => {console.log(event.target.result)}}>Add Machine</button>
      </form>
    </div>
  )
}

export default Admin;