import React from "react"

import ButtonLink from "../Template/ButtonLink"

const MachineCard = ({ data, index, isAdmin }) => {
  // regex: replace all spaces with dashes ("-")
  const machineName = data.name.replace(/\s+/g, "-").toLowerCase()

  return (
    <div className="machine-card">
      <div className="card" key={index}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={require(`../../assets/machines/${machineName}.png`)}
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

          {isAdmin && (
            <div className="field is-grouped">
              <ButtonLink
                text="Edit"
                color="warning"
                link="/admin/edit-machine"
              />
              <ButtonLink
                text="Delete"
                color="danger"
                link="/admin/delete-machine"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MachineCard
