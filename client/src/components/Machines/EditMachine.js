import React from "react"
import moment from "moment"

import Layout from "../Template/Layout"
import EditForm from "../Template/Forms/EditForm"

const EditMachine = () => {
  const currentDate = new Date()

  const initialValues = {
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
  }

  return (
    <Layout>
      <EditForm type="Machine" initialValues={initialValues} />
    </Layout>
  )
}

export default EditMachine
