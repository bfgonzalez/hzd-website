'use strict';

module.exports = (sequelize, DataTypes) => {
  const Machines = sequelize.define('machines', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    override: {
      type: DataTypes.STRING,
      allowNull: false
    },
    machine_class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    machine_sites: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weakness: {
      type: DataTypes.STRING,
      allowNull: false
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weak_points: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  return Machines;
};