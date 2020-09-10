import React, { useState } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory } from "react-router-dom"
import { toast } from "bulma-toast"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

const AddCauldron = () => {
  const currentDate = new Date()
  const history = useHistory()

  const [values, setValues] = useState({
    name: "",
    location: "",
    enemies: "",
    rewards: "",
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
        .post(`${process.env.REACT_APP_API_URL}/cauldrons`, data)
        .then(() => {
          toast({
            message: `<strong>${data.name} has been added to the cauldrons database!</strong>`,
            duration: 3000,
            type: "is-success",
            dismissible: true,
          })
          setTimeout(() => {
            history.push("/admin/cauldrons")
          }, 1000)
        })
        .catch((error) => console.log(error))
    } else {
      toast({
        message: `<strong>Unable to add cauldron, form is incomplete 😢</strong>`,
        duration: 3000,
        type: "is-danger",
        dismissible: true,
      })
    }
  }

  return (
    <Layout>
      <div className="add-cauldron-section">
        <h1 className="title has-text-white">Add Cauldron</h1>
        <form onSubmit={handleSubmit} name="addCauldronForm">
          <FormInput
            name="name"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.name}
            isRequired
          />
          <FormInput
            name="location"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.location}
            isRequired
          />
          <FormInput
            name="enemies"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.enemies}
            isRequired
          />
          <FormInput
            name="rewards"
            type="text"
            hasLabel
            onChange={handleInputChange}
            value={values.rewards}
            isRequired
          />
          <div className="field is-grouped mt-5">
            <Button text="Cancel" link="/admin/cauldrons" />
            <Button
              text="Add Cauldron"
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

export default AddCauldron
