import React from "react"
import moment from "moment"

import Layout from "../Template/Layout"
import EditForm from "../Template/Forms/EditForm"

const EditCauldron = () => {
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
      <EditForm type="Cauldron" initialValues={initialValues} />
    </Layout>
  )
}

export default EditCauldron
