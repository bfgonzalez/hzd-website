import React from "react"
import PropTypes from "prop-types"

const FormInput = ({
  name,
  type,
  onChange,
  onBlur,
  className,
  value,
  error,
  children,
  hasLabel,
  ...props
}) => {
  // replace undescore with space and capitalize first letter of name
  let label = name
    .replace(/_/g, " ")
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())

  return (
    <div className="field">
      <div className="control">
        {hasLabel && (
          <label htmlFor={name} className="has-text-white">
            {label}
          </label>
        )}
        <input
          className="input is-primary"
          type={type}
          name={name}
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && (
          <p className="help has-text-white has-text-weight-bold is-size-6">
            {error}
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
  onBlur: PropTypes.func.isRequired,
}

export default FormInput
