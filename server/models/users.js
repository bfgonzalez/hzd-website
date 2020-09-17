const bycrypt = require("bcrypt-nodejs")

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  })

  Users.beforeSave((user, options) => {
    if (users.changed("password")) {
      users.password = bycrypt.hashSync(
        users.password,
        bycrypt.genSaltSync(10),
        null
      )
    }
  })

  return Users
}
