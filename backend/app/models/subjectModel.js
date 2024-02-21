const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Subject = sequelize.define('Subject', {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50)
  },
  // Add other fields as needed
});

module.exports = Subject;
