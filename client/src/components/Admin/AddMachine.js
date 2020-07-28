import React from "react";
import axios from "axios";
import moment from "moment";

import "../../styles/variables.scss";

const AddMachine = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const currentDate = new Date();

    let data = {
      name: "Grazer",
      size: "Small",
      origin: "GAIA",
      override: "Cauldron SIGMA",
      machine_class: "Acquisition",
      machine_sites: 11,
      weakness: "None",
      strength: "None",
      weak_points: "Eyes, Rotor Blades (x2), Blaze Canisters (x4)",
      created_at: moment(currentDate).format("MM-DD-YYYY"),
      updated_at: moment(currentDate).format("MM-DD-YYYY")
    }

    let formData = new FormData();

    // append all key-value pairs from "data" object to FormData()
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

    axios.post(process.env.REACT_APP_API_URL, data, {
      headers: {
        "content-type": "application/json",
      }
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    // axios.post(process.env.REACT_APP_API_URL, {
    //   name: data.name,
    //   size: data.size,
    //   origin: data.origin,
    //   override: data.override,
    //   machine_class: data.machine_class,
    //   machine_sites: data.machine_sites,
    //   weakness: data.weakness,
    //   strength: data.strength,
    //   weak_points: data.weak_points
    // }, {
    //   headers: {
    //     "content-type": "application/json",
    //   }
    // })
    //   .then(response => console.log(response.data))
    //   .catch(error => console.log(error))
  }


  return (
    <div>
      <h1 className="title">Add Machine</h1>
      <form onSubmit={handleSubmit} name="addMachinesForm">
        <div className="field">
          <div className="control">
            <input className="input is-primary" name="name" type="text" placeholder="Name"/>
            <input className="input is-primary" name="size" type="text" placeholder="Size"/>
            <input className="input is-primary" name="origin" type="text" placeholder="Origin"/>
            <input className="input is-primary" name="override" type="text" placeholder="Override"/>
            <input className="input is-primary" name="machine_class" type="text" placeholder="Machine Class"/>
            <input className="input is-primary" name="machine_sites" type="number" placeholder="Machine Sites"/>
            <input className="input is-primary" name="weakness" type="text" placeholder="Weakness"/>
            <input className="input is-primary" name="strength" type="text" placeholder="Strength"/>
            <input className="input is-primary" name="weak_points" type="text" placeholder="Weak Points"/>
          </div>
        </div>
        <button className="button is-primary has-text-weight-bold" type="submit" onClick={handleSubmit}>Add Machine</button>
      </form>
    </div>
  )
}

export default AddMachine;