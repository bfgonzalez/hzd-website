import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory } from "react-router-dom"
import { toast } from "bulma-toast"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

const AddMachine = () => {
  const currentDate = new Date()
  const history = useHistory()

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
    updated_at: moment(currentDate).format("MM-DD-YYYY"),
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = values

    // proceed to POST request if there are no empty values
    if (!Object.values(data).includes("")) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/machines`, data, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then(() => {
          toast({
            message: `<strong>${data.name} has been added to the machines database!</strong>`,
            duration: 3000,
            type: "is-success",
            dismissible: true,
          })
          setTimeout(() => {
            history.push("/admin/machines")
          }, 1000)
        })
        .catch((error) => console.log(error))
    } else {
      toast({
        message: `<strong>Unable to add machine, form is incomplete 😢</strong>`,
        duration: 3000,
        type: "is-danger",
        dismissible: true,
      })
    }
  }

  return (
    <Layout>
      <div className="add-machine-section">
        <h1 className="title has-text-white">Add Machine</h1>
        <form onSubmit={handleSubmit} name="addMachineForm">
          <FormInput
            name="name"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.name}
            isRequired
          />
          <FormInput
            name="size"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.size}
            isRequired
          />
          <FormInput
            name="origin"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.origin}
            isRequired
          />
          <FormInput
            name="override"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.override}
            isRequired
          />
          <FormInput
            name="machine_class"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.machine_class}
            isRequired
          />
          <FormInput
            name="machine_sites"
            type="number"
            hasLabel
            onChange={handleInputChange}
            value={values.machine_sites}
            isRequired
          />
          <FormInput
            name="weakness"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.weakness}
            isRequired
          />
          <FormInput
            name="strength"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.strength}
            isRequired
          />
          <FormInput
            name="weak_points"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.weak_points}
            isRequired
          />
          <FormInput
            name="explosive_components"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.explosive_components}
            isRequired
          />
          <div className="field is-grouped mt-5">
            <Button text="Cancel" link="/admin/machines" />
            <Button
              text="Add Machine"
              color="info"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default AddMachine
