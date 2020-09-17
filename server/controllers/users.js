const jwt = require("jsonwebtoken")
const passport = require("passport")

const models = require("../models")

module.exports = {
  // list all users in database (excluding created_at & updated_at)
  list(request, response) {
    return models.users
      .findAll({
        order: [["id", "ASC"]],
        attributes: ["id", "username", "password"],
      })
      .then((users) => response.status(200).send(users))
      .catch((error) => response.status(400).send(error.message))
  },

  // retrieve user by id
  retrieve(request, response) {
    return models.users
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((user) => response.status(200).send(user))
      .catch((error) => response.status(400).send(error.message))
  },

  // add user to database
  register(request, response) {
    const { id, username, password, created_at, updated_at } = request.body

    if (!username || !password) {
      response.status(400).send("Please enter a username and password")
    } else {
      return models.users
        .create({
          id: id,
          username: username,
          password: password,
          created_at: created_at,
          updated_at: updated_at,
        })
        .then((user) => response.json(user))
        .catch((error) => console.log(error))
    }
  },

  // login user
  login(request, response) {
    const { username, password } = request.body

    return models.users
      .findOne({
        where: {
          username: username,
        },
      })
      .then((user) => {
        if (!user)
          response.status(401).send("Authentication failed. User not found.")

        user.comparePassword(password, (error, isMatch) => {
          if (isMatch && !error) {
            const token = jwt.sign(
              JSON.parse(JSON.stringify(user)),
              "nodeauthsecret",
              { expiresIn: 86400 * 30 }
            )
            jwt.verify(token, "nodeauthsecret", function (error, data) {
              console.log(error, data)
            })
            response.json({ success: true, token: "JWT " + token })
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong password.",
            })
          }
        })
      })
      .catch((error) => response.status(400).send(error.message))
  },
}
