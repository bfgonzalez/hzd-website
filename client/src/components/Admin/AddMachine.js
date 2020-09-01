import React, { useState } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory } from "react-router-dom"
import { toast } from "bulma-toast"
import Joi from "joi-browser"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

import { machinesValidationSchema } from "../../validationSchema"

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

  const handleInputBlur = () => {
    Joi.validate(values, machinesValidationSchema, (error) => {
      if (error) {
        console.log(error.message)
      }
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = values

    Joi.validate(values, machinesValidationSchema, (error) => {
      if (error) {
        console.log(error.message)
      } else {
        axios
          .post(process.env.REACT_APP_API_URL, data, {
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
      }
    })
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
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.name}
            required
          />
          <FormInput
            name="size"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.size}
            required
          />
          <FormInput
            name="origin"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.origin}
            required
          />
          <FormInput
            name="override"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.override}
            required
          />
          <FormInput
            name="machine_class"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.machine_class}
            required
          />
          <FormInput
            name="machine_sites"
            type="number"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.machine_sites}
            required
          />
          <FormInput
            name="weakness"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.weakness}
            required
          />
          <FormInput
            name="strength"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.strength}
            required
          />
          <FormInput
            name="weak_points"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.weak_points}
            required
          />
          <FormInput
            name="explosive_components"
            type="text"
            hasLabel
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={values.explosive_components}
            required
          />
          <div className="field is-grouped mt-5">
            <Button text="Cancel" link="/admin/machines" />
            <Button
              text="Add Machine"
              color="success"
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
