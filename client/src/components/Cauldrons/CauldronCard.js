import React from "react"
import axios from "axios"
import { toast } from "bulma-toast"

import Button from "../Template/Button"

const CauldronCard = ({ data, index, isAdmin }) => {
  return (
    <div className="cauldron-card" key={index}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3"></figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CauldronCard
