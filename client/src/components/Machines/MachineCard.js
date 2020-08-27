import React from "react"
import axios from "axios"
import { toast } from "bulma-toast"

import ButtonLink from "../Template/ButtonLink"

const MachineCard = ({ data, index, isAdmin }) => {
  // regex: replace all spaces with dashes ("-")
  const machineName = data.name.replace(/\s+/g, "-")
  const machineImage = machineName.toLowerCase()

  const deleteMachine = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/${data.id}`)
      .then((response) => {
        toast({
          message: `${data.name} has been removed from the machines database!`,
          duration: 3000,
          type: "is-success",
          dismissible: true,
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      })
  }

  return (
    <div className="machine-card" key={index}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={require(`../../assets/machines/${machineImage}.png`)}
              alt={`${data.name}`}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{data.name}</p>
            </div>
          </div>

          <div className="content">
            <p>
              <strong>Origin:</strong> {data.origin}
            </p>
            <p>
              <strong>Class:</strong> {data.machine_class}
            </p>
            <p>
              <strong>Override:</strong> {data.override}
            </p>
          </div>

          <div className="field is-grouped">
            <ButtonLink
              text="Details"
              color="primary"
              link={`/machines/${machineName}`}
            />
            {isAdmin && (
              <>
                <ButtonLink
                  text="Edit"
                  color="warning"
                  link="/admin/edit-machine"
                />
                <button className="button is-danger" onClick={deleteMachine}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MachineCard
