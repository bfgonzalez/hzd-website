import React, { useState } from "react"
import PropTypes from "prop-types"

const FormInput = ({ name, type, onChange, value, hasLabel, isRequired }) => {
  const [error, setError] = useState(false)

  // replace undescore with space and capitalize first letter of name
  let label = name
    .replace(/_/g, " ")
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())

  const handleBlur = () => {
    if (isRequired && value === "") setError(true)
    else setError(false)
  }

  return (
    <div className="field">
      <div className="control">
        {hasLabel && (
          <label htmlFor={name} className="has-text-white">
            {label} {isRequired && <span className="has-text-danger">*</span>}
          </label>
        )}
        <input
          className="input is-primary"
          type={type}
          name={name}
          placeholder={label}
          onChange={onChange}
          onBlur={handleBlur}
          value={value}
        />
        {error && (
          <p className="help has-text-white has-text-weight-bold is-size-6">
            <span>This field is required </span>
          </p>
        )}
      </div>
    </div>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: "",
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
}

export default FormInput
