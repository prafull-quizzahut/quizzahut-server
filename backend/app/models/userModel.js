const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db.js');

const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50)
    },
    role: {
      type: DataTypes.STRING(20)
    },
    email: {
      type: DataTypes.STRING(255)
    },
    contact: {
      type: DataTypes.STRING(15)
    },
    password: {
      type: DataTypes.STRING(255)
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