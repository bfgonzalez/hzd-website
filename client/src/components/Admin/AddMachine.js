import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

import Layout from "../Template/Layout";
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
    explosive_components: "",
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
      history.push("/machines");
    })
    .catch(error => console.log(error))
  }


  return (
    <Layout>
      <div className="add-machine-section">
        <h1 className="title has-text-white has-text-center">Add Machine</h1>
        <form onSubmit={handleSubmit} name="addMachinesForm">
          <div className="field">
            <div className="control">
              <label for="name" className="has-text-white">Name</label>
              <input className="input is-primary" name="name" type="text" onChange={handleInputChange} value={values.name} placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="size" className="has-text-white">Size</label>
              <input className="input is-primary" name="size" type="text" onChange={handleInputChange} value={values.size} placeholder="Size"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="origin" className="has-text-white">Origin</label>
              <input className="input is-primary" name="origin" type="text" onChange={handleInputChange} value={values.origin} placeholder="Origin"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="override" className="has-text-white">Override</label>
              <input className="input is-primary" name="override" type="text" onChange={handleInputChange} value={values.override} placeholder="Override"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="machine_class" className="has-text-white">Machine Class</label>
              <input className="input is-primary" name="machine_class" type="text" onChange={handleInputChange} value={values.machine_class} placeholder="Machine Class"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="machine_sites" className="has-text-white">Machine Sites</label>
              <input className="input is-primary" name="machine_sites" type="number" onChange={handleInputChange} value={values.machine_sites} placeholder="Machine Sites"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="weakness" className="has-text-white">Weakness</label>
              <input className="input is-primary" name="weakness" type="text" onChange={handleInputChange} value={values.weakness} placeholder="Weakness"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="strength" className="has-text-white">Strength</label>
              <input className="input is-primary" name="strength" type="text" onChange={handleInputChange} value={values.strength} placeholder="Strength"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="weak_points" className="has-text-white">Weak Points</label>
              <input className="input is-primary" name="weak_points" type="text" onChange={handleInputChange} value={values.weak_points} placeholder="Weak Points"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label for="explosive_components" className="has-text-white">Explosive Components</label>
              <input className="input is-primary" name="explosive_components" type="text" onChange={handleInputChange} value={values.explosive_components} placeholder="Explosive Components"/>
            </div>
          </div>
          <button className="button is-primary has-text-weight-bold" type="submit" onClick={handleSubmit}>Add Machine</button>
        </form>
      </div>
    </Layout>
  )
}

export default AddMachine;