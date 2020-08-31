import React from "react"
import { Link } from "react-router-dom"

const ButtonLink = ({ text, link, color, type }) => {
  return (
    <div className="control">
      <Link to={link}>
        <button
          className={`button is-${color} has-text-weight-bold`}
          type={type}>
          {text}
        </button>
      </Link>
    </div>
  )
}

export default ButtonLink
