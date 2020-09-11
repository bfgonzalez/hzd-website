import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import { useHistory, withRouter } from "react-router-dom"
import { toast } from "bulma-toast"

import FormInput from "./FormInput"
import Button from "../Button"

const EditForm = ({ match, type, initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues)
  const currentDate = new Date()
  const history = useHistory()

  const {
    params: { id },
  } = match

  // get keys from initialValues object and return in an array
  const formKeys = Object.keys(initialValues)
  // remove last two items in formKeys array (created_at & updated_at)
  formKeys.splice(-2, 2)

  // slug for endpoint ex: if type is Cauldron, slug = cauldrons
  const slug = `${type.toLowerCase()}s`

  // get info based on id
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${slug}/id/${id}`)
      .then((response) => {
        let data = response.data
        setFormValues(data)
      })
  }, [id, slug])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const formData = { ...formValues }

    // assign value of date today to updated_at key
    formData.updated_at = moment(currentDate).format("MM-DD-YYYY")
    setFormValues({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = formValues

    // proceed to PUT request if there are no empty values
    if (!Object.values(data).includes("")) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/${slug}/${data.id}`, data, {
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
            history.push(`/admin/${slug}`)
          }, 1000)
        })
        .catch((error) => console.log(error))
    } else {
      toast({
        message: `<strong>Unable to edit ${data.name}, form is incomplete 😢</strong>`,
        duration: 3000,
        type: "is-danger",
        dismissible: true,
      })
    }
  }

  return (
    <div className="form-section">
      <h1 className="title has-text-white">Edit {type}</h1>
      <form onSubmit={handleSubmit} name={`edit${type}Form`}>
        {formKeys.map((formKey, index) => (
          <FormInput
            key={index}
            name={formKey}
            type={typeof formValues[formKey]}
            hasLabel
            onChange={handleInputChange}
            value={formValues[formKey]}
            isRequired
          />
        ))}
        <div className="field is-grouped mt-5">
          <Button text="Cancel" link={`/admin/${slug}`} />
          <Button
            text={`Edit ${type}`}
            color="info"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  )
}

export default withRouter(EditForm)
