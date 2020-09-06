import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory, withRouter } from "react-router-dom"
import { toast } from "bulma-toast"
import Joi from "joi-browser"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

import { machinesValidationSchema } from "../../validationSchema"

const EditMachine = ({ match }) => {
  const currentDate = new Date()
  const history = useHistory()

  const {
    params: { id },
  } = match

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

  // get machine info based on id
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/machines/id/${id}`)
      .then((response) => {
        let machine = response.data

        setValues({
          id: machine.id,
          name: machine.name || "",
          size: machine.size || "",
          origin: machine.origin || "",
          override: machine.override || "",
          machine_class: machine.machine_class || "",
          machine_sites: machine.machine_sites || 0,
          weakness: machine.weakness || "",
          strength: machine.strength || "",
          weak_points: machine.weak_points || "",
          explosive_components: machine.explosive_components || "",
          created_at: machine.created_at || "",
          updated_at: moment(currentDate).format("MM-DD-YYYY"),
        })
      })
    // eslint-disable-next-line
  }, [id])

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
          .put(`${process.env.REACT_APP_API_URL}/machines/${data.id}`, data, {
            headers: {
              "content-type": "application/json",
            },
          })
          .then(() => {
            toast({
              message: `<strong>${data.name} has been updated!</strong>`,
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
      <div className="edit-machine-section">
        <h1 className="title has-text-white">Edit Machine</h1>
        <form onSubmit={handleSubmit} name="editMachineForm">
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
              text="Edit Machine"
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

export default withRouter(EditMachine)
