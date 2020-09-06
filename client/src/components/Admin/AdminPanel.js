import React from "react"
import Machines from "../Machines/Machines"

import Layout from "../Template/Layout"
import Button from "../Template/Button"

const AdminPanel = () => {
  return (
    <Layout isAdmin>
      <div className="admin-panel">
        <h1 className="title has-text-white">Admin Panel</h1>

        <div className="field is-grouped">
          <Button text="Machines" color="success" link="/admin/machines" />
          <Button text="Cauldrons" color="info" link="/admin/cauldrons" />
        </div>
      </div>
    </Layout>
  )
}

export default AdminPanel
