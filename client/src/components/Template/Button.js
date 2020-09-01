import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Button = ({ text, link, color, type, onClick }) => {
  return (
    <div className="control">
      <Link to={link}>
        <button
          className={`button is-${color} has-text-weight-bold`}
          type={type}
          onClick={onClick}>
          {text}
        </button>
      </Link>
    </div>
  )
}

Button.defaultProps = {
  link: "",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
