import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { toast } from "bulma-toast"

import FormInput from "./FormInput"
import Button from "../Button"

const AddForm = ({ type, initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues)
  const history = useHistory()

  // get keys from initialValues object and return in an array
  const formKeys = Object.keys(initialValues)
  // remove last two items in formKeys array (created_at & updated_at)
  formKeys.splice(-2, 2)

  // slug for endpoint ex: if type is Cauldron, slug = cauldrons
  const slug = `${type.toLowerCase()}s`

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = formValues

    // proceed to POST request if there are no empty values
    if (!Object.values(data).includes("")) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/${slug}`, data)
        .then(() => {
          toast({
            message: `<strong>${data.name} has been added to the ${slug} database!</strong>`,
            duration: 3000,
            type: "is-success",
            dismissible: true,
          })
          setTimeout(() => {
            history.push(`/admin/${slug}`)
          }, 1000)
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="form-section">
      <h1 className="title has-text-white"> Add {type}</h1>
      <form onSubmit={handleSubmit} name={`add${type}Form`}>
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
            text={`Add ${type}`}
            color="info"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  )
}

export default AddForm
