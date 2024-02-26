const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db.js');

const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      len: [3, 50]
    },
    role: {
      type: DataTypes.STRING(20)
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    contact: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(50)
    },
    college: {
      type: DataTypes.STRING(50)
    },
    university: {
      type: DataTypes.STRING(50)
    },
    passout_year: {
      type: DataTypes.INTEGER
    },
    current_year: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING(50)
    }
  });
  
  module.exports = User;