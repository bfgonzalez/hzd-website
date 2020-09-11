import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory, withRouter } from "react-router-dom"
import { toast } from "bulma-toast"

import Layout from "../Template/Layout"
import FormInput from "../Template/Forms/FormInput"
import Button from "../Template/Button"

const EditCauldron = ({ match }) => {
  const currentDate = new Date()
  const history = useHistory()

  const {
    params: { id },
  } = match

  const [values, setValues] = useState({
    name: "",
    location: "",
    enemies: "",
    rewards: "",
    created_at: moment(currentDate).format("MM-DD-YYYY"),
    updated_at: moment(currentDate).format("MM-DD-YYYY"),
  })

  // get cauldron info based on id
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cauldrons/id/${id}`)
      .then((response) => {
        let cauldron = response.data

        setValues({
          id: cauldron.id,
          name: cauldron.name || "",
          location: cauldron.location || "",
          enemies: cauldron.enemies || "",
          rewards: cauldron.rewards || "",
          created_at: cauldron.created_at || "",
          updated_at: moment(currentDate).format("MM-DD-YYYY"),
        })
      })
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = values

    // proceed to PUT request if there are no empty values
    if (!Object.values(data).includes("")) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/cauldrons/${id}`, data, {
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
            history.push("/admin/cauldrons")
          }, 1000)
        })
        .catch((error) => console.log(error))
    } else {
      toast({
        message: `<strong>Unable to edit cauldron, form is incomplete 😢</strong>`,
        duration: 3000,
        type: "is-danger",
        dismissible: true,
      })
    }
  }
  return (
    <Layout>
      <div className="form-section">
        <h1 className="title has-text-white">Edit Cauldron</h1>
        <form onSubmit={handleSubmit} bane="editCauldronForm">
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
            <Button text="Cancel" link="/admin/machines" />
            <Button
              text="Edit Cauldron"
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

export default withRouter(EditCauldron)
