const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Quiz = sequelize.define('Quiz', {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50)
  },
  description: {
    type: DataTypes.STRING(255)
  },
  // Add other fields as needed
});

module.exports = Quiz;
