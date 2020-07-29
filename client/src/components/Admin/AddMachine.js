import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

import "../../styles/variables.scss";

const AddMachine = () => {
  const currentDate = new Date();
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    size: "",
    origin: "",
    override: "",
    machine_class: "",
    machine_sites: 0,
    weakness: "",
    strength: "",
    weak_points: "",
    created_at: moment(currentDate).format("MM-DD-YYYY"),
    updated_at: moment(currentDate).format("MM-DD-YYYY")
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault();

    let data = values;

    axios.post(process.env.REACT_APP_API_URL, data, {
      headers: {
        "content-type": "application/json",
      }
    })
    .then(response => {
      console.log(response.data);
      alert(`${response.data.name} has been added to the machines database!`)
      history.push('/machines');
    })
    .catch(error => console.log(error))
  }


  return (
    <div>
      <h1 className="title">Add Machine</h1>
      <form onSubmit={handleSubmit} name="addMachinesForm">
        <div className="field">
          <div className="control">
            <input className="input is-primary" name="name" type="text" onChange={handleInputChange} value={values.name} placeholder="Name"/>
            <input className="input is-primary" name="size" type="text" onChange={handleInputChange} value={values.size} placeholder="Size"/>
            <input className="input is-primary" name="origin" type="text" onChange={handleInputChange} value={values.origin} placeholder="Origin"/>
            <input className="input is-primary" name="override" type="text" onChange={handleInputChange} value={values.override} placeholder="Override"/>
            <input className="input is-primary" name="machine_class" type="text" onChange={handleInputChange} value={values.machine_class} placeholder="Machine Class"/>
            <input className="input is-primary" name="machine_sites" type="number" onChange={handleInputChange} value={values.machine_sites} placeholder="Machine Sites"/>
            <input className="input is-primary" name="weakness" type="text" onChange={handleInputChange} value={values.weakness} placeholder="Weakness"/>
            <input className="input is-primary" name="strength" type="text" onChange={handleInputChange} value={values.strength} placeholder="Strength"/>
            <input className="input is-primary" name="weak_points" type="text" onChange={handleInputChange} value={values.weak_points} placeholder="Weak Points"/>
          </div>
        </div>
        <button className="button is-primary has-text-weight-bold" type="submit" onClick={handleSubmit}>Add Machine</button>
      </form>
    </div>
  )
}

export default AddMachine;