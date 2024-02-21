const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(255)
  },
  // Add other fields as needed
});

module.exports = Question;
