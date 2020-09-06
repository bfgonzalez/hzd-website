module.exports = (sequelize, DataTypes) => {
  const Cauldrons = sequelize.define("cauldrons", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enemies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rewards: {
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

  return Cauldrons
}
