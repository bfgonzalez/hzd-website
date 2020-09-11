import React from "react"
import moment from "moment"

import Layout from "../Template/Layout"
import AddForm from "../Template/Forms/AddForm"

const AddCauldron = () => {
  const currentDate = new Date()

  const initialValues = {
    name: "",
    location: "",
    enemies: "",
    rewards: "",
    created_at: moment(currentDate).format("MM-DD-YYYY"),
    updated_at: moment(currentDate).format("MM-DD-YYYY"),
  }

  return (
    <Layout>
      <AddForm type="Cauldron" initialValues={initialValues} />
    </Layout>
  )
}

export default AddCauldron
