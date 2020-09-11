import React from "react"
import axios from "axios"
import { toast } from "bulma-toast"

import Button from "../Template/Button"

const CauldronCard = ({ data, index, isAdmin }) => {
  // regex: replace all spaces with dashes ("-")
  const cauldronName = data.name.replace(/\s+/g, "-")
  const cauldronImage = cauldronName.toLowerCase()

  // only call this function after confirmation
  const deleteCauldron = () => {
    window.confirm(
      `Are you sure you want to delete ${data.name} from the database?`
    ) &&
      axios
        .delete(`${process.env.REACT_APP_API_URL}/cauldrons/${data.id}`)
        .then(() => {
          toast({
            message: `<strong>${data.name} has been removed from the cauldrons database!</strong>`,
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
    <div className="cauldron-card" key={index}>
      <div className="card">
        <div className="card-image p-1">
          <figure className="image is-4by3">
            <img
              src={require(`../../assets/cauldrons/${cauldronImage}.png`)}
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
          <div className="field is-grouped">
            <Button
              text="Details"
              color="primary"
              link={`/cauldrons/${cauldronName}`}
            />
            {isAdmin && (
              <>
                <Button
                  text="Edit"
                  color="warning"
                  link={`/admin/edit-cauldron/${data.id}`}
                />
                <button
                  className="button is-danger has-text-weight-bold"
                  onClick={deleteCauldron}>
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

export default CauldronCard
