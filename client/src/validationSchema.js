import Joi from "joi-browser"

const loginValidationSchema = Joi.object()
  .keys({
    username: Joi.string().required().error(Error("Username is required")),
    password: Joi.string().required().error(Error("Password is required")),
  })
  .options({ abortEarly: false })

const machinesValidationSchema = Joi.object()
  .keys({
    name: Joi.string().required().error(Error("Name is required")),
    size: Joi.string().required().error(Error("Size is required")),
    origin: Joi.string().required().error(Error("Origin is required")),
    override: Joi.string().required().error(Error("Override is required")),
    machine_class: Joi.string()
      .required()
      .error(Error("Machine Class is required")),
    machine_sites: Joi.number()
      .integer()
      .required()
      .error(Error("Machine Sites is required")),
    weakness: Joi.string().required().error(Error("Weakness is required")),
    strength: Joi.string().required().error(Error("Strength is required")),
    weak_points: Joi.string()
      .required()
      .error(Error("Weak Points is required")),
    explosive_components: Joi.string()
      .required()
      .error(Error("Explosive Components is required")),
    created_at: Joi.date().required().error(Error("Created At is required")),
    updated_at: Joi.date().required().error(Error("Updated At is required")),
  })
  .options({ abortEarly: false })

export { loginValidationSchema, machinesValidationSchema }
